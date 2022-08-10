<script lang="ts">
  import clsx from 'clsx'
  import IonCloseRound from '~icons/ion/close-round'
  import { Motion } from 'svelte-motion'
  import { goto } from '@roxi/routify'

  export let selected: string | undefined
  export let event: any
</script>

<Motion
  let:motion
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
>
  <div
    aria-label="overlay"
    class="absolute top-0 left-0 right-0 -bottom-24 bg-[rgb(0,0,0,0.4)]"
    use:motion
    on:click={(_) => {
      $goto('/events')
      selected = undefined
    }}
  />
</Motion>
<Motion layoutId={event.link} let:motion>
  <div
    use:motion
    class={clsx(
      'absolute top-36 left-6 right-6 rounded-lg shadow-lg flex sm:flex-row flex-col items-center',
    )}
    style="background-color: {event.bg}; color: {event.text}"
  >
    <div
      class="m-8 aspect-[5/7] h-[35vmax] {event.image} bg-contain bg-center bg-no-repeat"
    />
    <slot />
    <button
      on:click={(_) => {
        $goto('/events')
        selected = undefined
      }}
      class="absolute right-4 top-4 p-4"
      ><IonCloseRound font-size={18} /></button
    >
  </div>
</Motion>
