<script lang="ts">
  import WikiTile from "$lib/components/wikiTile.svelte";
</script>

<svelte:head>
  <title>Everythingry</title>
</svelte:head>

<div class="flex flex-col justify-center text-center space-y-5">
  <div class="flex flex-row justify-center font-black text-6xl mt-4">
    Everythingry
  </div>
  <div class="flex flex-row italic justify-center">
    That last wiki you SHOULD ever need
  </div>
  <div class="flex flex-row justify-center">
    Yep, that's right! This should in theory be your last stop for any wiki
    related needs. Whether it be Minecraft recipes, real life recipes, or very
    specific and obscure knowledge, we either have it or will eventually.
  </div>
  <div class="flex flex-row justify-center">
    You can start by using the topic selector below, or (wip) using our search
    feature on the right side of the navbar at the top.
  </div>
  <div class="flex flex-row justify-center space-x-5 text-3xl">
    <!--#region Categories-->
    <div class="flex flex-col">
      <div class="flex flex-row justify-center">🎮 Video Games</div>
      <div class="divider" />
      <div class="flex flex-row justify-center">
        <div class="flex flex-col">
          <!-- <a href="/p5r">Persona 5 Royal</a> -->
          <WikiTile name="Persona 5 Royal" shortname="p5r" />
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <div class="flex flex-row justify-center">🎞️ Movies</div>
      <div class="divider" />
      <div class="flex flex-row justify-center">
        <div class="flex flex-col" />
      </div>
    </div>
    <div class="flex flex-col">
      <div class="flex flex-row justify-center">🎲 Table Top Games</div>
      <div class="divider" />
      <div class="flex flex-row justify-center">
        <div class="flex flex-col">
          <!-- <a href="/dnd">Dungeons and Dragons</a> -->
          <WikiTile name="Dungeons and Dragons" shortname="dnd" />
        </div>
      </div>
    </div>
    <!--#endregion-->
  </div>
</div>
