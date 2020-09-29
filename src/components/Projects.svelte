<script>
  const NUMBER_OF_IMAGES = 16;
  const images = [...Array(NUMBER_OF_IMAGES)].map((_, i) => `/images/${i + 1}.jpg`);
</script>

<style>
  figure {
    padding-top: 56.25%;
  }
</style>

<section class="pt-8 md:pt-16 bg-white">
  <div class="container px-4 mb-4">
    <h2 class="font-hairline text-2xl md:text-3xl">Nasze realizacje</h2>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {#each images as src}
      <figure class="relative pt-48 w-full">
        <img class="absolute top-0 left-0 object-cover w-full h-full" {src} alt="client-logo" />
      </figure>
    {/each}
  </div>
</section>
