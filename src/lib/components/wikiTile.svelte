<script lang="ts">
  export var shortname;
  export var name;
  export var icon = `/images/${shortname}/icon.png`;
</script>

<a class="bg-base-200 rounded-box p-3 text-center" href="/{shortname}">
  <div class="flex flex-row justify-center">
    <img src={icon} alt="tarot" class="h-32" />
  </div>
  <div class="flex flex-row justify-center text-base">{name}</div>
</a>
