<script lang="ts">
  import { onMount } from 'svelte'
  import { getSubLink } from 'src/lib/utils'
  import { events } from 'src/lib/lexisData'
  import { goto } from '@roxi/routify'
  import SharedLayout from 'src/lib/SharedLayout.svelte'

  let selected: string | undefined
  onMount(() => (selected = getSubLink('events')))
  const backNavigate = () => {
    $goto('/events')
  }
</script>

<SharedLayout things={events} {selected} {backNavigate}>
  <slot />
</SharedLayout>
