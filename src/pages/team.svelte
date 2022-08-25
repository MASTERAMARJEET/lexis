<script lang="ts">
  let committeeNames = ['Radha Tanya', 'Sanchay Agarwal', 'Amarjeet Kumar']

  let eventOrganizers = [
    'Satbhav Voleti',
    'Meghna Dutta',
    'Aditya Dwarkesh',
    'Surajit Manna',
    'Anchit Bhair',
    'Ishita Jena',
    'Abhishek Sunamudi',
    'Gurpahul Singh',
    'Omkar Sahu',
  ]

  let designPublicity = [
    'Isha Bhagwat',
    'Sai Sagole',
    'Anurit Dey',
    'Harshith Sairaj',
  ]
</script>

<div class="px-8">
  <div class="head-font mt-14 text-center font-bold">Committee</div>
  <div class="flex flex-row flex-wrap justify-around gap-6 sm:gap-8 lg:gap-12">
    {#each committeeNames as name}
      <div class="team-mem-name">
        {name}
      </div>
    {/each}
  </div>

  <div class="head-font mt-14 text-center font-bold">Event Organizers</div>
  <div class="flex flex-row flex-wrap justify-around gap-6 sm:gap-8 lg:gap-12">
    {#each eventOrganizers as name}
      <div class="team-mem-name">
        {name}
      </div>
    {/each}
  </div>

  <div class="head-font mt-14 text-center font-bold">Design and Publicity</div>
  <div class="flex flex-row flex-wrap justify-around gap-6 sm:gap-8 lg:gap-12">
    {#each designPublicity as name}
      <div class="team-mem-name">
        {name}
      </div>
    {/each}
  </div>
</div>

<style>
  .head-font {
    font-size: 300%;
    font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;
  }
  .team-mem-name {
    @apply w-min text-center;
    font-size: 175%;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  }
</style>
