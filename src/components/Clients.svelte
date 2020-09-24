<script>
  const NUMBER_OF_IMAGES = 8;
  const images = [...Array(NUMBER_OF_IMAGES)].map((_, i) => `/images/logos/${i + 1}.svg`);
</script>

<style>
  section {
    background: #5a98d0;
    border-radius: 200px 0 0 0;
  }

  header {
    padding-left: 2rem;
  }

  header p {
    opacity: 0.6;
  }

  .logos {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1px;
    background: rgba(255, 255, 255, 0.4);
  }

  .logos div {
    background: #5a98d0;
  }
  .logos img {
    border-radius: 20px;
    width: 8rem;
    height: 8rem;
  }

  @media (min-width: 600px) {
    .logos {
      grid-template-columns: repeat(4, 1fr);
    }

    .logos img {
      width: 10rem;
      height: 10rem;
    }
  }

  @media (min-width: 980px) {
    header {
      display: flex;
    }

    header h2 {
      margin-right: 6rem;
      flex: 0 0 auto;
    }
  }
</style>

<section class="w-full py-24">
  <div class="container px-8">
    <header class="text-white">
      <h2 class="text-4xl">Nasi klienci</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
      </p>
    </header>

    <div class="logos my-24">
      {#each images as src}
        <div><img class="w-40 h-40 p-8 block my-8 mx-auto bg-white" {src} alt="company logo" /></div>
      {/each}
    </div>
  </div>
</section>
