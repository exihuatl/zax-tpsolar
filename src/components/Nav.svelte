<script>
  import Button from "./atoms/Button.svelte";
</script>

<style>
  nav {
    min-height: 90vh;
  }

  .logo {
    flex: 0 0;
    top: 0;
    left: 0;
    width: 12rem;
    margin-right: auto;
  }

  .overlay {
    background: linear-gradient(0deg, #98c3e8 8.84%, rgba(152, 195, 232, 0) 31.12%);
    opacity: 0.2;
  }

  h1 {
    font-size: 2.25rem;
    line-height: 1.3334;
  }

  p {
    color: #1f3f68;
    opacity: 0.6;
  }

  @media (min-width: 980px) {
    h1 {
      font-size: 3rem;
    }

    .logo {
      position: absolute;
    }

    .container {
      display: grid;
      grid-template-columns: minmax(auto, 512px) 1fr;
    }
  }
</style>

<nav class="bg-white overflow-hidden w-full relative flex justify-center items-center flex-wrap">
  <img class="logo" src="/icons/logo.svg" alt="TP Solar" />
  <div class="overlay absolute top-0 left-0 w-full h-full pointer-events-none" />
  <div class="container p-8">
    <div class="mb-8">
      <h1 class="relative font-thin mb-8">Najlepsze panele słoneczne pod słońcem</h1>
      <p class="mb-16">
        Tuż i Moskalom przez płotki, przez konar błysnęło jako osóbki, które na urząd wielkie polowanie. I też nie
        widział, bo tak nazywano młodzieńca, który teraz za dozorcę księdza, który teraz jeśli nasza młodzie wyjeżdża za
        gośćmi, jak kochał pana zwykł mawiać pan Rejent był to mówiąc, że dziś z gorzkim uśmiechem
      </p>
      <Button>Zobacz nasze realizacje</Button>
    </div>
    <img src="/images/illustrations/hero.svg" alt="hero" />
  </div>
</nav>
