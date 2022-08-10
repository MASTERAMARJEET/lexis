<script lang="ts">
  import { url, isActive, layout } from '@roxi/routify'
  import clsx from 'clsx'
  import Hamburger from './Hamburger.svelte'
  export let children = $layout.children
  let isOpen = false
  $: getClass = (path: string) => ($isActive(path) ? 'active' : '')
  $: links = children.map(({ path, title }) => ({
    path,
    title,
    activeClass: getClass(path),
  }))
</script>

<nav
  class="fixed z-10 flex w-full items-center justify-between bg-black px-4 py-2 sm:gap-x-[15%] sm:px-10"
>
  <a href={$url('/')} class="flex-1 sm:flex-initial">
    <img src="/lexiis.png" alt="LEXIS" class="mx-4 aspect-[9/5] h-20" />
  </a>
  <!-- Non-mobile Nav -->
  <div class="hidden w-full justify-between text-gray-200 sm:flex">
    {#each links as { path, title, activeClass }}
      <a
        href={$url(path)}
        class={clsx('text-2xl hover:scale-125 transition', activeClass)}
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
      'fixed flex top-0 left-0 h-full w-screen flex-col justify-evenly items-center bg-black-lexis sm:hidden transition-all -z-10',
      {
        '-top-[100%]': !isOpen,
      },
    )}
  >
    {#each links as { path, title }}
      <a
        href={$url(path)}
        on:click={() => (isOpen = !isOpen)}
        class="text-2xl text-gray-200">{title}</a
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
