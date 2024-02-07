<script lang="ts">
  import type { Rank } from "$lib/types";

  export let ranks: Rank[];
</script>

<table class="table max-w-3xl">
  <thead>
    <th>Rank</th>
    <th>Name</th>
    <th>Effect</th>
    {#if ranks[0].date}
      <th>Availability</th>
    {/if}
  </thead>
  <tbody>
    {#each ranks as rank}
      <tr>
        <th>{rank.level}</th>
        <td
          >{#if rank.abilities.length > 0}
            {#each rank.abilities as ability}
              {ability}<br />
            {/each}
          {:else}
            -
          {/if}</td
        >
        <td>{rank.description}</td>
        {#if rank.date}
          <td>{rank.date}</td>
        {/if}
      </tr>
    {/each}
  </tbody>
</table>
