<script lang="ts">
  import clsx from 'clsx'

  export let open: boolean

  const EASING = `cubic-bezier(0.4, 0, 0.2, 1)`
  $: lineTransition = open
    ? `top 300ms 50ms ${EASING}, transform 300ms 350ms ${EASING}`
    : `top 300ms 350ms ${EASING}, transform 300ms 50ms ${EASING}`
</script>

<div
  class={clsx('relative h-4 w-6 cursor-pointer', $$props.class)}
  class:open
  on:click
  on:keydown
  on:keypress
>
  <span
    class="line top-0"
    style="transition: {lineTransition}; {open
      ? 'transform: rotate(45deg)'
      : ''}"
  />
  <span
    class="line top-1/2"
    style="transition: {lineTransition}; {open
      ? 'transform: rotate(45deg)'
      : ''}"
  />
  <span
    class="line top-full"
    style="transition: {lineTransition}; {open
      ? 'transform: rotate(-45deg)'
      : ''}"
  />
</div>

<style>
  .line {
    @apply absolute -mx-[50%] h-[2px] w-full rounded-[2px]  bg-current;
  }
  .open .line {
    top: 50% !important;
  }
</style>
