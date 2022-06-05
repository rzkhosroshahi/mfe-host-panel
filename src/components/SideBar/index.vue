<template>
  <div class="nav">
    <ul>
      <li>
        <router-link to="/">
          home
        </router-link>
      </li>
      <li>
        <router-link to="/ecc">
          ecc
        </router-link>
      </li>
      <li>
        <router-link to="/storage">
          storage
        </router-link>
      </li>
      <li>
        <router-link to="/storage/help">
          storage help
        </router-link>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.nav {
  width: 200px;
  height: 100vh;
  border: 1px solid #00baba;
  padding: 4px 12px;
}
</style>
