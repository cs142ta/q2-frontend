<script>
  import { get } from "../api.js";
  import { user } from "../state.js";

  export let data = {
    name: "",
    question: "",
    waiting: true,
  };

  async function claimHelp() {
    try {
      const response = await get("q2/claim_question", {
        question_id: 0,
        netid: $user.netid,
        course_id: "cs142",
      });
    } catch (error) {
      console.log("stop error");
    }
  }

  async function stopHelp() {
    try {
      const response = await get("q2/end_question", {
        question_id: 0,
        netid: $user.netid,
      });
    } catch (error) {
      console.log("stop error");
    }
  }
</script>

<div class="queue-row">
  <span class="text" title={data.question}><strong>{data.name}:</strong> {data.question}</span>
  <!-- <span class="text" title={data.question}>{data.question}</span>-->
  <!-- <span class="time">00:00</span> -->
  <span class="action">
    {#if data.waiting}
      <button on:click={claimHelp}>Help</button>
    {:else}
      <button on:click={stopHelp}>Remove</button>
    {/if}
  </span>
</div>

<style>
.queue-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  white-space: nowrap;
  width: 100%;
}

.queue-row span {
  margin-right: 1em;
}

.text {
  flex-grow: 4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

button {
  width: 6em;
}
</style>
