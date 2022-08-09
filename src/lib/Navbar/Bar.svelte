<script lang="ts">
  import Navigation from './Navigation.svelte'
  import { url } from '@roxi/routify'
</script>

<nav>
  <a href={$url('/')}>
    <img src="/mylogo.png" alt="LEXIS" class="mx-4 my-1 h-20 w-36 sm:w-44" />
  </a>
  <Navigation />
</nav>
