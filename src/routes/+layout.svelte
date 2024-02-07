<script lang="ts">
  import { afterUpdate, onMount } from "svelte";
  import "../app.css";

  let url: string;
  let references: string[] = [];

  afterUpdate(() => {
    url = document.URL.replace("http://", "");
    url = url.substring(url.indexOf("/") + 1);
    references = url.split("/");
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
  <div class="text-sm breadcrumbs">
    <ul>
      {#each references as item}
        <li>
          <a class="text-blue-500" href="/{item}">
            {item}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</div>

<slot />
