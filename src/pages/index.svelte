<script lang="ts">
  // @ts-ignore
  import logo from 'src/assets/logo_bold-removebg-preview.png?width=700&webp'
  import { prefetch } from '@roxi/routify'
  prefetch('/events', {})
</script>

<div
  class="grid h-remain w-full items-center justify-around lg:grid-cols-2 lg:px-8"
>
  <div class="flex flex-col items-center">
    <img
      src={logo}
      alt="logo"
      class="mx-auto w-[80vw] md:w-[65vw] lg:row-start-1 lg:w-[40vw]"
    />
    <p class="cursive text-center text-5xl text-white-lexis sm:text-7xl">
      The Literary Fest
    </p>
  </div>
  <div class="flex flex-col  px-2 lg:col-start-2">
    <p class="display my-4 text-center text-4xl text-white-lexis sm:text-5xl">
      13th, 14th and 15th October 2023
    </p>
    <p class="display my-4 text-center text-4xl text-white-lexis sm:text-5xl">
      @ IISER Kolkata
    </p>
    <div class="mx-auto my-6 transition hover:scale-110">
      <a href="/schedule" class="rounded bg-red-lexis p-4 font-bold text-white"
        >See Schedule</a
      >
    </div>
    <div class="mx-auto my-6 transition hover:scale-110">
      <a href="/events" class="rounded bg-red-lexis p-4 font-bold text-white"
        >Explore Events</a
      >
    </div>
  </div>
</div>

<style>
  .cursive {
    font-family: 'Great Vibes', cursive;
  }
  .display {
    font-family: 'Fredericka the Great', cursive;
  }

</style>
