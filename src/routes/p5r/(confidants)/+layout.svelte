<script lang="ts">
  import RankTable from "$lib/components/rankTable.svelte";
  import ConfidantRankTables from "$lib/Confidants";
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
  <div class="divider mx-4">Confidant Rank Abilities</div>

  <div class="flex flex-row justify-center mb-4">
    <div class="overflow-x-auto outline outline-current rounded-md mx-5">
      <RankTable ranks={ConfidantRankTables[pageid]}></RankTable>
    </div>
  </div>
</div>
