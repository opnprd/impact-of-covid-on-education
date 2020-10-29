<script>
  import Circle from "./Circle.svelte";
  export let data;
  export let handler = () => {};
  export let highlight;
  const numeric = (n) => !isNaN(n);
  $: max = data.reduce((accumulator, n) => {
    const current = Math.max(...Object.values(n).filter(numeric));
    if (current > accumulator) return current;
    return accumulator;
  }, 0);
</script>

<table>
  <thead>
    <tr>
      {#each data.columns as col, i}
        <th class:selected={ i === highlight } on:click="{() => handler(i)}">{col}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each data as row}
      <tr>
        {#each data.columns as col, i}
          <td class:selected={ i === highlight }>
            {#if numeric(row[col])}
              <Circle
                radius={Math.sqrt(row[col] / max)}
                content="<p>{row[col]}</p>" />
            {:else}{row[col]}{/if}
          </td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>

<style type="text/scss">
  table {
    border-collapse: collapse;
    td,
    th {
      padding: 0.2em 0.5em;
      text-align: center;
    }
    th:first-child {
      width: 15em;
    }
  }
</style>
