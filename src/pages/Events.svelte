<script lang="ts">
  import Details from 'src/lib/Details.svelte'
  import Card from 'src/lib/Card.svelte'
  import { AnimateSharedLayout, Motion } from 'svelte-motion'
  import type { LexisEvent } from 'src/types'
  import AnimatePresence from 'svelte-motion/src/components/AnimatePresence/AnimatePresence.svelte'

  const events: LexisEvent[] = [
    {
      name: 'Verse',
      image: 'bg-[url(/VERSE.png)]',
      bg: '#EBE0BC',
      text: '#000000',
    },
    {
      name: 'Spin The Wheel',
      image: 'bg-[url(/SpinTheWheel.png)]',
      bg: '#771C99',
      text: '#F2EDDB',
    },
    {
      name: 'Writing Lab',
      image: 'bg-[url(/LexisWritingLab.png)]',
      bg: '#1A992C',
      text: '#000000',
    },
    {
      name: 'Coffee Cigarates and More',
      image: 'bg-[url(/CoffeeCigarettesandMore.png)]',
      bg: '#8CD4EB',
      text: '#000000',
    },
    {
      name: 'Impromptu',
      image: 'bg-[url(/Impromptu.png)]',
      bg: '#E6E7DC',
      text: '#000000',
    },
  ]
  let selected: string | undefined
  const lockScroll = (selected: string | undefined) => {
    if (selected) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'scroll'
    }
  }
  $: selected, lockScroll(selected)
</script>

<AnimateSharedLayout type="crossfade">
  <Motion let:motion={grid} layout>
    <div
      use:grid
      class="grid grid-cols-2 gap-4 px-[10%] pt-36 pb-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12"
    >
      {#each events as event (event.name)}
        <Card {event} bind:selected />
      {/each}
    </div>
  </Motion>
  <AnimatePresence
    list={events.filter((event) => event.name === selected)}
    let:item
  >
    <Details bind:selected event={item} />
  </AnimatePresence>
</AnimateSharedLayout>
