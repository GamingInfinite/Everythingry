<script lang="ts">
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
    <WikiTile name="Darts & Billiards" shortname="p5r/darts"></WikiTile>
  </div>
  <div class="divider mx-4">Confidants</div>
  <div class="flex flex-row flex-wrap justify-center m-3 mx-8 gap-5">
    <P5rConfidant name="Igor" shortname="igor" />
    <P5rConfidant name="Morgana" shortname="morgana" />
    <P5rConfidant name="Makoto Nijima" shortname="makoto" />
    <P5rConfidant name="Haru Okumura" shortname="haru" />
    <P5rConfidant name="Yusuke Kitagawa" shortname="yusuke" />
    <P5rConfidant name="Sojiro Sakura" shortname="sojiro" />
    <P5rConfidant name="Ann Takamaki" shortname="ann" />
    <P5rConfidant name="Ryuji Sakamoto" shortname="ryuji" />
    <P5rConfidant name="Goro Akechi" shortname="akechi"></P5rConfidant>
    <P5rConfidant name="Futaba Sakura" shortname="futaba"></P5rConfidant>
    <P5rConfidant name="Chihaya Mifune" shortname="chihaya"></P5rConfidant>
    <P5rConfidant name="Caroline & Justine" shortname="wardens" />
    <P5rConfidant name="Munehisa Iwai" shortname="iwai"></P5rConfidant>
    <P5rConfidant name="Tae Takemi" shortname="takemi"></P5rConfidant>
    <P5rConfidant name="Sadayo Kawakami" shortname="kawakami"></P5rConfidant>
    <P5rConfidant name="Ichiko Ohya" shortname="ohya"></P5rConfidant>
    <P5rConfidant name="Shinya Oda" shortname="shinya"></P5rConfidant>
    <P5rConfidant name="Hifumi Togo" shortname="iwai"></P5rConfidant>
    <P5rConfidant name="Yuuki Mishima" shortname="mishima"></P5rConfidant>
    <P5rConfidant name="Toranosuke Yoshida" shortname="yoshida"></P5rConfidant>
    <P5rConfidant name="Sae Nijima" shortname="sae"></P5rConfidant>
    <P5rConfidant name="Yoshizawa" shortname="kasumi"></P5rConfidant>
  </div>
  <div class="divider mx-4">Palaces</div>
  <div class="flex flex-row flex-wrap justify-center m-3 mx-8 gap-5">
    <WikiTile
      name="Kamoshida's Palace"
      shortname="p5r/kamoshida"
      icon="/images/p5r/palaces/kamoshida.png"
    />
  </div>
</div>
