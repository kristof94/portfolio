<template>
  <div id="home">
    <navbar :items="items" :rlinks="rlinks" :title="title" />
    <who :id="who" />
    <skills id="skills" />
    <contact :id="contact" />
    <foot/>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Who from '~/components/Who.vue'
import Contact from '~/components/Contact.vue'
import Skills from '~/components/Skills.vue'
import Footer from '~/components/Footer.vue'
import axios from '~/plugins/axios'

export default {
  components: {
    Navbar,
    Skills,
    Who,
    Contact,
    'foot' : Footer
  },
  mounted () {
    axios.get('/api/getcsrftoken').then((response) => {
      axios.defaults.headers.common['X-CSRF-TOKEN'] = response.data.csrfToken
    }, (err) => {
      console.log(err)
    })
  },
  data () {
    return {
      title: 'Mon portfolio',
      who: 'who',
      contact: 'contact',
      items: [
        { text: "Compétences", sectionRef: "#skills" },
        { text: "Contactez-moi", sectionRef: "#contact" }
      ],
      rlinks: [
        { text: "A propos" , link: "about"}
      ]
    }
  }
}
</script>
<style>
* {
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.container {
  /*display: flex;*/
  justify-content: center;
  align-items: center;
}
.blackOnWhite{
  color: #000
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
  width: 100%;
  /*background: linear-gradient(#ff6465, #3f4588);*/
  background-color: #fff;
}
.page {
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  color: #fff;
  width: 100%;
  height: 100vh;
  margin-top: 20px;
}
main {
  height: auto;
}

</style>
