// @ts-nocheck
import type { LexisEvent } from 'src/types'

import verse from 'src/assets/VERSE.png?width=350&webp'
import writingLab from 'src/assets/LexisWritingLab.png?width=350&webp'
import coffeeCigarettes from 'src/assets/CoffeeCigarettesandMore.png?width=350&webp'
import impromptu from 'src/assets/Impromptu.png?width=350&webp'
import scifi from 'src/assets/Sci-Fi.png?width=350&webp'
import opus from 'src/assets/Opus.png?width=350&webp'
import madads from 'src/assets/MadAds.png?width=350&webp'
import dublin from 'src/assets/Dublin.jpg?width=350&webp'
import debate from 'src/assets/Debate.png?width=350&webp'
import eventx from 'src/assets/EventX.jpeg?width=350&webp'
import openmic from 'src/assets/OpenMic.png?width=350&webp'

import reading from 'src/assets/Reading Room.png?width=350&webp'
import boardgame from 'src/assets/BoardGameNight.png?width=350&webp'
import spinTheWheel from 'src/assets/SpinTheWheel.png?width=350&webp'
import bookExchange from 'src/assets/Book Exchange.png?width=350&webp'

import badge from 'src/assets/badge.png?width=450&webp'
import journal from 'src/assets/Journal-b.png?width=400&webp'
import mug1 from 'src/assets/mug_1.png?width=800&webp'
import mug2 from 'src/assets/mug_2.png?width=800&webp'
import bookmark1 from 'src/assets/bookmark-1.png?width=500&webp'
import bookmark2 from 'src/assets/bookmark-2.png?width=500&webp'
import bookmark3 from 'src/assets/bookmark-3.png?width=500&webp'
import bookmark4 from 'src/assets/bookmark-4.png?width=500&webp'

export interface LexisEvent {
  name: string
  link: string
  image: string
  bg: string
  text: string
}

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
    link: 'coffee_cigarettes_and_more',
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
    name: 'Sci-Fi',
    link: 'sci-fi',
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
    bg: '#211A18',
    text: '#FDFBF9',
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
    name: 'Book Exchange',
    link: 'book_exchange',
    image: bookExchange,
    bg: '#EF7E6B',
    text: '#FFFC4A',
  },
  {
    name: 'And More',
    link: 'and_more',
    image: '/TODO.png',
    bg: '#771C99',
    text: '#F2EDDB',
  },
]

export const merchs = {
  mug: { title: 'Mug', items: [mug1, mug2] },
  journal: { title: 'Journal Cover', items: [journal] },
  badge: { title: 'Badge', items: [badge] },
  bookmark: {
    title: 'Bookmark',
    items: [bookmark1, bookmark2, bookmark3, bookmark4],
  },
}
export type MerchRecord = typeof merchs
export type Merch = MerchRecord[keyof MerchRecord]
