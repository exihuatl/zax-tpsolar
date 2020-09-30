<script>
  const features = [
    {
      title: "Pompy ciepła",
      body: "Tuż i Moskalom przez płotki, przez konar błysnęło jako osóbki, które na urząd wielkie polowanie.",
    },
    {
      title: "Fotowoltaika",
      body: "Tuż i Moskalom przez płotki, przez konar błysnęło jako osóbki, które na urząd wielkie polowanie.",
    },
    {
      title: "Rekuperacja",
      body: "Tuż i Moskalom przez płotki, przez konar błysnęło jako osóbki, które na urząd wielkie polowanie.",
    },
    {
      title: "Stacje uzdatniania wody",
      body: "Tuż i Moskalom przez płotki, przez konar błysnęło jako osóbki, które na urząd wielkie polowanie.",
    },
    {
      title: "Kolektory słoneczne",
      body: "Tuż i Moskalom przez płotki, przez konar błysnęło jako osóbki, które na urząd wielkie polowanie.",
    },
    {
      title: "Kotły co",
      body: "Tuż i Moskalom przez płotki, przez konar błysnęło jako osóbki, które na urząd wielkie polowanie.",
    },
  ];
</script>

<section class="py-8 md:py-16 bg-gray-100">
  <div class="container px-4">
    <h2 class="font-hairline text-2xl md:text-3xl mb-4">Oferta</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each features as { title, body }}
        <div class="relative">
          <h3 class="my-1 font-semibold">{title}</h3>
          <p class="text-gray-700">{body}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
