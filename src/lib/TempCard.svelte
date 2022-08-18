<script lang="ts">
  import { goto } from '@roxi/routify'

  import { Motion } from 'svelte-motion'
  import type { LexisEvent } from './lexisData'
  export let thing: LexisEvent
  export let selected: string | undefined
  const activeStyle = { scale: 1.05, filter: 'grayscale(0)' }
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
    class="flex items-center justify-center rounded-lg p-4 uppercase outline outline-2 outline-white-lexis focus:outline-2 md:p-8 lg:text-lg"
  >
    {thing.name}
  </button>
</Motion>
