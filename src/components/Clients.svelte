<script>
  import MarqueeTextWidget from "svelte-marquee-text-widget/src/MarqueeTextWidget.svelte";

  const NUMBER_OF_IMAGES = 8;
  const images = [...Array(NUMBER_OF_IMAGES)].map((_, i) => `/images/logos/${i + 1}.svg`);
</script>

<section class="py-8 md:py-16 bg-gray-100">
  <MarqueeTextWidget duration={50}>
    <div class="flex">
      {#each images as src}<img class="w-40 h-40 block m-2 p-8 rounded-md bg-white" {src} alt="client-logo" />{/each}
    </div>
  </MarqueeTextWidget>
</section>
