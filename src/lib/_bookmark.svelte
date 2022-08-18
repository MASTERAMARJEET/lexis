<script lang="ts">
  import { animate, scroll } from 'motion'
  import { onMount } from 'svelte'
  onMount(() => {
    const boxWrapper = document.querySelector('#boxes')
    const boxes = document.querySelectorAll(
      '.box',
    ) as unknown as HTMLDivElement[]
    const numBox = boxes.length
    boxes.forEach((box, index0) => {
      const index = index0 + 1
      const reverseIndex = numBox - index

      box.style.paddingTop = `${index * 20}px`

      // @ts-ignore
      scroll(
        animate(box, {
          scale: [1, 1 - 0.1 * reverseIndex],
        }),
        {
          target: boxWrapper,
          offset: [`${(index0 / numBox) * 100}%`, `${(index / numBox) * 100}%`],
        },
      )
    })
  })
</script>

<div>
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptas
  magnam quas! Aspernatur omnis veritatis neque optio aliquid atque distinctio
  dolorum expedita! Possimus enim consequatur minus facilis laborum, quo non
  laudantium facere commodi porro, quasi cupiditate molestias aperiam ea. Optio
  vitae hic, vel expedita molestias quas beatae facere tempore! Molestias fugiat
  harum explicabo velit dolorem similique labore mollitia optio. Earum officia
  sunt placeat in odit obcaecati praesentium, eveniet corrupti unde quibusdam
  explicabo et dignissimos totam fugiat sed nesciunt quos consequuntur impedit
  accusamus voluptates rem eos nobis! Libero id necessitatibus, explicabo
  dolorum excepturi vel doloremque, nostrum deleniti dolore animi vitae iste
  esse a voluptate neque numquam reprehenderit et possimus nobis inventore. Nisi
  praesentium tempore, soluta et voluptas saepe obcaecati vel expedita corrupti
  dolorum repellat fugit iure quidem ea consectetur aspernatur rem architecto.
  Soluta voluptatum dolore pariatur odio. Perspiciatis cum optio officia
  cupiditate pariatur architecto! Autem nihil asperiores nesciunt maiores veniam
  voluptatibus velit. Enim unde praesentium deleniti ratione atque eius ipsum,
  ea culpa, sapiente maiores quis velit molestias perspiciatis nulla aperiam
  tenetur obcaecati dolorum doloribus in cupiditate? Eligendi perferendis
  sapiente, itaque repellat delectus alias odit, optio, repellendus corporis
  facilis a maiores id dicta culpa non debitis architecto voluptates aut
  voluptatem hic reiciendis eveniet nam! Maxime laborum nesciunt veritatis
  aliquam tenetur deleniti fugiat. Quia voluptatibus, reprehenderit id ea
  ducimus cum eaque, sequi aspernatur optio qui hic aliquid excepturi esse,
  voluptatem voluptate. Velit nisi, ab possimus quod similique quaerat deleniti
  vel itaque? Nostrum in modi commodi, odio iusto laboriosam veniam ipsam
  cupiditate ad! Delectus nihil temporibus vel laudantium atque tempora
  accusantium veritatis alias repudiandae, accusamus enim quas. Porro deserunt,
  recusandae, cupiditate sapiente quaerat adipisci, numquam accusantium delectus
  ducimus quae ea. Amet ducimus id aliquam labore accusamus quidem blanditiis!
  Cumque facere quo, nam explicabo atque odio saepe libero officia. Voluptate
  excepturi et minima voluptatem molestiae.
</div>
<div id="boxes" class="flex flex-col gap-8 p-8">
  <div class="box m-auto w-80">
    <p class="bg-gray-500">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, nostrum
      minima. At aspernatur quae consequatur voluptates, amet a mollitia
      dolorem, molestias eos ad dolores expedita voluptate adipisci doloribus
      dolore. Consequatur.
    </p>
  </div>
  <div class="box m-auto w-80 shadow">
    <p class="bg-gray-500">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, nostrum
      minima. At aspernatur quae consequatur voluptates, amet a mollitia
      dolorem, molestias eos ad dolores expedita voluptate adipisci doloribus
      dolore. Consequatur.
    </p>
  </div>
  <div class="box m-auto w-80 shadow">
    <p class="bg-gray-500">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, nostrum
      minima. At aspernatur quae consequatur voluptates, amet a mollitia
      dolorem, molestias eos ad dolores expedita voluptate adipisci doloribus
      dolore. Consequatur.
    </p>
  </div>
  <div class="box m-auto w-80 shadow">
    <p class="bg-gray-500">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, nostrum
      minima. At aspernatur quae consequatur voluptates, amet a mollitia
      dolorem, molestias eos ad dolores expedita voluptate adipisci doloribus
      dolore. Consequatur.
    </p>
  </div>
</div>

<style>
  :root {
    --card-height: 40vw;
    --card-margin: 4vw;
    --card-top-offset: 1rem;
    --numcards: 4;
    --outline-width: 0px;
  }
  #boxes {
    padding-bottom: calc(
      var(--numcards) * var(--card-top-offset)
    ); /* Make place at bottom, as items will slide to that position*/
    margin-bottom: var(
      --card-margin
    ); /* Don't include the --card-margin in padding, as that will affect the scroll-timeline*/
  }

  .box {
    outline: red solid 1px;
    position: sticky;
    top: 150px;
    padding-top: var(--card-top-offset);
    transform-origin: 50% 0%;
    will-change: transform;
  }
</style>
