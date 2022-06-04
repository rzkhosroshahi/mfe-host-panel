<template>
  <div>
    <header>
    Its default layout
    </header>
    <div class="contentText">
      content is:
    </div>
    <div class="content" id="content">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: 'l-default',
};
</script>

<style scoped>
header {
  background-color: #00baba;
  padding: 4px 16px;
  border-radius: 4px;
  color: #fff;
}
.content {
  border: 1px solid #00baba;
  margin-top: 12px;
  padding: 4px 16px;
  border-radius: 4px;
}
.contentText {
  margin-top: 12px;
}
</style>
