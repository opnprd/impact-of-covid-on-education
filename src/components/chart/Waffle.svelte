<script>
  export let number;
  export let reference;
  export let total = 100;
</script>

<svg viewbox="0 0 100 100">
  {#each Array(100) as _, cell}
    <rect
      class:filled={ cell + 1 <= 100*number/total }
      class:baseline={ cell + 1 <= 100*reference/total }
      width="5" height="5"
      x={(10 * (cell % 10)) + 1}
      y={(10 * Math.floor((99-cell) / 10)) + 1} />
  {/each}
</svg>

<style type='text/scss'>
  $grey: #eee;
  rect {
    fill: $grey;
    stroke: $grey;
    stroke-width: 3;
  }
</style>