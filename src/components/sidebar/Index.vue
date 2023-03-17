<template>
  <sidebar-menu :menu="menu" width="320px" v-if="modelValue" :hideToggle="true">
    <template v-slot:header>
      <TheHeader @hide="$emit('update:modelValue', false)" />
    </template>
  </sidebar-menu>
</template>

<script>
import { SidebarMenu } from "vue-sidebar-menu";
import IconHome from "../icons/IconHome.vue";
// import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
import TheHeader from "./Header.vue";
import IconUsersDished from "../icons/IconUsersDished.vue";
export default {
  emits: ["update:modelValue"],
  props: ["modelValue"],
  components: {
    SidebarMenu,
    TheHeader,
  },
  data() {
    return {
      rating: 0.5,
      show: true,
      isCollapsed: false,
      menu: [
        {
          href: "/",
          title: "Home",
          icon: {
            element: IconHome,
          },
        },
        {
          href: "/iajsd",
          title: "Users Dished you",
          icon: {
            element: IconUsersDished,
          },
        },
        {
          href: "/xyt",
          title: "How you dished",
          icon: {
            element: IconUsersDished,
          },
        },
        {
          href: "/profile",
          title: "My Profile",
          icon: {
            element: IconUsersDished,
          },
        },

        {
          href: "/settings",
          title: "Settings",
          icon: {
            element: IconUsersDished,
          },
        },
        {
          href: "/logout",
          title: "Log Out",
          icon: {
            element: IconUsersDished,
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss">
$primary-color: #e0067a;
$item-active-color: $primary-color;
$icon-width: 18px;
$icon-height: 18px;
$icon-bg: transparent;
$icon-active-color: $primary-color;
@import "vue-sidebar-menu/src/scss/vue-sidebar-menu.scss";
.vue3-star-ratings {
  background: #fff;
  padding: 10px;
  border-radius: 8px;
}

.v-sidebar-menu .vsm--link_level-1.vsm--link_active {
  box-shadow: -4px 0px 0px 0px #e0067a inset;
}

.v-sidebar-menu .vsm--menu {
  @apply pl-16;
}
</style>
