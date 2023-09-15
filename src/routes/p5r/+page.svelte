<script lang="ts">
  //#region Tarot Image Imports
  import igortarot from "$lib/images/p5r/confidants/igor/tarot.png";
  import morgtarot from "$lib/images/p5r/confidants/morgana/tarot.png";
  import makotarot from "$lib/images/p5r/confidants/makoto/tarot.png";
  import harutarot from "$lib/images/p5r/confidants/haru/tarot.png";
  import yusutarot from "$lib/images/p5r/confidants/yusuke/tarot.png";
  import sojitarot from "$lib/images/p5r/confidants/sojiro/tarot.png";
  import anntarot from "$lib/images/p5r/confidants/ann/tarot.png";
  import ryujitarot from "$lib/images/p5r/confidants/ryuji/tarot.png";
  import carjustarot from "$lib/images/p5r/confidants/wardens/tarot.png";
  //#endregion

  //#region Palace Ruler Icon Imports
  import kamoicon from "$lib/images/p5r/palaces/kamoshida.png";
  //#endregion

  //#region This is for Other shit IG

  //#endregion

  import P5rConfidant from "$lib/components/p5rConfidant.svelte";
  import WikiTile from "$lib/components/wikiTile.svelte";
</script>

<svelte:head>
  <title>Persona 5 Royal</title>
</svelte:head>

<div class="flex flex-col justify-center text-center">
  <div class=" mx-20">
    Welcome to the page for Persona 5 Royal. Redacted sections of the wiki are
    spoilers. You can hover to see what it says, but if you don't want spoilers
    you've been warned.
    <div class="text-red-600">
      This page is still WIP as of 1/20/2023 please bear that in mind.
    </div>
    This page will is effectively a disambiguation page for navigation to everything
    related to Persona 5, and there will be a sepereate page discussing the plot
    and other general information about the game.
    <div class="text-emerald-500">
      I'm currently adding links to confidant pages as well as developing those
      confidant pages themselves.
    </div>
  </div>
  <div class="divider mx-4">Guides</div>
  <div class="flex flex-row flex-wrap justify-center m-3 mx-8 gap-5">
    <WikiTile name="New Game+" shortname="p5r/ng+" />
  </div>
  <div class="divider mx-4">Confidants</div>
  <div class="flex flex-row flex-wrap justify-center m-3 mx-8 gap-5">
    <P5rConfidant tarot={igortarot} name="Igor" shortname="igor" />
    <P5rConfidant tarot={morgtarot} name="Morgana" shortname="morgana" />
    <P5rConfidant tarot={makotarot} name="Makoto Nijima" shortname="makoto" />
    <P5rConfidant tarot={harutarot} name="Haru Okumura" shortname="haru" />
    <P5rConfidant tarot={yusutarot} name="Yusuke Kitagawa" shortname="yusuke" />
    <P5rConfidant tarot={sojitarot} name="Sojiro Sakura" shortname="sojiro" />
    <P5rConfidant tarot={anntarot} name="Ann Takamaki" shortname="ann" />
    <P5rConfidant tarot={ryujitarot} name="Ryuji Sakamoto" shortname="ryuji" />
    <P5rConfidant
      tarot={carjustarot}
      name="Caroline & Justine"
      shortname="wardens"
    />
  </div>
  <div class="divider mx-4">Palaces</div>
  <div class="flex flex-row flex-wrap justify-center m-3 mx-8 gap-5">
    <WikiTile
      icon={kamoicon}
      name="Kamoshida's Palace"
      shortname="p5r/kamoshida"
    />
  </div>
</div>
