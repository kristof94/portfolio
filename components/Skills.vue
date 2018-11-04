<template>
  <section v-bind:id="id"  v-on:scroll.native="changeProgress" class="vertical-center">
    <b-container class="justify-content-center align-items-center">
      <b-row v-for="skill in skills" :key="skill.name" class="justify-content-center text-center align-items-center">
        <b-col cols="12" sm="1" lg="1">
          {{skill.name}}
        </b-col>
        <b-col cols="12" sm="1" lg="1">
          <b-img rounded width="40" height="80" fluid :alt="skill.name" :src="skill.img" />
        </b-col>
        <b-col cols="11" sm="11" lg="10">
          <b-progress :label="skill.name" :value="skill.value" :max="skill.max" show-progress animated></b-progress>
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
        { name: 'xamarin', max: 50, value: 0, img: '/portfolio/img/xamarin.png', text: 'hohho' },
        { name: 'javascript', max: 75, value: 0, img: '/portfolio/img/javascript.png', text: 'hohho' },
        { name: 'java', max: 90, value: 0, img: '/portfolio/img/java.png', text: 'hohho' }
      ],
      total: 100,
      timer: null
    }
  },
  methods: {
    incrementProgress () {
      this.timer = setInterval(() => {
        this.skills.filter(skill => {
          return skill.value < skill.max
        }).forEach(skill => {
          skill.value += 5
        })
      }, 500)
    },
    changeProgress () {
      const posY = window.document.getElementById('skills').offsetTop
      const test = window.scrollY >= posY && window.scrollY <= posY + window.document.getElementById('skills').offsetHeight
      if (test) {
        this.incrementProgress()
      }
    }
  },

  created () {
    if (process.browser) {
      window.addEventListener('scroll', this.changeProgress)
    }
  },
  destroyed () {
    if (process.browser) {
      window.removeEventListener('scroll', this.changeProgress, this.resetProgress)
      clearInterval(this.timer)
      this.timer = null
    }
  }
}
</script>

<style>

.vertical-center {
  height: 100vh;
  display: flex;
  align-items: center;
}
@media screen and (min-width: 1079px) {
  
  .col-12 {
    margin-top: 20px;
  }
}
</style>
