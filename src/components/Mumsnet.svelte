<script>
  import Table from './Table.svelte';
  import { getCsv } from '../lib/fetch';

  const datasets = ['bigrams', 'tokens'];
  let dataset = 0;
  let data = [];
  let column = 1;
  let rawData;
  let slice = 10;

  function extractData(raw, index, sortColumn) {
    const result = raw[index];
    const col = result.columns[sortColumn];
    const sorter = sortColNumeric(col);
    const shortset = result.sort(sorter).slice(0, slice);
    shortset.columns = result.columns;
    return shortset;
  }

  async function getData() {
    rawData = await Promise.all(
      datasets.map((x) => getCsv(`data/mumsnet/${x}.csv`))
    );
    data = extractData(rawData, dataset, column + 1);
  }
  let loadData = getData();
  $: if (rawData) {
    data = extractData(rawData, dataset, column + 1);
  }

  const sortColNumeric = (c) => (a, b) => {
    if (parseInt(a[c]) > parseInt(b[c])) return -1;
    if (parseInt(a[c]) < parseInt(b[c])) return 1;
    return 0;
  };

  const handleClick = (c) => {
    column = c;
  };
</script>

<section class="mumsnet">
  <h2>The Parent's Perspective</h2>
  {#await loadData}
    Loading data...
  {:then}
    <label for="token-selector">Select a type of term:</label>
    <select id="token-selector" bind:value={dataset}>
      {#each datasets as opt, i}
        <option value={i}>{opt.charAt(0).toUpperCase() + opt.slice(1)}</option>
      {/each}
    </select>

    <p>
      Click the date header to select the
      {slice}
      terms used most frequently in that month.
    </p>
    <Table {data} handler={handleClick} highlight={column} />
    <p>Data sourced from Mumsnet MI systems with kind permission.</p>
  {:catch e}
    <p style="color: red">Data not loaded!</p>
    <p>{e}</p>
  {/await}
</section>
