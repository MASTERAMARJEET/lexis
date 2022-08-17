<script lang="ts">
  import clsx from 'clsx'
  import IonCloseRound from '~icons/ion/close-round'
  import { Motion } from 'svelte-motion'
  import { goto } from '$app/navigation'

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
      goto('/events')
      selected = undefined
    }}
  />
</Motion>
<Motion layoutId={event.link} let:motion>
  <div
    use:motion
    class={clsx(
      'absolute lg:top-36 lg:bottom-8 lg:left-8 lg:right-8 top-28 p-6 left-4 right-4 bottom-4 rounded-lg flex lg:flex-row flex-col items-center overflow-auto',
    )}
    style="background-color: {event.bg}; color: {event.text}"
  >
    <div
      class="aspect-[5/7] min-h-[50vmax] lg:mr-8 lg:min-h-[35vmax] {event.image} bg-contain bg-center bg-no-repeat"
    />
    <div class="lg:text-lg">
      <slot />
    </div>
    <button
      on:click={(_) => {
        $goto('/events')
        selected = undefined
      }}
      class="absolute right-1 top-1 p-4 sm:right-4 sm:top-4"
      ><IonCloseRound font-size={18} /></button
    >
  </div>
</Motion>
