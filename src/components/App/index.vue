<template>
  <div>
    <div v-show="thirdRendering !== true">
      <h1>MFE Panel</h1>
      <router-view />
      <slot />
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapGetters([
      'thirdRendering',
    ])
  },
};
</script>
