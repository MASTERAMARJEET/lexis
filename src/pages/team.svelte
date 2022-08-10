<script lang="ts">
  import H1 from 'src/md/H1.svelte'

  let committeeNames = ['R.R. Tanya', 'Sanchay Agarwal', 'Amarjeet Kumar']

  let eventOrganizers = [
    'Satbhav Voleti',
    'Meghna Dutta',
    'Aditya Dwarkesh',
    'Surajit Manna',
    'Anchit Bhair',
    'Ishita Jena',
    'Abhishek Sunamudi',
    'Gurpahul Singh',
  ]

  let designPublicity = [
    'Isha Bhagwat',
    'Sai Sagole',
    'Omkar Sahu',
    'Harshith Sairaj',
  ]
</script>

<div class="px-8">
  <div class="section-head">Committee</div>
  <div class="team-names">
    {#each committeeNames as name}
      <div class="team-mem-name">
        {name}
      </div>
    {/each}
  </div>

  <div class="section-head">Event Organizers</div>
  <div class="team-names">
    {#each eventOrganizers as name}
      <div class="team-mem-name">
        {name}
      </div>
    {/each}
  </div>

  <div class="section-head">Design and Publicity</div>
  <div class="team-names">
    {#each designPublicity as name}
      <div class="team-mem-name">
        {name}
      </div>
    {/each}
  </div>
</div>

<style>
  .section-head {
    @apply my-[2vmax] text-center font-bold;
    font-size: 300%;
    font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;
  }
  .team-names {
    @apply flex flex-row flex-wrap justify-around gap-16;
  }
  .team-mem-name {
    @apply w-min text-center;
    font-size: 175%;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    text-align: center;
  }
</style>
