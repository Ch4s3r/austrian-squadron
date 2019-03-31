<template>
  <div>
    <div
      :key="category.title"
      class="text-xs-center"
      v-for="category in categories"
    >
      <v-img :src="category.img" contain max-height="200px"></v-img>
      <br />
      <div :key="award.game" v-for="award in category.awards">
        {{ award }}
        <br /><br />
      </div>
      <br />
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class HallOfFame extends Vue {
  categories = [
    {
      game: "Starcraft 2",
      img: require("../assets/game_logo/sc2.png"),
      awards: [
        "Worldwide City Battle: 2.Platz",
        "Respawn Starcraft 2 1vs1 Turnier (9.12.2016): 1. und 2. Platz",
        "Respawn Starcraft 2 1vs1 Turnier (12.2.2017): 1. Platz",
        "Barcraft Graz Starcraft 2 Jubiläumsturnier: 1., 2. und 3. Platz",
        "Alpha Team League: 2. Platz\n",
        "Haag NetworX Lan 2017: 2. und 3. Platz",
        "RSTL: 2. Platz",
        "Crackling Cup: 1., 2. und 3. Platz",
        "Crackling Cup 2nd Edition: 1., 2. und 3. Platz",
        "Lord of Games 2018: 1. und 2. Platz"
      ]
    },
    {
      game: "League of Legends",
      img: require("../assets/game_logo/lol.png"),
      awards: [
        "Haag NetworX Lan 2017: 3. Platz",
        "Haag NetworX Lan 2018: 2. Platz",
        "ESVÖ Gamecity Qualifier: 2. Platz",
        "Lord of Games 2018: 1. Platz",
        "Respawn Challenger Series 2018 Lower Bracket: 1. Platz",
        "Respawn Teamspirit Award"
      ]
    },
    {
      game: "Counter-Strike: Global Offensive",
      img: require("../assets/game_logo/csgo.png"),
      awards: [
        "Haag NetworX Lan 2017: 2. Platz",
        "Haag NetworX Lan 2018: 3. Platz"
      ]
    },
    {
      game: "Overwatch",
      img: require("../assets/game_logo/overwatch.png"),
      awards: [
        "Haag NetworX Lan 2017: 2. Platz",
        "Haag NetworX Lan 2018: 2. Platz"
      ]
    },
    {
      game: "Rocket League",
      img: require("../assets/game_logo/rocketleague.png"),
      awards: ["Haag NetworX Lan 2018: 1. Platz"]
    },
    {
      game: "Hearthstone",
      img: require("../assets/game_logo/hearthstone.png"),
      awards: ["Respawn Tavern Hero 1. Platz"]
    }
  ];
}
</script>
