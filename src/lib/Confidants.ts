import type { Rank } from "./types";

const ConfidantRankTables: { [key: string]: Rank[] } = {
  wardens: [
    {
      level: 1,
      abilities: ["Group Guillotine"],
      description:
        "Allows for 3 Persona fusions (will auto-summon persona's you don't have in your stock)",
    },
    {
      level: 3,
      abilities: ["Lockdown"],
      description: "Allows a Persona to gain resistance skills",
    },
    {
      level: 5,
      abilities: ["Special Treatment"],
      description: "You can pay money to fuse Persona's higher than your level",
    },
    {
      level: 8,
      abilities: ["Guillotine Booster"],
      description: "Guillotine is now up to 4 Persona's",
    },
    {
      level: 10,
      abilities: ["VIP Treatment"],
      description: "Pay less for Special Treatment",
    },
  ],
  ryuji: [
    {
      level: 2,
      abilities: ["Punk Talk"],
      description: "Joker can attempt negotiations twice with Upbeat Shadows",
    },
    {
      level: 3,
      abilities: ["Follow Up"],
      description:
        "Occasionally follows up a weak or physical/gun attack to down the enemy",
    },
    {
      level: 4,
      abilities: ["Stealth Dash"],
      description: "Sprinting in the Metaverse attracts less attention",
    },
    {
      level: 6,
      abilities: ["Harisen Recovery"],
      description: "Occasionally cures other party members",
    },
    {
      level: 7,
      abilities: ["Insta-Kill"],
      description:
        "If a shadow is weaker than you (denoted as green using Third Eye), then you Insta-Kill it",
    },
    {
      level: 8,
      abilities: ["Endure"],
      description: "Survives a fatal blow once per battle",
    },
    {
      level: 9,
      abilities: ["Protect"],
      description: "Might jump-in to block a otherwise fatal blow to Joker",
    },
    {
      level: 10,
      abilities: ["Second Awakening"],
      description: "Captain Kidd transforms into Seiten Taisei",
    },
  ],
  igor: [
    {
      level: 1,
      abilities: ["Wild Talk", "Arcana Burst"],
      description:
        "Literally just the ability to negotiate with Shadows\nArcana Burst boosts Persona EXP when fusing depending on your Confidant rank with that person",
      date: "April 12th (4/12)\nClearing Kamoshida's Palace",
    },
    {
      level: 2,
      abilities: ["Third Eye"],
      description:
        "Holding Left Bumper on Controller or Control on Keyboard reveals action icons (Jump, Grapple, Crawl, etc.) as well as highlights Points/Objects of Interest (Chests, Footprints, etc.)",
      date: "April 20th (4/20)",
    },
    {
      level: 3,
      abilities: ["Power Stock"],
      description: "You can now have 8 Personas at once",
      date: "May 5th (5/5)",
    },
    {
      level: 4,
      abilities: [],
      description: "-",
      date: "Clearing Madarame's Palace",
    },
    {
      level: 5,
      abilities: ["Super Stock"],
      description: "You can now have 10 Persona at once",
      date: "June 11th (6/11)",
    },
    {
      level: 6,
      abilities: ["High Arcana Burst"],
      description:
        "Arcana Burst gives more (still dependent on Confidant Rank)",
      date: "Clearing Kaneshiro's Palace",
    },
    {
      level: 7,
      abilities: [],
      description: "-",
      date: "August 22nd (8/22)",
    },
    {
      level: 8,
      abilities: ["Ultra Stock"],
      description: "You can now have 12 Persona at once",
      date: "August 31st (8/31)",
    },
    {
      level: 9,
      abilities: [],
      description: "-",
      date: "October 11th (10/11)",
    },
    {
      level: 10,
      abilities: ["Max Arcana Burst"],
      description: "More XP for Persona Fusions",
      date: "December 24th (12/24)",
    },
  ],
  morgana: [
    {
      level: 1,
      abilities: ["Infiltration Tools"],
      description: "Allows you to craft basic infiltration tools.",
    },
    {
      level: 3,
      abilities: ["Follow Up"],
      description:
        "Occasionally follows up a weak or physical/gun attack to down the enemy",
    },
    {
      level: 4,
      abilities: ["Kitty Talk"],
      description:
        "If a negotiation with Animal-Type shadows fails you can try again",
    },
    {
      level: 5,
      abilities: ["Pickpocket"],
      description: "Occasionally obtain items when using a physical attack.",
    },
    {
      level: 6,
      abilities: ["Ace Tools"],
      description: "Allows you to craft all infiltration tools.",
    },
    {
      level: 7,
      abilities: ["Harisen Recovery"],
      description: "Occasionally cure other party members",
    },
    {
      level: 8,
      abilities: ["Endure"],
      description: "Survives a fatal blow once per combat",
    },
    {
      level: 9,
      abilities: ["Protect"],
      description: "Might jump-in to block a otherwise fatal blow to Joker",
    },
    {
      level: 10,
      abilities: ["Second Awakening"],
      description: "Zorro transforms into Mercurius",
    },
  ],
  kawakami: [
    {
      level: 1,
      abilities: ["Slack Off"],
      description:
        "You can do a couple of things during Kawakami's class: Sleep, Craft, Study, or Read. Reading and Crafting are self explanatory, Studying gives you Knowledge points, and Sleeping *can* give confidant points.",
    },
    {
      level: 3,
      abilities: ["Housekeeping"],
      description: "You can have Kawakami make coffee or do laundry.",
    },
    {
      level: 5,
      abilities: ["Free Time"],
      description:
        "Kawakami will distract teachers to give you free time in other classes.",
    },
    {
      level: 6,
      abilities: ["Super Housekeeping"],
      description: "Kawakami can now craft infiltration tools or make curry",
    },
    {
      level: 10,
      abilities: ["Special Massage"],
      description:
        "You can request a Massage after leaving the Metaverse, letting you go outside at night",
    },
  ],
  futaba: [
    {
      level: 1,
      abilities: ["Moral Support"],
      description:
        "Sometimes casts stat boosting spells or heals the party during battle.",
    },
    {
      level: 2,
      abilities: ["Mementos Scan"],
      description:
        "Occasionally maps the ENTIRE floor of mementos upon entering said floor.",
    },
    {
      level: 4,
      abilities: ["Position Hack"],
      description: "Chance to instantly hold-up when starting battle",
    },
    {
      level: 6,
      abilities: ["Active Support"],
      description:
        "Occasionally casts Charge/Concentrate or recharges Party SP during battle",
    },
    {
      level: 7,
      abilities: ["Treasure Reboot"],
      description: "Chance to revive search objects in the area after battle",
    },
    {
      level: 9,
      abilities: ["Emergency Shift"],
      description:
        "When 2 or more party members are KO'd automatically swaps in 2 other party members.",
    },
    {
      level: 10,
      abilities: ["Final Guard", "Second Awakening"],
      description:
        "Necronomicon transforms into Prometheus, giving her the ability to prevent a fatal blow to a current party member",
    },
  ],
  mishima: [
    {
      level: 1,
      abilities: ["Mishima's Support"],
      description: "Allows backup members to earn EXP.",
    },
    {
      level: 3,
      abilities: ["Mishima's Enthusiasm"],
      description: "Increases EXP earned from battle.",
    },
    {
      level: 5,
      abilities: ["Mishima's Desperation"],
      description: "Increases EXP earned by backup members.",
    },
    {
      level: 7,
      abilities: ["Phanboy"],
      description: "Greatly increases EXP earned from battle.",
    },
    {
      level: 10,
      abilities: ["Salvation Wish"],
      description:
        "Allows backup members to earn the same EXP as current party members.",
    },
  ],
};

