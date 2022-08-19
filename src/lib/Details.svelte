<script lang="ts">
  import clsx from 'clsx'
  import IonCloseRound from '~icons/ion/close-round'
  import { Motion } from 'svelte-motion'

  export let event: any
  export let closeHandler: () => void
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
    on:click={closeHandler}
  />
</Motion>
<Motion layoutId={event.link} let:motion>
  <div
    use:motion
    class={clsx(
      'absolute lg:top-36 lg:bottom-8 lg:left-8 lg:right-8 top-28 p-6 left-4 right-4 bottom-4 rounded-lg flex lg:flex-row flex-col items-start overflow-auto',
    )}
    style="background-color: {event.bg}; color: {event.text}"
  >
    <img
      src={event.image}
      alt={event.name}
      class="mx-auto h-[50vmax] min-h-[50vmax] lg:mr-8 lg:ml-0 lg:h-[35vmax] lg:min-h-[35vmax]"
    />
    <div class="lg:text-lg">
      <slot />
    </div>
    <button
      on:click={closeHandler}
      class="absolute right-1 top-1 p-4 sm:right-4 sm:top-4"
      ><IonCloseRound font-size={18} /></button
    >
  </div>
</Motion>
