<template>
  <section class="skills" v-bind:id="id" >
    <b-container>
      <b-row v-for="skill in skills" :key="skill.name" class="d-flex align-items-center justify-content-center">
        <b-col cols="2" sm="1" lg="1">
          {{skill.name}}
        </b-col>
        <b-col cols="3" sm="1" lg="1" class="text-center">
          <b-img class="img-icon" rounded fluid :alt="skill.name" :src="skill.img" />
        </b-col>
        <b-col cols="6" sm="11" lg="10">
          <b-progress :label="skill.name" :value="skill.value" :max="max" show-progress animated></b-progress>
        </b-col>        
      </b-row>
    </b-container>
  </section>
</template>

<script>

export default {
  components: {
  },
  props: {
    id: String
  },
  data () {
    return {
      scrolled: false,
      max: 100,
      skills: [
        { name: 'Java',
          max: 90,
          value: 0,
          img: '/img/java.png',
          text: 'Java' },
        { name: 'Android',
          max: 90,
          value: 0,
          img: '/img/android.png',
          text: 'Android' },
        { name: 'JavaScript',
          max: 75,
          value: 0,
          img: '/img/javascript.png',
          text: 'JavaScript' },
        { name: 'NodeJS',
          max: 75,
          value: 0,
          img: '/img/nodejs.png',
          text: 'NodeJS' },
        { name: 'VueJS',
          max: 80,
          value: 0,
          img: '/img/vuejs.png',
          text: 'VueJS' },
        { name: 'Xamarin', max: 50, value: 0, img: '/img/xamarin.png', text: 'Xamarin' },
        { name: 'Oracle DB',
          max: 50,
          value: 0,
          img: '/img/oracle.png',
          text: 'Oracle DB' }
      ],
      total: 100,
      timer: null
    }
  },
  mounted () {
    this.skills.forEach(skill => {
      skill.value = skill.max
      if (skill.framework) {
        skill.framework.forEach(subskill => {
          subskill.value = subskill.max
        })
      }
    })
  }
}
</script>

<style>

</style>
