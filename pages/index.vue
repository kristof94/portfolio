<template>
  <div
    id="home"
    class="page">
    <navbar :title="title" />
    <landing id="who"/>
    <who id="skills" />
    <who id="contact"/>

  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Landing from '~/components/Landing.vue'
import Who from '~/components/Who.vue'
import Navbar from '~/components/Navbar.vue'
export default {
  components: {
    Navbar,
    Logo,
    Landing,
    Who
  },
  data: function() {
    return {
      title: 'sdfsd'
    }
  }
}
</script>

<style>
.page {
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background: linear-gradient(#ff6465, #3f4588);
}

section {
  margin-top: 0px;
  margin-left: 16px;
  margin-right: 16px;
  height: 100vh;
}
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
