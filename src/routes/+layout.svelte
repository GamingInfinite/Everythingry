<script lang="ts">
  import "../app.css";
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

<slot />
