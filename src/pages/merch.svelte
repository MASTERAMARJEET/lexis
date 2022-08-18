<script lang="ts">
  import { merchs } from 'src/lib/lexisData'
  const titleClass =
    'sticky rounded-lg top-24 my-4 bg-gray-lexis p-2 text-center text-3xl uppercase'
</script>

<div class="font px-[6vw] py-[2vh] md:text-lg">
  <!-- Mug -->
  <p class={titleClass}>
    {merchs['mug'].title}
  </p>
  {#each merchs['mug'].items as item}
    <div class="my-8 flex items-center justify-center">
      <img
        src={item}
        alt={merchs['mug'].title}
        class="min-w-[60vw] rounded-lg bg-white-lexis p-2 shadow-lg"
      />
    </div>
  {/each}
  <!-- Journal -->
  <p class={titleClass}>
    {merchs['journal'].title}
  </p>
  {#each merchs['journal'].items as item}
    <div class="my-8 flex items-center justify-center">
      <img
        src={item}
        alt={merchs['journal'].title}
        class="min-w-[50vw] rounded-lg bg-white-lexis p-2 shadow-lg"
      />
    </div>
  {/each}
  <!-- Badge -->
  <p class={titleClass}>
    {merchs['badge'].title}
  </p>
  {#each merchs['badge'].items as item}
    <div class="my-8 flex items-center justify-center">
      <img
        src={item}
        alt={merchs['badge'].title}
        class="min-w-[20vw] rounded-lg bg-white-lexis p-2 shadow-lg"
      />
    </div>
  {/each}
  <!-- Bookmark -->
  <p class={titleClass}>
    {merchs['bookmark'].title}
  </p>
  {#each merchs['bookmark'].items as item}
    <div class="my-8 flex items-center justify-center">
      <img
        src={item}
        alt={merchs['bookmark'].title}
        class="min-w-[20vw] rounded-lg bg-white-lexis p-6 shadow-lg"
      />
    </div>
  {/each}
</div>

<style>
  .font {
    font-family: 'Century Gothic', sans-serif;
  }
</style>
