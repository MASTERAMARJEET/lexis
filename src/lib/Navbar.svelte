<script lang="ts">
  import { page } from '$app/stores'
  import clsx from 'clsx'
  import Hamburger from './Hamburger.svelte'
  let isOpen = false
  $: activeClass = (path: string) =>
    $page.url.pathname == path ? 'active' : ''
  const links = [
    { path: '/about', title: 'About' },
    { path: '/events', title: 'Events' },
    { path: '/merch', title: 'Merch' },
    { path: '/stalls', title: 'Stalls' },
    { path: '/team', title: 'Team' },
  ]
</script>

<nav
  class="fixed z-10 flex w-full items-center justify-between bg-black px-4 py-2 sm:gap-x-[15%] sm:px-10"
>
  <a href="/" class="flex-1 sm:flex-initial">
    <img src="/lexiis.png" alt="LEXIS" class="mx-4 aspect-[9/5] h-20" />
  </a>
  <!-- Non-mobile Nav -->
  <div class="hidden w-full justify-between text-gray-200 sm:flex">
    {#each links as { path, title }}
      <a
        href={path}
        class={clsx('text-2xl hover:scale-125 transition', activeClass(path))}
      >
        {title}</a
      >
    {/each}
  </div>
  <!-- Mobile Nav -->
  <button
    on:click={() => (isOpen = !isOpen)}
    class="mx-2 cursor-pointer p-2 sm:hidden"
  >
    <Hamburger open={isOpen} />
  </button>
  <div
    class={clsx(
      'fixed flex top-0 left-0 h-full w-screen flex-col justify-evenly items-center bg-black sm:hidden transition-all -z-10',
      {
        '-top-[100%]': !isOpen,
      },
    )}
  >
    {#each links as { path, title }}
      <a
        href={path}
        on:click={() => (isOpen = !isOpen)}
        class={clsx('text-2xl text-gray-200', activeClass(path))}>{title}</a
      >
    {/each}
  </div>
</nav>

<style>
  .active {
    @apply font-bold text-red-lexis;
  }
  a {
    text-transform: capitalize;
  }
</style>
