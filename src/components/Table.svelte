<script>
  import Circle from './Circle.svelte';
  export let data;
  export let handler = () => {};
  export let highlight;
  const numeric = (n) => !isNaN(n);
  $: max = data.reduce((accumulator, n) => {
    const current = Math.max(...Object.values(n).filter(numeric));
    if (current > accumulator) return current;
    return accumulator;
  }, 0);
  const monthDateFormatter = new Intl.DateTimeFormat('default', {
    month: 'short',
    year: 'numeric',
  });
  $: dates = data.columns
    .slice(1)
    .map((x) => monthDateFormatter.format(new Date(x)));
</script>

<table>
  <thead>
    <tr>
      {#each dates as col, i}
        <th class:selected={i === highlight} on:click={() => handler(i)}>
          {col}
        </th>
      {/each}
      <th />
    </tr>
  </thead>
  <tbody>
    {#each data as row}
      <tr>
        {#each data.columns.slice(1) as col, i}
          <td class:selected={i === highlight}>
            <Circle radius={Math.sqrt(row[col] / max)} content={row[col]} />
          </td>
        {/each}
        <td class="term">{row['term']}</td>
      </tr>
    {/each}
  </tbody>
</table>
