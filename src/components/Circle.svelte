<script>
  import { fade } from 'svelte/transition';
  export let radius;
  export let content;
  let shown;
  const showPopover = () => shown = true;
  const hidePopover = () => shown = false;
  const togglePopover = () => shown = !shown;
</script>

<style type='text/scss'>
  svg {
    text {
      font-size: 100px;
      font-weight: bold;
      mix-blend-mode: difference;
      fill: hsl(0,95%,50%);
    }
  }
</style>

<svg viewbox="0 0 200 200" on:mouseenter={showPopover} on:mouseleave={hidePopover} on:touchstart={togglePopover}>
  <circle cx=100 cy=100 r={ radius * 100 }/>
  {#if content && shown}
    <text class:shown transition:fade x=100 y=100 dy=10 text-anchor='middle' dominant-baseline='middle'>{ content }</text>
  {/if}
</svg>
