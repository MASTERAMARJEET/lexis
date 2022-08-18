<script lang="ts">
  import type { Merch } from './lexisData'

  export let merch: Merch
  export let className: string
</script>

<p class="sticky top-24 my-4 bg-gray-lexis p-2 text-center text-3xl uppercase">
  {merch.title}
</p>
{#each merch.items as item}
  <div class="my-8 flex items-center justify-center">
    <img src={item} alt={merch.title} class={className} />
  </div>
{/each}
