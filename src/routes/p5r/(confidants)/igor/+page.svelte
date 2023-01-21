<svelte:head>
  <title>Igor</title>
</svelte:head>

<div class="flex flex-col justify-center text-center">
  <div class="flex flex-row">
    <div class="mx-20">
      Yeah, it's this guy again. If you've played any Persona game before you'll
      know this guy. He runs the Velvet Room in literally every game and in this
      <!-- svelte-ignore a11y-missing-attribute -->
      particular game is assisted by Caroline and Justine<a
        class="bg-black text-black hover:text-white"
        >, or Lavenza during the end of the game.</a
      >
      <div class="text-red-600">Some Notes On Interacting With Igor:</div>
      His confidant ranks up automatically, there is no point in going out of your
      way to go to the Velvet Room unless it's to talk to&#32;<a class="text-blue-500"
        href="wardens">Strength</a
      >.
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
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Wild Talk<br />Arcana Burst</td>
            <td
              >Literally just the ability to negotiate with Shadows<br />Arcana
              Burst boosts Persona EXP when fusing depending on your Confidant
              rank with that person</td
            >
            <td>April 12th (4/12)<br />Clearing Kamoshida's Palace</td>
          </tr>
          <tr>
            <th>2</th>
            <td>Third Eye</td>
            <td
              >Holding Left Bumper on Controller or Control on Keyboard reveals
              action icons (Jump, Grapple, Crawl, etc.) as well as highlights
              Points/Objects of Interest (Chests, Footprints, etc.)</td
            >
            <td>April 20th (4/20)</td>
          </tr>
          <tr>
            <th>3</th>
            <td>Power Stock</td>
            <td>You can now have 8 Personas at once</td>
            <td>May 5th (5/5)</td>
          </tr>
          <tr>
            <th>4</th>
            <td>-</td>
            <td>-</td>
            <td>Clearing Madarame's Palace</td>
          </tr>
          <tr>
            <th>5</th>
            <td>Super Stock</td>
            <td>You can now have 10 Persona at once</td>
            <td>June 11th (6/11)</td>
          </tr>
          <tr>
            <th>6</th>
            <td>High Arcana Burst</td>
            <td>Arcana Burst gives more (still dependent on Confidant Rank)</td>
            <td>Clearing Kaneshiro's Palace</td>
          </tr>
          <tr>
            <th>7</th>
            <td>-</td>
            <td>-</td>
            <td>August 22nd (8/22)</td>
          </tr>
          <tr>
            <th>8</th>
            <td>Ultra Stock</td>
            <td>You can now have 12 Persona at once</td>
            <td>August 31st (8/31)</td>
          </tr>
          <tr>
            <th>9</th>
            <td>-</td>
            <td>-</td>
            <td>October 11th (10/11)</td>
          </tr>
          <tr>
            <th>10</th>
            <td>Max Arcana Burst</td>
            <td>More XP for Persona Fusions</td>
            <td>December 24th (12/24)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <!--#endregion-->
</div>
