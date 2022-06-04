<template>
  <div>storage</div>
</template>
<script>
import { MountStorage, UnMountStorage } from 'storage/StorageApp';

export default {
  name: 'Storage',

  mounted() {
    // MountStorage('content');
  },
  beforeMount() {
    MountStorage('content');
  },
  beforeDestroy() {
    UnMountStorage('content')
  },
  watch: {
    $route(to, from) {
      console.log('to >>', to);
      this.$router.replace(to);
      if (to !== from) {
        console.log('hey >>');
        this.$router.push(to);
      }
    }
  }
}
</script>
