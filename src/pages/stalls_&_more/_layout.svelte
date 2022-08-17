<script lang="ts">
  import { onMount } from 'svelte'
  import { getSubLink } from 'src/lib/utils'
  import { stalls } from 'src/lib/lexisData'
  import { goto } from '@roxi/routify'
  import SharedLayout from 'src/lib/SharedLayout.svelte'

  let selected: string | undefined
  onMount(() => (selected = getSubLink('stalls_&_more')))
  const closeHandler = () => {
    $goto('/stalls_&_more')
    selected = undefined
  }
</script>

<SharedLayout things={stalls} {selected} {closeHandler}>
  <slot />
</SharedLayout>
