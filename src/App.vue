<template>
  <v-app
    v-touch="{
      left: () => (drawer = true),
      right: () => (drawer = false)
    }"
  >
    <v-toolbar color="#ffffff">
      <v-toolbar-title>Austrian Squadron</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn :key="item.icon" :to="item.link" flat v-for="item in menu">
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-side-icon
        @click="drawer = !drawer"
        class="hidden-md-and-up"
      ></v-toolbar-side-icon>
    </v-toolbar>

    <v-navigation-drawer app dark disable-resize-watcher right v-model="drawer">
      <v-list>
        <v-list-tile :key="item.icon" v-for="item in menu">
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container fill-height fluid>
        <v-layout align-center justify-center>
          <v-flex shrink>
            <h1 class="display-1">Vuetify Mobile Navbar using v-menu</h1>
            <p>
              Quick example of collapsable mobile menu
              <tt>&lt;v-toolbar&gt;</tt>, with a <tt>&lt;v-menu&gt;</tt> for
              mobile screens.
            </p>

            <p>
              Also shows how to use <tt>.hidden-md-and-up</tt> CSS classes to
              appropriately hide/show the menu depending upon window width.
            </p>
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
    { icon: "home", title: "Link A" },
    { icon: "info", title: "Link B" },
    { icon: "warning", title: "Link C" }
  ];
}
</script>
