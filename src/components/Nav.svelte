<script>
  import Current from "./_NavCurrent.svelte";
  export let segment;
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  a {
    position: relative;
    display: inline-block;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>

<nav>
  <ul>
    <li>
      <a href=".">
        home
        {#if segment === undefined}
          <Current />
        {/if}
      </a>
    </li>
    <li>
      <a href="about">
        about
        {#if segment === 'about'}
          <Current />
        {/if}
      </a>
    </li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <li>
      <a rel="prefetch" href="blog">
        blog
        {#if segment === 'blog'}
          <Current />
        {/if}
      </a>
    </li>
  </ul>
</nav>
