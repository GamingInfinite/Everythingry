<script lang="ts">
  import { afterUpdate, onMount } from "svelte";
  import "../app.css";

  let url: string;
  let references: string[] = [];

  afterUpdate(() => {
    url = document.URL.replace("http://", "");
    url = url.substring(url.indexOf("/") + 1);
    references = url.split("/");
    for (let i = 0; i < references.length; i++) {
      if (i == 0) {
      } else {
        let j = i;
        while (j != 0) {
          j--;
          references[i] = references[j] + "/" + references[i];
        }
      }
    }
  });
</script>

<div class="flex flex-row">
  <div class="navbar bg-base-200 rounded-box m-3">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl" href="/">Everythingry</a>
    </div>
    <div class="flex-none">
      <div class="form-control">
        <input type="text" placeholder="Search" class="input input-bordered" />
      </div>
    </div>
  </div>
</div>
<div class="flex flex-row mx-8">
  /
  {#each references as reference}
    <a class="text-blue-500" href="/{reference}">
      {reference.split("/").pop()}
    </a>/
  {/each}
</div>

<slot />
