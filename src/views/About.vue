<template>
  <div>
    <v-card :key="content.title" class="mb-3" v-for="content in contents">
      <v-card-title primary-title>
        <h3 class="headline mb-0">{{ content.title }}</h3>
      </v-card-title>
      <v-img :src="content.img" aspect-ratio="1.5" contain v-if="content.img" />
      <v-card-text>
        <div v-html="content.text"></div>
      </v-card-text>
    </v-card>

    <v-card class="mb-3">
      <v-card-title primary-title>
        <h3 class="headline mb-0">Unsere Sponsoren</h3>
      </v-card-title>
      <v-img
        :key="sponsor.img"
        :src="sponsor.img"
        v-for="sponsor in sponsors"
        aspect-ratio="1.5"
        contain
      />
    </v-card>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class About extends Vue {
  contents = [
    {
      title: "Über uns",
      text:
        "Austrian Squadron ist ein Verein aus leiwanden Leuten, die mehrere Dinge verbindet. Partys, Lan-Partys, E-Sport und die daraus folgende Leidenschaft des Gamings. Gamerinnen und Gamer, Gelegenheitsspieler und Tryhards, Consolelover und PC Masterraceler, motivierte Leut und faule Hund, wir haben alles dabei! Hauptsache sie sind leiwand. Derzeit umfasst der Verein circa 80 Mitglieder . Das Ziel von Austrian Squadron ist es nicht nur eine Gaming-Community aus Leuten aufzubauen, mit denen man gerne spielt, sondern auch im Real Life gemeinsam erinnerungswürdige Momente zu erleben. Anders als andere Organisationen, legen wir unseren Fokus nicht darauf, der größte Verein zu werden oder die meisten Preise zu holen, sondern auf eine Bereicherung des Privatlebens für alle Mitglieder.",
      img: require("@/assets/group_photo.webp")
    },
    {
      title: "Entstehung",
      // img: require("../assets/evolution.png"),
      text:
        "Die Idee einen Verein zu gründen und der Name Austrian Squadron kamen erstmals am 11.8.2016 um 4:20 in der Früh, bei einer gemütlichen Partie “Squadron TD” in Starcraft 2, zur Sprache. Man wollte ursprünglich Freundeskreise, die die Leidenschaft des E-Sport teilen, vereinen. Außerdem war Austrian Squadron einer der ersten Vereine, die in der Respawn eSports Bar vertreten waren. Auch weiterhin kümmern sich einige unserer großartigen Mitglieder darum, den Verein, in puncto Modernisierung und Luxus weiter voranzutreiben."
    },
    {
      title: "Wie werde ich Mitglied?",
      text:
        "Da wir stark auf die Qualität der Mitglieder setzen (wir wollen keine Ungustln, Asoziale, Kiddies, Sozialschwache oder zwischenmenschliche Katastrophen) und nicht auf Quantität, kann man bei uns nur Mitglied werden, wenn man volljährig ist und zwei bestehende Mitglieder eine Empfehlung aussprechen. Dies ist uns besonders wichtig, da es uns lieber ist, langsam zu wachsen und mit Leuten, mit denen man Spaß bzw. eine leiwande Zeit haben kann, als auf Kosten der Community ohne zu zwinkern jeden aufzunehmen. <br><br> Daher erfolgt der Aufnahmeprozess bei uns in der Regel organisch. Sollte das Interesse einer Mitgliedschaft bestehen, kannst Du uns gerne auf Events (Respawn, Lan-Partys, etc.) oder auf unserem Discord Server besuchen und wir schauen, was sich ergibt ;)."
    }
  ];
  sponsors = [
    {
      img: require("@/assets/sponsor_logo/tischlerei_fuchs_logo_transparent.png")
    },
    {
      img: require("@/assets/sponsor_logo/respawn_bar_logo_transparent.png")
    },
    {
      img: require("@/assets/sponsor_logo/gamers_academy_logo.png")
    }
  ];
}
</script>
