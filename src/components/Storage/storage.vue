<template>
  <div>storage</div>
</template>
<script>
import { MountStorage } from 'storage/StorageApp';

export default {
  name: 'Storage',
  mounted() {
    MountStorage('content');
  },
}
</script>
