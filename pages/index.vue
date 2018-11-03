<template>
  <div id="home" class="page0">
    <div class="page">
      <navbar :title="title"/>
      <who id="who"/>
    </div>
    <skills id="skills"/>
    <contact id="contact" />
    <footer>Je ne mange pas de cookie</footer>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Who from '~/components/Who.vue'
import Contact from '~/components/Contact.vue'
import Skills from '~/components/Skills.vue'

export default {
  components: {
    Navbar,
    Skills,
    Who,
    Contact
  },
  data() {
    return {
      title: 'Mon portfolio',
      text: `
        Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla
        tempor. Laborum consequat non elit enim exercitation cillum aliqua
        consequat id aliqua. Esse ex consectetur mollit voluptate est in duis
        laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam
        Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum
        nisi sit est tempor laborum mollit labore officia laborum excepteur
        commodo non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur
        ipsum commodo tempor sunt in proident.
      `
    }
  },
  methods: {
    // Convenience method to scroll a heading into view.
    // Not required for scrollspy to work
  }
}
</script>
<style>
* {
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.scrollablebody {
  position: relative;
  overflow-y: scroll;
  height: 100%;
  border-color: black;
  border-style: solid;
}
.layout {
  display: table;
  width: 100%;
  height: 100vh;
}

.layout__row {
  display: table-row;
}

.layout__cell {
  display: table-cell;
  vertical-align: middle;
}

.layout__cell--last {
  height: 100%;
}
.page0 {
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  border-style: solid;
  width: 100%;
  background: linear-gradient(#ff6465, #3f4588);
}

.page {
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  border-color: black;
  color: #fff;
  border-style: solid;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

main {
  height: auto;
}

footer {
  bottom: 0;
  padding: 20px;
  height: 10vh;
  text-align: center;
  background-color: black;
  color: #fff;
}
</style>
