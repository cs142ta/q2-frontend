<script>
  import { get } from "../api.js";
  import { user } from "../state.js";

  export let data = {
    student_name: "",
    question_text: "",
    waiting: true,
    question_id: 0,
  };

  async function claimHelp() {
    try {
      const response = await get("claim-question", {
        question_id: data.question_id,
        netid: $user.netid,
        course_id: "cs142",
      });

      if (response.success) {
        data.waiting = false;
      }
    } catch (error) {
      console.log("stop error");
    }
  }

  async function stopHelp() {
    try {
      const response = await get("end-question", {
        question_id: data.question_id,
        netid: $user.netid,
      });
    } catch (error) {
      console.log("stop error");
    }
  }
</script>

<div class="queue-row">
  <span class="text" title={data.question_text}><strong>{data.student_name}:</strong> {data.question_text}</span>
  <!-- <span class="text" title={data.question_text}>{data.question_text}</span>-->
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
