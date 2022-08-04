<script lang="ts">
  import Navbar from './lib/Navbar.svelte'
  const links = [
    { href: '/', name: 'About' },
    { href: '/', name: 'Events' },
    { href: '/', name: 'Team' },
    { href: '/', name: 'Contact Us' },
  ]
</script>

<main>
  <Navbar {links}>LEXIS</Navbar>
</main>

<style>
</style>
