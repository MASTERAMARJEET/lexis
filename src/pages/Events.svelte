<script lang="ts">
  import Details from 'src/lib/Details.svelte'
  import Card from 'src/lib/Card.svelte'
  import { AnimateSharedLayout, Motion } from 'svelte-motion'
  import AnimatePresence from 'svelte-motion/src/components/AnimatePresence/AnimatePresence.svelte'

  const events = [
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
      bg: '#4F41FF',
      text: '#000000',
    },
    {
      name: '2nd Verse',
      image: 'bg-[url(/VERSE.png)]',
      bg: '#EBE0BC',
      text: '#000000',
    },
    {
      name: '2nd Spin The Wheel',
      image: 'bg-[url(/SpinTheWheel.png)]',
      bg: '#771C99',
      text: '#F2EDDB',
    },
    {
      name: '2nd Writing Lab',
      image: 'bg-[url(/LexisWritingLab.png)]',
      bg: '#1A992C',
      text: '#000000',
    },
    {
      name: '2nd Coffee Cigarates and More',
      image: 'bg-[url(/CoffeeCigarettesandMore.png)]',
      bg: '#4F41FF',
      text: '#000000',
    },
    {
      name: '3rd Verse',
      image: 'bg-[url(/VERSE.png)]',
      bg: '#EBE0BC',
      text: '#000000',
    },
    {
      name: '3rd Spin The Wheel',
      image: 'bg-[url(/SpinTheWheel.png)]',
      bg: '#771C99',
      text: '#F2EDDB',
    },
    {
      name: '3rd Writing Lab',
      image: 'bg-[url(/LexisWritingLab.png)]',
      bg: '#1A992C',
      text: '#000000',
    },
    {
      name: '3rd Coffee Cigarates and More',
      image: 'bg-[url(/CoffeeCigarettesandMore.png)]',
      bg: '#4F41FF',
      text: '#000000',
    },
    {
      name: '4rd Verse',
      image: 'bg-[url(/VERSE.png)]',
      bg: '#EBE0BC',
      text: '#000000',
    },
    {
      name: '4rd Spin The Wheel',
      image: 'bg-[url(/SpinTheWheel.png)]',
      bg: '#771C99',
      text: '#F2EDDB',
    },
    {
      name: '4rd Writing Lab',
      image: 'bg-[url(/LexisWritingLab.png)]',
      bg: '#1A992C',
      text: '#000000',
    },
    {
      name: '4rd Coffee Cigarates and More',
      image: 'bg-[url(/CoffeeCigarettesandMore.png)]',
      bg: '#4F41FF',
      text: '#000000',
    },
  ]
  let selected: string
  const lockScroll = (selected: string) => {
    if (selected) {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
      document.body.style.height = '100vh'
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
      class="grid grid-cols-2 gap-4 px-[10%] pt-24 pb-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12"
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
    <Details bind:selected {item} />
  </AnimatePresence>
</AnimateSharedLayout>
