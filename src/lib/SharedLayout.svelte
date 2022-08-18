<script lang="ts">
  import Details from 'src/lib/Details.svelte'
  import TempCard from 'src/lib/TempCard.svelte'
  import AnimateSharedLayout from 'svelte-motion/src/components/AnimateSharedLayout/AnimateSharedLayout.svelte'
  import AnimatePresence from 'svelte-motion/src/components/AnimatePresence/AnimatePresence.svelte'
  import type { LexisEvent } from './lexisData'

  export let things: LexisEvent[]
  export let selected: string | undefined
  export let backNavigate: () => void

  const lockScroll = (selected: string | undefined) => {
    if (selected) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }
  $: selected, lockScroll(selected)
  const closeHandler = () => {
    backNavigate()
    selected = undefined
  }
</script>

<AnimateSharedLayout type="crossfade">
  <div
    class="h-remain grid grid-cols-2 gap-4 py-8 px-[10%] sm:grid-cols-2 lg:grid-cols-3 lg:gap-12"
  >
    {#each things as thing (thing.link)}
      <TempCard bind:selected {thing} />
    {/each}
  </div>
  <AnimatePresence
    list={things.filter((thing) => thing.link === selected)}
    let:item
  >
    <Details event={item} {closeHandler}>
      <slot />
    </Details>
  </AnimatePresence>
</AnimateSharedLayout>
