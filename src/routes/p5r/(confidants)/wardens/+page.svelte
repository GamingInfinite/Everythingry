<svelte:head>
  <title>Wardens</title>
</svelte:head>

<div class="flex flex-col justify-center text-center">
  <div class="flex flex-row justify-center">
    <div class="mx-20">
      Caroline and Justine
      <!-- svelte-ignore a11y-missing-attribute -->
      <a class="bg-black text-black hover:text-white"
        >, or Lavenza during the end of the game.</a
      >
      are the Velvet Room Assistants in this game. They also have several
      <a class="text-blue-500" href="outings">Outings</a>
      that after completing with them they reward you with skill cards.
      <div class="text-red-600">
        Some Notes On Interacting With Caroline and Justine:
      </div>
      In order to rank them up you MUST go to the Velvet room and speak to them after
      fusing/summoning the Persona they request with the correct ability on it.<br
      />
      <!-- svelte-ignore a11y-missing-attribute -->
      Outings with Caroline and Justine do NOT contribute to Confidant Rank with
      Strength<a class="bg-black text-black hover:text-white"
        >, but doing all 12 before you're locked out of them rewards you with a
        13th with Lavenza during Third Semester</a
      >
    </div>
  </div>
  <!--#region Confidant Rank Abilities-->
  <div class="divider">Confidant Rank Abilities</div>
  <div class="flex flex-row justify-center">
    <div class="overflow-x-auto outline outline-current rounded-md mx-5">
      <table class="table w-3/4">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Effect</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Group Guillotine</td>
            <td
              >Allows for 3 Persona fusions (will auto-summon persona's you
              don't have in your stock)</td
            >
          </tr>
          <tr>
            <th>3</th>
            <td>Lockdown</td>
            <td>Allows a Persona to gain resistance skills.</td>
          </tr>
          <tr>
            <th>5</th>
            <td>Special Treatment</td>
            <td>You can pay money to fuse Persona's higher than your level.</td>
          </tr>
          <tr>
            <th>8</th>
            <td>Guillotine Booster</td>
            <td>Guillotine is now up to 4 Persona's</td>
          </tr>
          <tr>
            <th>10</th>
            <td>VIP Treatment</td>
            <td>Pay less for Special Treatment</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <!--#endregion-->
  <!--#region Warden Fusion Requests-->
  <div class="divider">Warden Fusion Requests</div>
  <div class="flex flex-row justify-center mb-5">
    <div class="overflow-x-auto outline outline-current rounded-md mx-5">
      <table class="table w-3/4">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Fusion Request</th>
            <th>Methods of Aquisition</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <!--Jack Frost-->
            <th>1</th>
            <td>Jack Frost with Mabufu</td>
            <td
              >You have several options on getting this:<br />
              First, you can fuse Silky and Berith, both found in Kamoshida's Palace<br
              />
              You can also fuse Kelpie and Succubus, both found later, but still
              in Kamoshida's Palace<br />
              You could wait till Madarame's palace and just recruit via negotiation,
              but he only learns Mabufu at level 12, and fusing with the proper arcana
              boost gets you there immediately.
            </td>
          </tr>
          <tr>
            <!--Ame-no-Uzume-->
            <th>2</th>
            <td>Ame-no-Uzume with Frei</td>
            <td
              >Once again, you can fuse Cait Sith and Succubus which are both
              found in Kamoshida's, but you need to use a frei skill card, which
              at the earliest can only be recieved by itemizing Makami.<br />
              Option 2 is fusing Suzaku and Berith, which Berith can be found in
              Kamoshida's Palace, but Suzaku can only be aquired via fusion, so I
              reccoment using the first option.</td
            >
          </tr>
          <tr>
            <!--Flauros-->
            <th>3</th>
            <td>Flauros with Tarukaja</td>
            <td
              >This is gonna be a group execution between Berith, Orobas, and
              Eligor (who naturally gets Tarukaja, and will be used to pass it
              on to Flauros)</td
            >
          </tr>
          <tr>
            <th>4</th>
            <td>Pheonix with Counter</td>
            <td
              >This is gonna be 2 steps:<br />
              First fuse Jack o' Lantern with Hua Po which will give you Yaksini.<br
              />
              Then we use Yaksini and Kelpie and we get Pheonix (make sure to pass
              Counter from Yaksini onto Pheonix)</td
            >
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <!--#endregion-->
</div>
