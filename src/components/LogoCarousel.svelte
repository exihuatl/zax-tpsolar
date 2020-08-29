<script>
  const NUMBER_OF_IMAGES = 8;
  const INTERVAL = 1000 * 6; // 6 second

  const images = [...Array(NUMBER_OF_IMAGES)].map((_, i) => `/images/logos/${i + 1}.svg`);

  /** @param {HTMLElement} node */
  const bindCarousel = node => {
    let curr = 0;

    const interval = setInterval(() => {
      curr = curr ? 0 : NUMBER_OF_IMAGES - 1;

      Array.from(node.children)[curr].scrollIntoView({ behavior: "smooth" });
    }, INTERVAL);

    return {
      destroy: () => (interval = null),
    };
  };
</script>

<section class="container overflow-hidden">
  <div use:bindCarousel class="overflow-y-hidden overflow-x-auto whitespace-no-wrap">
    {#each images as image}
      <img class="w-1/4 h-48 p-8 inline-block" src={image} alt="Compnay Logo" />
    {/each}
  </div>
</section>
