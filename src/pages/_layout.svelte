<script>
  import NavBar from 'src/lib/Navbar/Bar.svelte'
</script>

<div id="app">
  <aside>
    <NavBar />
  </aside>
  <main>
    <slot />
  </main>
</div>
