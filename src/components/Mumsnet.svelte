<script>
  import Table from './Table.svelte'
  import d3 from '../lib/d3';
  const dataFile = 'data/mumsnet/forum-terms.csv';
  const loadData = d3.csv(dataFile);
</script>

<style>
</style>

<section class="mumsnet">
  <h2>Mumsnet</h2>

  <p>Top terms from eduation-related posts in Mumsnet MI forums.</p>
  {#await loadData }
    Loading data...
  {:then data}
    <Table { data }/>
    <aside>
      Data sourced from Mumsnet MI systems with kind permission.
    </aside>
  {:catch}
    <p style="color: red">{dataFile} not found!</p>
  {/await}
</section>
