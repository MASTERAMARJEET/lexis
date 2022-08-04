<script lang="ts">
  export let links: { href: string; name: string }[]
  import { clsx } from 'clsx'
  import Hamburger from './Hamburger.svelte'
  let isOpen = false
</script>

<nav
  class="fixed z-10 flex w-full items-center justify-between border bg-gray-100 px-4 py-2 shadow sm:gap-x-[15%] sm:px-10"
>
  <a class="flex-1 sm:flex-initial" href="/"><slot>LOGO</slot></a>
  <button
    on:click={() => (isOpen = !isOpen)}
    class="mx-2 cursor-pointer p-2 sm:hidden"
  >
    <Hamburger open={isOpen} />
  </button>
  <div class="hidden w-full justify-between sm:flex">
    {#each links as link}
      <a class="text-xl" href={link.href}>{link.name}</a>
    {/each}
  </div>
  <div
    class={clsx(
      'fixed flex top-0 left-0 h-full w-screen flex-col justify-evenly items-center bg-red-200 sm:hidden duration-300 transition-all -z-10',
      {
        '-top-[100%]': !isOpen,
      },
    )}
  >
    {#each links as link}
      <a href={link.href} class="text-2xl">{link.name}</a>
    {/each}
  </div>
</nav>

<style>
  .close,
  .open {
    grid-column: 1;
    grid-row: 1;
  }
</style>
