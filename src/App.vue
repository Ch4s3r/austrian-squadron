<template>
  <v-app
    dark
    v-touch="{
      left: () => (drawer = true),
      right: () => (drawer = false)
    }"
  >
    <v-toolbar app flat>
      <v-toolbar-side-icon large>
        <v-img
          :src="require('@/assets/austrian-squadron-logo-white.svg')"
          contain
        ></v-img>
      </v-toolbar-side-icon>
      <v-toolbar-title>Austrian Squadron</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          :key="item.iconClass"
          :to="item.link"
          active-class="red--text"
          flat
          v-for="item in menu"
        >
          <v-icon class="mr-1" color="red">{{ item.iconClass }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-side-icon
        @click.stop="drawer = !drawer"
        class="hidden-md-and-up"
      >
        <v-icon large>fal fa-angle-left</v-icon>
      </v-toolbar-side-icon>
    </v-toolbar>

    <v-navigation-drawer app disable-resize-watcher right v-model="drawer">
      <v-list>
        <v-list-tile
          :key="item.icon"
          :to="item.link"
          active-class="red--text"
          avatar
          v-for="item in menu"
        >
          <v-list-tile-avatar>
            <v-icon color="red"> {{ item.iconClass }}</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container fill-height fluid>
        <v-layout align-center justify-center>
          <v-flex md6 sm8>
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class App extends Vue {
  drawer = false;
  menu = [
    // { iconClass: "fal fa-home", title: "Home", link: "/" },
    // { iconClass: "fal fa-users", title: "Members", link: "/members" },
    {
      iconClass: "fal fa-trophy-alt",
      title: "Hall of fame",
      link: "/hall-of-fame"
    },
    { iconClass: "fal fa-bookmark", title: "About", link: "/" }
  ];
}
</script>
