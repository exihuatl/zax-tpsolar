<script>
  import Button from "./atoms/Button.svelte";
</script>

<style>
  p {
    opacity: 0.6;
  }

  .map {
    width: 100%;
    height: 40vh;
  }

  .row {
    margin: -2rem;
  }
</style>

<section class="mb-24">
  <header class="relative block text-center px-8 py-16 text-white">
    <img
      class="absolute w-full h-full top-0 left-0 object-cover"
      src="/images/illustrations/contact-us-bg.svg"
      alt="background" />
    <div class="container max-w-3xl">
      <h2 class="relative text-4xl mb-4">Skontaktuj się z nami</h2>
      <p class="relative">
        Kupść, Gedymin i porządek. Brama na tem miejscu sobie zostawionem. Trudno było. bo tak krzycząc pan rejent
        Bolesta, zwano go bronią od chmielu tyki w twarz podróżnego barwą spłonęła rumian jak zdrowe oblicz gospodarza,
        gdy prace skończywszy rolnicze, na skarb carski zabierano.
      </p>
    </div>
  </header>

  <div class="container mt-12 px-8 py-12">
    <div class="flex row pb-8">
      <div class="w-full md:w-1/3 p-8">
        <img class="mb-12" src="/images/illustrations/contact-us.svg" alt="contact-us" />
        <h3 class="mt-8 mb-2 text-lg uppercase">Address</h3>
        <p class="font-thin">Id convallis placerat sit sed duis id amet volutpat quam a, pharetra.</p>
        <h3 class="mt-8 mb-2 text-lg uppercase">Phone</h3>
        <p class="font-thin">
          <img src="/icons/phone.svg" alt="phone-icon" class="inline-block mr-2" /> +48 473-321-854
        </p>
        <p class="font-thin">
          <img src="/icons/phone.svg" alt="phone-icon" class="inline-block mr-2" /> +48 654-313-564
        </p>
      </div>
      <div class="w-full md:w-2/3 p-8">
        <div class="shadow-md rounded-md p-8">
          <h3 class="mb-2 text-lg uppercase">Send us a message</h3>
          <label for="name" class="font-thin mt-12 mb-2 block">Full name</label>
          <input
            id="name"
            placeholder="Your Name"
            class="border-primary-500 border-solid border rounded-md p-4 w-full font-thin" />
          <label for="email" class="font-thin mt-12 mb-2 block">Email</label>
          <input
            id="email"
            placeholder="Your Email"
            class="border-primary-500 border-solid border rounded-md p-4 w-full font-thin" />
          <label for="message" class="font-thin mt-12 mb-2 block">Message</label>
          <textarea
            id="message"
            placeholder="Your Message"
            rows="4"
            class="border-primary-500 border-solid border rounded-md p-4 w-full font-thin mb-12" />
          <Button type="submit" full>Wyślij</Button>
        </div>
      </div>
    </div>

    <img class="map bg-orange-200 mt-12" src="https://staticmapmaker.com/img/google@2x.png" alt="google-map" />
  </div>
</section>
