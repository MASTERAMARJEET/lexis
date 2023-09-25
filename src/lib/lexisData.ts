// @ts-nocheck
import type { LexisEvent } from 'src/types'

import verse from 'src/assets/events/VERSE.png?width=350&webp'
import writingLab from 'src/assets/events/WritingLab.png?width=350&webp'
import compatibilty from 'src/assets/events/CompatibilityMeter.png?width=350&webp'
import impromptu from 'src/assets/events/Impromptu.png?width=350&webp'
import scifi from 'src/assets/events/SciFi.png?width=350&webp'
import opus from 'src/assets/events/Opus.png?width=350&webp'
import madads from 'src/assets/events/MadAds.png?width=350&webp'
import dublin from 'src/assets/events/Dublin.jpg?width=350&webp'
import debate from 'src/assets/events/WarOfWords.png?width=350&webp'
import eventx from 'src/assets/events/EventX.png?width=350&webp'
import openmic from 'src/assets/events/OpenMic.png?width=350&webp'
import jam from 'src/assets/events/JAM.png?width=350&webp'

import reading from 'src/assets/more/readingroom.png?width=350&webp'
import boardgame from 'src/assets/more/BoardGames.png?width=350&webp'
import spinTheWheel from 'src/assets/more/SpinTheWheel.png?width=350&webp'
import bookExchange from 'src/assets/more/BookExchange.png?width=350&webp'

import keychain from 'src/assets/merch/Keychain/C2.png?width=450&webp'
import journal from 'src/assets/merch/Journal/Lexis1.png?width=400&webp'
import mug1w from 'src/assets/merch/Mug/WhiteMugs/Mug1.png?width=800&webp'
import mug1b from 'src/assets/merch/Mug/BlackMugs/Mug1.png?width=800&webp'
import mug2w from 'src/assets/merch/Mug/WhiteMugs/Mug2.png?width=800&webp'
import mug2b from 'src/assets/merch/Mug/BlackMugs/Mug2.png?width=800&webp'

import bookmark1 from 'src/assets/merch/Bookmarks/bookmark-4.png?width=500&webp'
import bookmark2 from 'src/assets/merch/Bookmarks/bookmark-2.png?width=500&webp'
import bookmark3 from 'src/assets/merch/Bookmarks/bookmark-3.png?width=500&webp'
import bookmark4 from 'src/assets/merch/Bookmarks/bookmark-1.png?width=500&webp'

export interface LexisEvent {
  name: string
  link: string
  image: string
  bg: string
  text: string
}

export const events: LexisEvent[] = [

  {
    name: 'Compatibility Meter',
    link: 'compatibility',
    image: compatibilty,
    bg: '#000000',
    text: '#fff',
  },

  {
    name: 'Dublin Wager',
    link: 'dublin_wager',
    image: dublin,
    bg: '#000000',
    text: '#ffffff',
  },

  {
    name: 'Event X',
    link: 'event_x',
    image: eventx,
    bg: '#231F20',
    text: '#ffffff',
  },

  {
    name: 'Impromptu',
    link: 'impromptu',
    image: impromptu,
    bg: '#000000',
    text: '#98907C',
  },

  {
    name: 'Just A Minute',
    link: 'jam',
    image: jam,
    bg: '#000000',
    text: '#EAFF06',
  },

  {
    name: 'Mad Ads',
    link: 'mad_ads',
    image: madads,
    bg: '#130101',
    text: '#FFF3E6',
  },

  {
    name: 'Open Mic',
    link: 'open_mic',
    image: openmic,
    bg: '#010101',
    text: '#FDF9E5',
  },

  {
    name: 'Opus',
    link: 'opus',
    image: opus,
    bg: '#252018',
    text: '#FCF6E3',
  },

  {
    name: 'Sci-Fi',
    link: 'sci-fi',
    image: scifi,
    bg: '#000000',
    text: '#EAFF06',
  },
  
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
    bg: '#000000',
    text: '#ffffff',
  },
  
  {
    name: 'War of Words',
    link: 'debate',
    image: debate,
    bg: '#404040',
    text: '#FEFEFE',
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
  mug: { 
    title: 'Mugs', 
    items: [mug1w, mug1b, mug2w, mug2b] },

  journal: { 
    title: 'Journal Cover', 
    items: [journal] },

  badge: { 
    title: 'Key Chain', 
    items: [keychain] },
    
  bookmark: {
    title: 'Bookmark',
    items: [bookmark1, bookmark2, bookmark3, bookmark4],
  },
}
export type MerchRecord = typeof merchs
export type Merch = MerchRecord[keyof MerchRecord]
