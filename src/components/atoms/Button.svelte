<script>
  export let full = false;
</script>

<style>
  button {
    border-radius: 10px;
    box-shadow: 5px 10px 20px rgba(53, 110, 173, 0.2);
    background: #5a98d0;
    transition: 150ms ease-in-out;
  }

  button:hover {
    opacity: 0.9;
  }

  .full {
    width: 100%;
  }
</style>

<button class:full class="px-12 py-4 text-white whitespace-no-wrap font-light"><slot /></button>
