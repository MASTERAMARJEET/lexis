<script lang="ts">
  import { stalls } from 'src/lib/lexisData'
  import SharedLayout from 'src/lib/SharedLayout.svelte'

  const rootPage = 'stalls_&_more'
</script>

<SharedLayout things={stalls} {rootPage}>
  <slot />
</SharedLayout>
