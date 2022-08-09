<script lang="ts">
  import { Route, Router } from 'svelte-routing'
  import Navbar from './lib/Navbar.svelte'
  import About from './pages/About.svelte'
  import Contact from './pages/Contact.svelte'
  import Events from './pages/Events.svelte'
  import Home from './pages/Home.svelte'
  import Team from './pages/Team.svelte'
  const links = [
    { to: '/about', name: 'About', component: About },
    { to: '/events', name: 'Events', component: Events },
    { to: '/team', name: 'Team', component: Team },
    { to: '/contact', name: 'Contact Us', component: Contact },
  ]
</script>

<main>
  <Router>
    <Navbar {links}>
      <img src="/mylogo.png" alt="LEXIS" class="mx-4 my-1 h-20 w-36 sm:w-44" />
      <!-- <p class="text-3xl text-gray-200">LEXIS</p> -->
    </Navbar>
    <Route path="/" component={Home} />
    {#each links as { to, component }}
      <Route path={to} {component} />
    {/each}
  </Router>
</main>

<style>
</style>
