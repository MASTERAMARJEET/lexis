<script lang="ts">
  import Details from 'src/lib/Details.svelte'
  import Card from 'src/lib/Card.svelte'
  import { AnimateSharedLayout, Motion } from 'svelte-motion'
  import type { LexisEvent } from 'src/types'
  import AnimatePresence from 'svelte-motion/src/components/AnimatePresence/AnimatePresence.svelte'
  import { onMount } from 'svelte'
  import { getEventLink } from 'src/lib/utils'

  const events: LexisEvent[] = [
    {
      name: 'Verse',
      link: 'verse',
      image: 'bg-[url(/VERSE.png)]',
      bg: '#ebe0bc',
      text: '#000000',
    },
    {
      name: 'Spin The Wheel',
      link: 'spin_the_wheel',
      image: 'bg-[url(/SpinTheWheel.png)]',
      bg: '#771C99',
      text: '#F2EDDB',
    },
    {
      name: 'Writing Lab',
      link: 'writing_lab',
      image: 'bg-[url(/LexisWritingLab.png)]',
      bg: '#1A992C',
      text: '#000000',
    },
    {
      name: 'Coffee, Cigarettes and More',
      link: 'coffee_cigarates_and_more',
      image: 'bg-[url(/CoffeeCigarettesandMore.png)]',
      bg: '#8CD4EB',
      text: '#000000',
    },
    {
      name: 'Impromptu',
      link: 'impromptu',
      image: 'bg-[url(/Impromptu.png)]',
      bg: '#E6E7DC',
      text: '#000000',
    },
    {
      name: 'Sci-Fi Lite',
      link: 'sci-fi_lite',
      image: 'bg-[url(/Sci-Fi.png)]',
      bg: '#000000',
      text: '#EAFF06',
    },
    {
      name: 'Opus',
      link: 'opus',
      image: 'bg-[url(/Opus.png)]',
      bg: '#ebe0bc',
      text: '#000000',
    },
    {
      name: 'Mad Ads',
      link: 'mad_ads',
      image: 'bg-[url(/MadAds.png)]',
      bg: '#771C99',
      text: '#F2EDDB',
    },
    {
      name: 'Dublin Wager',
      link: 'dublin_wager',
      image: 'bg-[url(/TODO.png)]',
      bg: '#1A992C',
      text: '#000000',
    },
    {
      name: 'Debate',
      link: 'debate',
      image: 'bg-[url(/TODO.png)]',
      bg: '#8CD4EB',
      text: '#000000',
    },
    {
      name: 'Event X',
      link: 'event_x',
      image: 'bg-[url(/EventX.jpeg)]',
      bg: '#000000',
      text: '#EAFF06',
    },
    {
      name: 'Reading Room',
      link: 'reading_room',
      image: 'bg-[url(/ReadingSideDoodle.svg)]',
      bg: '#E6E7DC',
      text: '#000000',
    },
      {
      name: 'Board Games Night',
      link: 'boardgames',
      image: 'bg-[url(/BoardGameNight.png)]',
      bg: '#E6E7DC',
      text: '#000000',
    },    {
      name: 'Open Mic',
      link: 'open_mic',
      image: 'bg-[url(/OpenMic.png)]',
      bg: '#771C99',
      text: '#000000',
    },

  ]
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
  <Motion let:motion={grid} layout>
    <div
      use:grid
      class="h-remain grid grid-cols-2 gap-4 py-8 px-[10%] sm:grid-cols-2 lg:grid-cols-3 lg:gap-12"
    >
      {#each events as event (event.link)}
        <Card bind:selected {event} />
      {/each}
    </div>
  </Motion>
  <AnimatePresence
    list={events.filter((event) => event.link === selected)}
    let:item
  >
    <Details bind:selected event={item}>
      <slot />
    </Details>
  </AnimatePresence>
</AnimateSharedLayout>
