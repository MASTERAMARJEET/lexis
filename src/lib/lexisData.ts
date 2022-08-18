// @ts-nocheck
import type { LexisEvent } from 'src/types'
import verse from 'src/assets/VERSE.png?width=350&webp'
import spinTheWheel from 'src/assets/SpinTheWheel.png?width=350&webp'
import writingLab from 'src/assets/LexisWritingLab.png?width=350&webp'
import coffeeCigarettes from 'src/assets/CoffeeCigarettesandMore.png?width=350&webp'
import impromptu from 'src/assets/Impromptu.png?width=350&webp'
import scifi from 'src/assets/Sci-Fi.png?width=350&webp'
import opus from 'src/assets/Opus.png?width=350&webp'
import madads from 'src/assets/MadAds.png?width=350&webp'
import dublin from 'src/assets/Dublin.jpg?width=350&webp'
import debate from 'src/assets/Debate.png?width=350&webp'
import eventx from 'src/assets/EventX.jpeg?width=350&webp'
import reading from 'src/assets/ReadingSideDoodle.svg?width=350&webp'
import boardgame from 'src/assets/BoardGameNight.png?width=350&webp'
import openmic from 'src/assets/OpenMic.png?width=350&webp'

export const events: LexisEvent[] = [
  {
    name: 'Verse',
    link: 'verse',
    image: verse,
    bg: '#ebe0bc',
    text: '#000000',
  },
  {
    name: 'Writing Lab',
    link: 'writing_lab',
    image: writingLab,
    bg: '#1A992C',
    text: '#000000',
  },
  {
    name: 'Coffee, Cigarettes and More',
    link: 'coffee_cigarates_and_more',
    image: coffeeCigarettes,
    bg: '#8CD4EB',
    text: '#000000',
  },
  {
    name: 'Impromptu',
    link: 'impromptu',
    image: impromptu,
    bg: '#000000',
    text: '#98907C',
  },
  {
    name: 'Sci-Fi Lite',
    link: 'sci-fi_lite',
    image: scifi,
    bg: '#000000',
    text: '#EAFF06',
  },
  {
    name: 'Opus',
    link: 'opus',
    image: opus,
    bg: '#252018',
    text: '#FCF6E3',
  },
  {
    name: 'Mad Ads',
    link: 'mad_ads',
    image: madads,
    bg: '#130101',
    text: '#FFF3E6',
  },
  {
    name: 'Dublin Wager',
    link: 'dublin_wager',
    image: dublin,
    bg: '#000000',
    text: '#ffffff',
  },
  {
    name: 'Debate',
    link: 'debate',
    image: debate,
    bg: '#404040',
    text: '#FEFEFE',
  },
  {
    name: 'Event X',
    link: 'event_x',
    image: eventx,
    bg: '#231F20',
    text: '#ffffff',
  },
  {
    name: 'Open Mic',
    link: 'open_mic',
    image: openmic,
    bg: '#010101',
    text: '#FDF9E5',
  },
]

export const stalls: LexisEvent[] = [
  {
    name: 'Reading Room',
    link: 'reading_room',
    image: reading,
    bg: '#E6E7DC',
    text: '#000000',
  },
  {
    name: 'Board Games Night',
    link: 'boardgames',
    image: boardgame,
    bg: '#EDD7B0',
    text: '#000000',
  },
  {
    name: 'Spin The Wheel',
    link: 'spin_the_wheel',
    image: spinTheWheel,
    bg: '#771C99',
    text: '#F2EDDB',
  },
  {
    name: 'And More',
    link: 'and_more',
    image: '/TODO.png',
    bg: '#771C99',
    text: '#F2EDDB',
  },
]
