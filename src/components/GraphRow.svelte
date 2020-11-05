<script>
  import Bar from './chart/Bar.svelte';
  export let label;
  export let value;
  export let max = 100;
  export let unit = '';
</script>

<style type='text/scss'>
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 2.5em;
  }
  .label {
    font-size: 0.7em;
    font-style: italic;
    width: 12em;
    display: block;
    text-align: right;
    padding-right: 0.5em;
  }
  .bar {
    flex-grow: 2;
  }
  .value {
    width: 5em;
    text-align: right;
  }
</style>
<ul>
  <li class='label'>
    { label }
  </li>
  <li class='bar'>
    <Bar {value} {max} />
  </li>
  <li class='value'>
    { Math.round(value, 0) }{ unit }
  </li>
</ul>
