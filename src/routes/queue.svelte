<script>
  import { onDestroy } from "svelte";

  import { get } from "../api.js";
  import { user } from "../state.js";

  import QueueRow from "../components/queue-row.svelte";

  // the help queue
  let queue = [];

  async function updateQueue() {
    try {
      queue = await get("get-waiting-questions", {
        netid: $user.netid,
        course_id: "cs142",
      });
    } catch (error) {
      console.log("queue update failure");
    }
  }

  // HACK: refresh the queue every 1000ms
  const interval = setInterval(updateQueue, 1000);
  onDestroy(() => clearInterval(interval));
</script>

<svelte:head>
  <title>Queue</title>
</svelte:head>

<h1>Queue</h1>

<div id="queue">
  {#each queue as row}
    <QueueRow data={row} />
  {/each}
</div>

<style>
  #queue {
    width: 70%;
  }
</style>
