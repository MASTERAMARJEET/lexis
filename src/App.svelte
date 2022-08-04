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
  <div
    class="grid h-screen w-full flex-col items-center justify-around lg:grid-cols-2 lg:px-8"
  >
    <p class="mx-6 mt-8 text-center text-4xl lg:col-start-2">
      27th and 28th August 2022
    </p>
    <img
      src="/ReadingSideDoodle.svg"
      alt="Girl Reading Book"
      class="mx-auto w-[80vw] md:w-[65vw] lg:row-start-1 lg:w-[50vw]"
    />
  </div>
</main>

<style>
</style>
