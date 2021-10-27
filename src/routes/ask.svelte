<script>
  import { get } from "../api.js";
  import { user } from "../state.js";

  // const rooms = ["1119", "1121", "1102"];

  let type = "lab";
  let room = "1119";
  let question = "";
  let readFAQ = false;

  async function submitQuestion() {
    try {
      const response = await get("q2/queue-join", {
        netid: $user.netid,
        question: question,
        course_id: "cs142",
      });
      question = "";
    } catch (error) {
      console.log("Submit error", error)
    }
  }

</script>

<h1>Ask a question:</h1>

<form>
  <!--
  <group class="radio-toggle">
    <div>
      <input id="lab" type="radio" bind:group={type} name="type" value="lab">
      <label for="lab">In Lab</label>
    </div>
    <div>
      <input id="zoom" type="radio" bind:group={type} name="type" value="zoom">
      <label for="zoom" >Zoom</label>
    </div>
  </group>
  <br>
  {#if type === "lab"}
  <group class="radio-toggle">
    {#each rooms as roomNum (roomNum)}
    <div>
      <input id="room-{roomNum}" type="radio" bind:group={room} name="room" value={roomNum}>
      <label for="room-{roomNum}">{roomNum}</label>
    </div>
    {/each}
  </group><br>
  {/if}
  -->
  <textarea bind:value={question} placeholder="Enter your question"></textarea><br>
  <span>
    <input type=submit value="Submit" on:click|preventDefault={submitQuestion}>
    <!--<input type=checkbox bind:checked={readFAQ}>-->
  </span>

  <!--<p>By checking the box you agree that you have read the FAQ</p>-->
</form>

<!--
<h2>you selected: {type} {#if type === "lab"} in room: {room} {/if}
</h2>
<h4>your question is: {question}</h4>
-->

<style>

form {
  width: 70%;
}

.radio-toggle {
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  border-radius: 3px;
  border: 1px solid #b6b6b6;
  margin-bottom: 4px;
  color: #343434;
  user-select: none;
}

.radio-toggle div {
  flex: 1;
}

.radio-toggle label {
  width: 100%;
  text-align: center;
  white-space: nowrap;
  display: inline-block;
  padding: 0.2rem 1rem 0.2rem 1rem;
  cursor: pointer;
}

.radio-toggle label {
  border-right: 1px solid #b6b6b6;
}

div:last-child label {
  border-right: 0;
}

.radio-toggle label:hover {
  background-color: #f4f4f4;
}

.radio-toggle input {
  display: none;
}

.radio-toggle input:checked + label {
  background-color: #61a5dd;
  color: white;
  cursor: default;
  box-shadow: inset 0px 0px 10px 1px #579ad0;
  font-weight: bold;
}

textarea {
  min-width: 100%;
  width: 100%;
  max-width: 100%;
  margin-bottom: 4px;
  padding: 1ch;
  font-family: sans-serif;
  border-radius: 3px;
  border: 1px solid #b6b6b6;
}

input[type=submit] {
  width: 100%;
}

</style>
