<script context="module">
  const year = new Date().getFullYear();
</script>

<style>
  footer {
    background: #5a98d0;
    position: relative;
    height: 6rem;
    display: flex;
    align-items: center;
  }

  .inner {
    border-radius: 0 200px 0 0;
    background: #316099;
    width: calc(100% - 1rem);
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    margin: auto;
  }

  .copy {
    opacity: 0.6;
  }

  @media (min-width: 600px) {
    .inner {
      width: calc(100% - 6rem);
    }
  }
</style>

<footer class="text-white mt-auto">
  <div class="inner py-12 font-light" />
  <div class="copy container px-8">&copy; {year} TP Solar</div>
</footer>
