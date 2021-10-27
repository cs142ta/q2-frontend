<script>
import { user } from "../state.js"
import { get } from "../api.js"

let netid = "";

async function login() {
    $user.netid = netid;
    netid = "";
    $user.loggedIn = true;
    $user.role = "ta";
    try {
        const response = await get("q2/user-role/", { netid: $user.netid });
        if (response) {
            user.role = response.role;
        }
    } catch (error) {
        console.log("error", error);
    }
}
</script>

<h1>Welcome to the CS 142 Help Queue</h1>

<label for="netid">Enter your netid</label>
<input id="netid" type="text" bind:value={netid}>
<input type="submit" value="Login" on:click={login} disabled={netid === ""}>

<style>
</style>
