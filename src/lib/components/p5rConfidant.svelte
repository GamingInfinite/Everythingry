<script lang="ts">
  export var tarot;
  export var name;
  export var shortname;
</script>

<a class="bg-base-200 rounded-box p-3 text-center" href="p5r/confidants/{shortname}">
  <div class="flex flex-row">
    <img src={tarot} alt="tarot" class="h-80" />
  </div>
  <div class="flex flex-row justify-center">{name}</div>
</a>
