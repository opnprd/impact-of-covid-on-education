<script>
  import { fade } from 'svelte/transition';
  export let radius;
  export let content;
  let shown;
  const showPopover = () => shown = true;
  const hidePopover = () => shown = false;
</script>

<div class="container">
  <svg viewbox="-1 -1 2 2" on:mouseenter={showPopover} on:mouseleave={hidePopover}>
    <circle r={ radius }></circle>
  </svg>
  {#if content && shown}
    <div class='popover' transition:fade>{ @html content }</div>
  {/if}  
</div>
