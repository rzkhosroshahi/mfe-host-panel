<template>
  <div>storage</div>
</template>
<script>
import { mapActions } from 'vuex';
import { MountStorage, UnMountStorage } from 'storage/StorageApp';

export default {
  name: 'Storage',
  created() {
    MountStorage('third');
    this.setStatusThirdRendering(true);
  },
  beforeDestroy() {
    UnMountStorage();
    this.setStatusThirdRendering(false);
  },
  watch: {
    $route(to, from) {
      if (to.name === from.name) {
        UnMountStorage();
        MountStorage('third');
      }
    },
  },
  methods: {
    ...mapActions(['setStatusThirdRendering']),
  },
}
</script>
