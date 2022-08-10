<script lang="ts">
  import H1 from 'src/md/H1.svelte'
  import H2 from 'src/md/H2.svelte'
  import P from 'src/md/P.svelte'
  import Strong from 'src/md/Strong.svelte'


let committeeNames = [
	'Radha Tanya',
	'Sanchay Agarwal',
	'Amarjeet Kumar'
]

let eventOrganizers= [
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
	'Harshith Sairaj'
]
</script>

<div class="team-section">
<div class="section-head">Committee</div>
	<div class="team-names">
		{#each committeeNames as name}
		<div class="team-mem-name">
			{name}
		</div>
		{/each}
	</div>
</div>

<div class="team-section">
<H1></H1>
<div class="section-head">Event Organizers</div>
	<div class="team-names">
		{#each eventOrganizers as name}
		<div class="team-mem-name">
			{name}
		</div>
		{/each}
	</div>
</div>

<div class="team-section">
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
	font-size: 350%;
	text-align: center;
	font-weight: bold;
		Font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;
}
.team-names{
	padding: 1em;
	display: flex;
	flex-flow: row wrap;
	gap: 5em;
	justify-content: space-evenly;
}
.team-mem-name {

  font-size: 200%;
  Font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  text-align: center;
  width: min-intrinsic;       /* old Chrome, Safari */
  width: -webkit-min-content; /* less old Chrome, Safari */
  width: -moz-min-content;    /* current Firefox */
  width: min-content;         /* current Chrome, Safari; not IE or Edge */
}
</style>
