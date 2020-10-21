<script>
  export let number;
  export let total = 100;
</script>

<svg viewbox="0 0 120 120">
  {#each Array(100) as _, cell}
    <rect class:greyed={ cell > 100*number/total } width="10" height="10" x={12 * ((99-cell) % 10)} y={12 * Math.floor((99-cell) / 10)}></rect>
  {/each}
</svg>

<style type='text/scss'>
  .greyed {
    fill: #ccc;
  }
</style>