export const WardenRequests: { name: string; level: number; description: string }[] = [
  {
    name: "Jack Frost with Mabufu",
    level: 1,
    description:
      "You can fuse Silky and Berith, both found in Kamoshida's Palace",
  },
  {
    name: "Ame-no-Uzume with Frei",
    level: 2,
    description:
      "You can fuse Cait Sith and Succubus which are both found in Kamoshida's, but you need to use a frei skill card, which at the earliest can only be recieved by itemizing Makami.",
  },
  {
    name: "Flauros with Tarukaja",
    level: 3,
    description:
      "This is gonna be a group execution between Berith, Orobas, and Eligor (who naturally gets Tarukaja)",
  },
  {
    name: "Pheonix with Counter",
    level: 4,
    description:
      "Get Yaksini by fusing Jack o' Lantern with Hua Po then fuse Yaksini with Kelpie",
  },
  {
    name: "Setana with Rakukaja",
    level: 5,
    description: "You can fuse Silky with Lamia",
  },
  {
    name: "Neko Shogun with Dekaja",
    level: 6,
    description:
      "You can fuse Anzu after level 28 with Sudama and Kodama to get Neko Shogun",
  },
  {
    name: "Lachesis with Tetraja",
    level: 7,
    description:
      "You can fuse Principality with Sandman to get Thoth, and then fuse Thoth with Anzu",
  },
  {
    name: "Hecatoncheires with Masukunda",
    level: 8,
    description:
      "Lilim gets Masukunda at level 34 which can then be fused with Anzu",
  },
  {
    name: "Bugs with Samarecarm",
    level: 9,
    description:
      "There is a Mementos request that unlocks on 7/10 that needs to be completed to get the item that unlocks bugs, then fuse Neko Shogun with Principality to get Hariti, and then fuse Hariti with Pisaca",
  },
  {
    name: "Seth with High Counter",
    level: 10,
    description:
      "Seth is listed under special fusions, and you can get a High Counter Card from a Mementos Quest on 10/14",
  },
];

export default ConfidantRankTables;
