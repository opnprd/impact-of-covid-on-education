<script>
  import Table from "./Table.svelte";
  import { getCsv } from "../lib/fetch";
  const dataFile = "data/mumsnet/forum-terms.csv";
  let filterColumns;
  let column;
  let data;
  let rawData;
  async function getData() {
    rawData = await getCsv(dataFile);
    filterColumns = rawData.columns.slice(1);
    column = filterColumns[1];
  }
  let loadData = getData();
  $: if (rawData) {
    data = rawData.sort(dataSort(column)).slice(0, 10);
    data.columns = rawData.columns;
  }

  const dataSort = (c) => (a, b) => {
    if (parseInt(a[c]) > parseInt(b[c])) return -1;
    if (parseInt(a[c]) < parseInt(b[c])) return 1;
    return 0;
  };
</script>

<style>
</style>

<section class="mumsnet">
  <h2>Mumsnet</h2>

  <p>Top terms from eduation-related posts in Mumsnet MI forums.</p>
  {#await loadData}
    Loading data...
  {:then}
    {#each filterColumns as option, i}
      <label for="col_{i}">{option}</label>
      <input id="col_{i}" type="radio" bind:group={column} value={option} />
    {/each}
    <Table {data} />
    <aside>Data sourced from Mumsnet MI systems with kind permission.</aside>
  {:catch e}
    <p style="color: red">{dataFile} not found!</p>
    <p>{e}</p>
  {/await}
</section>
