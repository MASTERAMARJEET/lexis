<script lang="ts">
  import { goto } from '@roxi/routify'

  import type { LexisEvent } from 'src/types'
  import { Motion } from 'svelte-motion'
  export let event: LexisEvent
  export let selected: string | undefined
  const activeStyle = { scale: 1.1, filter: 'grayscale(0)' }
</script>

<Motion
  let:motion
  whileHover={activeStyle}
  whileFocus={activeStyle}
  layoutId={event.link}
  layout
>
  <button
    on:click={(_) => {
      $goto(`./${event.link}`)
      selected = event.link
    }}
    use:motion
    class="flex items-center justify-center rounded-lg p-4 focus:outline-none md:p-8 lg:text-lg"
    style="background-color: {event.bg}; color: {event.text};"
  >
    {event.name}
  </button>
</Motion>
