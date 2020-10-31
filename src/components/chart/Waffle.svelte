<script>
  export let number;
  export let reference;
  export let total = 100;
</script>

<svg viewbox="0 0 100 100">
  {#each Array(100) as _, cell}
    <rect
      class:greyed={ cell + 1 > 100*number/total }
      class:baseline={ cell + 1 <= 100*reference/total }
      width="8" height="8"
      x={10 * (cell % 10)}
      y={10 * Math.floor((99-cell) / 10)} />
  {/each}
</svg>

<style type="text/scss">
  .greyed {
    fill: #eee;
  }
</style>