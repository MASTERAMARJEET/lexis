<script lang="ts">
  import { events } from 'src/lib/lexisData'
  import SharedLayout from 'src/lib/SharedLayout.svelte'

  const rootPage = 'events'
</script>

<SharedLayout things={events} {rootPage}>
  <slot />
</SharedLayout>
