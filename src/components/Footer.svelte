<script context="module">
  const year = new Date().getFullYear();
</script>

<script>
  import Phone from "./icons/Phone.svelte";
  import Mail from "./icons/Mail.svelte";

  const address = [
    { Icon: Phone, label: "+48 513-124-164", href: "tel:+48513124164" },
    { Icon: Phone, label: "+48 793-009-441", href: "tel:+48793009441" },
    { Icon: Mail, label: "biuro@tpsolar.pl", href: "mailto:biuro@tpsolar.pl" },
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
