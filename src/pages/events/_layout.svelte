<script lang="ts">
  import Details from 'src/lib/Details.svelte'
  import Card from 'src/lib/Card.svelte'
  import AnimateSharedLayout from 'svelte-motion/src/components/AnimateSharedLayout/AnimateSharedLayout.svelte'
  import AnimatePresence from 'svelte-motion/src/components/AnimatePresence/AnimatePresence.svelte'
  import { onMount } from 'svelte'
  import { getEventLink } from 'src/lib/utils'
  import { isChangingPage } from '@roxi/routify'
  import { events } from 'src/lib/eventData'

  let selected: string | undefined
  onMount(() => (selected = getEventLink()))
  const lockScroll = (selected: string | undefined) => {
    if (selected) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }
  $: selected, lockScroll(selected)
</script>

<AnimateSharedLayout type="crossfade">
  <div
    class="h-remain grid grid-cols-2 gap-4 py-8 px-[10%] sm:grid-cols-2 lg:grid-cols-3 lg:gap-12"
  >
    {#each events as event (event.link)}
      <Card bind:selected {event} />
    {/each}
  </div>
  <AnimatePresence
    list={events.filter((event) => event.link === selected)}
    let:item
  >
    <Details bind:selected event={item}>
      <slot />
    </Details>
  </AnimatePresence>
</AnimateSharedLayout>
