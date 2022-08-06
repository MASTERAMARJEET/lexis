<script lang="ts">
  import clsx from 'clsx'
  import { Motion } from 'svelte-motion'
  export let event: { name: string; image: string; bg: string; text: string }
  export let selected: string
</script>

<Motion
  let:motion
  whileHover={{ scale: 1.1, filter: 'grayscale(0)' }}
  layoutId={event.name}
  layout
>
  <div
    on:click={(_) => (selected = event.name)}
    use:motion
    class="flex items-center justify-center rounded-lg p-4 md:p-8 lg:text-lg"
    style="background-color: {event.bg}; color: {event.text};"
  >
    {event.name}
  </div>
</Motion>
