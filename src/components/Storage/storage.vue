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
    $route(to) {
      if (to.name === 'storage') {
        const myEvent = new CustomEvent("changeRoute", {
          detail: {
            path: to.path,
          },
          bubbles: true,
          cancelable: true,
          composed: false,
        })
        document.dispatchEvent(myEvent);
      }
    },
  },
  methods: {
    ...mapActions(['setStatusThirdRendering']),
  },
}
</script>
