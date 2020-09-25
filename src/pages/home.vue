<template>
  <div>
    <p>home</p>
    <nav-header></nav-header>
    <router-view>index</router-view>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
  import NavHeader from "./../components/NavHeader";
  import NavFooter from "./../components/NavFooter";
  export default {
    name: "nav-home",
    components: {
      NavHeader,
      NavFooter
    }
  };

</script>
