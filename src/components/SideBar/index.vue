<template>
  <div class="nav">
    <ul>
      <li>
        <router-link to="/">
          home
        </router-link>
      </li>
      <li>
        <router-link to="/ecc" @click.native="onExternalLinksClick('/ecc')">
          ecc
        </router-link>
      </li>
      <li>
        <router-link to="/ecc/servers" @click.native="onExternalLinksClick('/ecc/servers')">
          servers
        </router-link>
      </li>
      <li>
        <router-link to="/storage" @click.native="onExternalLinksClick('/storage')">
          storage
        </router-link>
      </li>
      <li>
        <router-link to="/storage/help" @click.native="onExternalLinksClick('/storage/help')">
          storage help
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'sideBar',
  methods: {
     onExternalLinksClick(to) {
       const myEvent = new CustomEvent("changeRoute", {
         detail: {
           path: to,
         },
         bubbles: true,
         cancelable: true,
         composed: false,
       })
       document.dispatchEvent(myEvent);
     },
   },
}
</script>
<style scoped>
.nav {
  width: 200px;
  height: 100vh;
  border: 1px solid #00baba;
  padding: 4px 12px;
}
</style>
