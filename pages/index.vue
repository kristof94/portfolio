<template>
  <div id="home" class="page">
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

export default {
  components: {
    Navbar,
    Skills,
    Who,
    Contact,
    'foot': Footer
  },
  mounted () {
    /* axios.get('/api/getcsrftoken').then((response) => {
      axios.defaults.headers.common['X-CSRF-TOKEN'] = response.data.csrfToken
    }, (err) => {
      console.log(err)
    }) */
  },
  data () {
    return {
      title: 'Mon portfolio',
      who: 'who',
      contact: 'contact',
      items: [
        { text: 'Compétences', sectionRef: '#skills' },
        { text: 'Contactez-moi', sectionRef: '#contact' }
      ],
      rlinks: [
        { text: 'A propos', link: 'about'}
      ]
    }
  }
}
</script>
<style>


</style>
