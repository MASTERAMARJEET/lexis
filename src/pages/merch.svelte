<script lang="ts">
  import { merchs } from 'src/lib/lexisData'
  import MerchTile from 'src/lib/MerchTile.svelte'
</script>

<div class="font px-[6vw] py-[2vh] md:text-lg">
  <!-- Mug -->
  <MerchTile
    merch={merchs['mug']}
    className="min-w-[60vw] rounded-lg bg-white-lexis p-2 shadow-lg"
  />
  <!-- Journal -->
  <MerchTile
    merch={merchs['journal']}
    className="min-w-[50vw] rounded-lg bg-white-lexis p-2 shadow-lg"
  />
  <!-- Badge -->
  <MerchTile
    merch={merchs['badge']}
    className="min-w-[20vw] rounded-lg bg-white-lexis p-2 shadow-lg"
  />
  <!-- Bookmark -->
  <MerchTile
    merch={merchs['bookmark']}
    className="min-w-[20vw] rounded-lg bg-white-lexis p-2 md:p-6 shadow-lg"
  />
</div>
