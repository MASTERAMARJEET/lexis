<script lang="ts">
  import { clsx } from 'clsx'
  import Hamburger from './Hamburger.svelte'
  export let links: { to: string; name: string }[]
  let isOpen = false
</script>

<nav
  class="fixed z-10 flex w-full items-center justify-between bg-black-lexis px-4 py-2 sm:gap-x-[15%] sm:px-10"
>
  <Link class="flex-1 sm:flex-initial" to="/"><slot>LOGO</slot></Link>
  <!-- Non-mobile Nav -->
  <div class="hidden w-full justify-between text-gray-200 sm:flex">
    {#each links as { to, name }}
      <Link class="text-2xl" {to}>{name}</Link>
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
      'fixed flex top-0 left-0 h-full w-screen flex-col justify-evenly items-center bg-black-lexis sm:hidden duration-300 transition-all -z-10',
      {
        '-top-[100%]': !isOpen,
      },
    )}
  >
    {#each links as { to, name }}
      <Link {to} class="text-2xl text-gray-200">{name}</Link>
    {/each}
  </div>
</nav>
