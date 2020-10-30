<script>
  import Table from './Table.svelte';
  import { getCsv } from '../lib/fetch';
  import { dataset, data, datasets } from '../store/mumsnet';

  let column = 2;
  let rawData;

  function extractData(raw, index, sortColumn) {
    const result = raw[index];
    const col = result.columns[sortColumn];
    const sorter = sortColNumeric(col);
    const shortset = result.sort(sorter).slice(0, 10);
    shortset.columns = result.columns;
    return shortset;
  }

  async function getData() {
    rawData = await Promise.all(
      $datasets.map((x) => getCsv(`data/mumsnet/${x}.csv`))
    );
    $data = extractData(rawData, $dataset, column);
  }
  let loadData = getData();
  $: if (rawData) {
    $data = extractData(rawData, $dataset, column);
  }

  const sortColNumeric = (c) => (a, b) => {
    if (parseInt(a[c]) > parseInt(b[c])) return -1;
    if (parseInt(a[c]) < parseInt(b[c])) return 1;
    return 0;
  };

  const handleClick = (c) => {
    if (c === 0) return;
    column = c;
  };
</script>

<style>
</style>

<section class="mumsnet">
  <h2>The Parent's Perspective</h2>
  {#await loadData}
    Loading data...
  {:then}
    <Table data={$data} handler={handleClick} highlight={column} />
    <aside>Data sourced from Mumsnet MI systems with kind permission.</aside>
  {:catch e}
    <p style="color: red">Data not loaded!</p>
    <p>{e}</p>
  {/await}
</section>
