<script>
  import "../app.css";
  import { user } from "../state.js";
</script>

<!-- Shared header -->
<nav>
  <a href="/">Q2</a>
  {#if $user.role === "student" || $user.role === "ta"}
    <a href="/ask">Ask</a>
  {/if}
  {#if $user.role === "ta"}
    <a href="/queue">Queue</a>
  {/if}
</nav>

<!-- Page content -->
<slot/>

<!-- shared styles -->
<style>
  nav a {
    padding-right: 1em;
    color: black;
    text-decoration: none;
  }

  nav a:hover {
    text-decoration: underline;
  }
</style>
