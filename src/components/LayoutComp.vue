<template>
  <HeaderComp :homeData="homeData" />
  <main>
    <slot></slot>
  </main>
  <FooterComp :homeData="homeData" />
</template>

<script>
import HeaderComp from "./HeaderComp.vue";
import FooterComp from "./FooterComp.vue";

export default {
  name: "LayoutComp",
  components: {
    HeaderComp,
    FooterComp,
  },
  props: {
    homeData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
main {
  padding: 20px;
}
</style>
