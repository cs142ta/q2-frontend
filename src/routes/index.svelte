<script>
  import { user } from "../state.js"
  import { get } from "../api.js"

  let netid = "";

  async function login() {
    $user.netid = netid;
    try {
      const response = await get("user-role", {
        netid: $user.netid,
        course_id: "cs142",
      });
      if (response) {
        $user.role = response.role;
        $user.loggedIn = true;
        netid = "";
      }
    } catch (error) {
      console.log("error", error);
    }
  }

  async function logout() {
    $user.loggedIn = false;
    $user.netid = "";
    $user.role = "";
  }
</script>

<h1>Welcome to the CS 142 Help Queue</h1>

<label for="netid">Enter your netid</label>
<input id="netid" type="text" bind:value={netid} disabled={$user.loggedIn}>

{#if $user.loggedIn}
  <input type="submit" value="Logout" on:click={logout}>
{:else}
  <input type="submit" value="Login" on:click={login} disabled={netid === ""}>
{/if}

<style>
</style>
