<script lang="ts">
  export let href: string
</script>

<a {href} target="_blank" class="text-blue-400 hover:underline"><slot /></a>
