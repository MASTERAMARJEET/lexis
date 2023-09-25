<script lang="ts">
  let committeeNames = [
    'Dhavala Sai Srinivas', 
    'Meghna Dutta',
    'Oindrila Sarkar', 
    'Tarak Yadav']

  let eventOrganizers = [
    'Aditya Dwarkesh',
    'Anchit Bhair',
    'Angshuman Bhandari',
    'Arya Mhatre',
    'Diptanuj Sarkar',
    'Jesneil Lauren Lewis',
    'Monish Majumdar',
    'Rutvik Ashish Mahajan',
    'Satbhav Voleti',
    'Sneha Pradhan',
  ]

</script>

<div class="px-8">
  <div class="head-font mt-14 text-center font-bold">Core Committee</div>
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
