<script lang="ts">
  import clsx from 'clsx'

  import { Motion } from 'svelte-motion'

  export let selected: string | undefined
  export let event: any
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
<Motion layoutId={event.name} let:motion>
  <div
    use:motion
    class={clsx('absolute top-36 left-6 right-6 rounded-lg shadow-lg')}
    style="background-color: {event.bg}; color: {event.text}"
    on:click={(_) => (selected = undefined)}
  >
    <div
      class="m-4 h-[35vmax] {event.image} bg-contain bg-center bg-no-repeat"
    />
    <p class="mx-auto">
      {event.name}
    </p>
  </div>
</Motion>
