<script context="module">
  const year = new Date().getFullYear();
</script>

<script>
  import Phone from "./icons/Phone.svelte";
  import Mail from "./icons/Mail.svelte";

  const address = [
    { Icon: Phone, label: "+48 473-321-854", href: "tel:+48473321854" },
    { Icon: Phone, label: "+48 473-321-854", href: "tel:+48473321854" },
    { Icon: Mail, label: "dawid@kienig.pl", href: "mailto:dawid@kienig.pl" },
  ];
</script>

<footer class="bg-white pt-8">
  <h2 class="container px-4 font-hairline text-2xl md:text-3xl">Kontakt</h2>
  <div class="container p-4 md:flex">
    {#each address as { Icon, label, href }}
      <a {href} class="flex my-4 md:mr-12">
        <Icon />
        <span class="pl-4">{label}</span>
      </a>
    {/each}
  </div>
  <div class="bg-gray-100 px-4 py-8 font-hairline">
    <div class="container px-4">&copy; {year} TP Solar</div>
  </div>
</footer>
