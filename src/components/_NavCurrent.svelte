<script context="module">
  import { crossfade } from "svelte/transition";
  import { sineInOut } from "svelte/easing";

  const [send, receive] = crossfade({
    duration: 150,
    easing: sineInOut
  });
</script>

<script>
  export let key = "current";
</script>

<style>
  .current {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: 0;
  }
</style>

<div in:receive={{ key }} out:send={{ key }} class="current" />
