<script>
  import { onDestroy } from "svelte";

  import { get } from "../api.js";
  import { user } from "../state.js";

  import QueueRow from "../components/queue-row.svelte";

  // the help queue
  let queue = [
    {
      name: "Nathan Craddock",
      question: "Can you please help me!",
      waiting: true,
    },
    {
      name: "Confused Student",
      question: "How do you make an array of vectors? Are there scalars?",
      waiting: true,
    },
    {
      name: "Rando Student",
      question: "Is there a text length limit to these questions? I'm going to try to find out. My question starts all the way back on the day of my birth when",
      waiting: false,
    },
  ];

  async function updateQueue() {
    try {
      const response = await get("q2/get_waiting_questions", {
        netid: $user.netid,
        course_id: "cs142",
      });

      queue = response;
    } catch (error) {
      console.log("queue update failure");
    }
  }

  // HACK: refresh the queue every 1000ms
  const interval = setInterval(updateQueue, 1000);
  onDestroy(() => clearInterval(interval));
</script>

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
