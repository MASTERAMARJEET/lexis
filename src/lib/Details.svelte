<script lang="ts">
  import clsx from 'clsx'

  import { Motion } from 'svelte-motion'

  export let selected
  export let item: any
</script>

<Motion
  let:motion
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
>
  <div
    aria-label="overlay"
    class="absolute top-0 left-0 right-0 -bottom-24 bg-[rgb(0,0,0,0.4)]"
    use:motion
    on:click={(_) => (selected = undefined)}
  />
</Motion>
<Motion layoutId={item.name} let:motion>
  <div
    use:motion
    class={clsx(
      'absolute top-20 left-6 right-6 rounded-lg backdrop-blur shadow-lg',
    )}
    style="background-color: {item.bg}; color: {item.text}"
    on:click={(_) => (selected = undefined)}
  >
    <div
      class="m-4 h-[35vmax] {item.image} bg-contain bg-center bg-no-repeat"
    />
    <p class="mx-auto">
      {item.name}
    </p>
  </div>
</Motion>
