<script lang="ts">
  import { goto } from '@roxi/routify'

  import type { LexisEvent } from 'src/types'
  import { Motion } from 'svelte-motion'
  export let thing: LexisEvent
  export let selected: string | undefined
  const activeStyle = { scale: 1.1, filter: 'grayscale(0)' }
</script>

<Motion
  let:motion
  whileHover={activeStyle}
  whileFocus={activeStyle}
  layoutId={thing.link}
  layout
>
  <button
    on:click={(_) => {
      $goto(`./${thing.link}`)
      selected = thing.link
    }}
    use:motion
    class="flex items-center justify-center rounded-lg p-4 uppercase focus:outline-none md:p-8 lg:text-lg"
    style="background-color: {thing.bg}; color: {thing.text};"
  >
    {thing.name}
  </button>
</Motion>
