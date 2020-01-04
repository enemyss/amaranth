<template>
  <div id="app">
    <router-view name="header" />
    <div class="wrapper">
      <router-view />
    </div>
    <router-view name="footer" />
    <go-top></go-top>
  </div>
</template>
<script>
import GoTop from '@inotom/vue-go-top';

export default {
    components: {
      GoTop
    }
};
</script>
