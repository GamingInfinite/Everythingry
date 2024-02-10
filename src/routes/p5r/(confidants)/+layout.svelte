<script lang="ts">
  import RankTable from "$lib/components/rankTable.svelte";
  import ConfidantRankTables, { WardenRequests } from "$lib/Confidants";
  import { page } from "$app/stores";

  let pageid = $page.url.pathname;
  pageid = pageid.substring(pageid.lastIndexOf("/") + 1);
</script>

<div class="flex flex-col justify-center text-center">
  <div class="flex flex-row justify-center">
    <div class="mx-20">
      <slot />
    </div>
  </div>

  <div class="flex flex-row justify-center mb-4">
    <div class="flex flex-col">
      <div class="divider mx-4">Confidant Rank Abilities</div>
      <div class="overflow-x-auto outline outline-current rounded-md mx-5">
        <RankTable ranks={ConfidantRankTables[pageid]}></RankTable>
      </div>
    </div>
    {#if pageid == "wardens"}
      <div class="flex flex-col">
        <div class="divider mx-4">Fusion Requests</div>
        <div class="overflow-x-auto outline outline-current rounded-md mx-5">
          <table class="table max-w-3xl">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Fusion Request</th>
                <th>Method of Aquisition</th>
              </tr>
            </thead>
            <tbody>
              {#each WardenRequests as request}
                <tr>
                  <th>{request.level}</th>
                  <td>{request.name}</td>
                  <td>{request.description}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    {/if}
  </div>
</div>
