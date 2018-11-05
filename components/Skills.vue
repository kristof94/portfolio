<template>
  <section v-bind:id="id" v-on:scroll.native="changeProgress" class="vertical-center">
    <b-container class="justify-content-center align-items-center">
      <b-row v-for="skill in skills" :key="skill.name" class="mainL justify-content-center text-center align-items-center">
        <b-col cols="12" sm="1" lg="1">
          {{skill.name}}
        </b-col>
        <b-col cols="12" sm="1" lg="1">
          <b-img rounded width="40" height="80" fluid :alt="skill.name" :src="skill.img" />
        </b-col>
        <b-col class="align-items-center" cols="11" sm="11" lg="10">
          <b-progress :label="skill.name" :value="skill.value" :max="max" show-progress animated></b-progress>
        </b-col>
        <b-container v-if="skill.framework">
          <b-row v-for="subSkill in skill.framework" :key="subSkill.name" class="justify-content-left align-items-center framework">
            <b-col offset="1" cols="9" sm="1" lg="1">
              {{subSkill.name}}
            </b-col>
            <b-col cols="1" sm="1" lg="1">
              <b-img rounded width="20" height="40" fluid :alt="subSkill.name" :src="subSkill.img" />
            </b-col>
            <b-col cols="1" sm="1" lg="9">
              <b-progress :label="subSkill.name" :value="subSkill.value" :max="max" show-progress animated></b-progress>
            </b-col>
          </b-row>
        </b-container>
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
.vertical-center {
  height: 100vh;
  display: flex;
  align-items: center;
}

.mainL {
  margin-bottom: 20px;
  margin-top: 20px;
}

.framework {
  margin-bottom: 0px !important;
  margin-top: 0px !important;
}

.progress-bar {
}

@media screen and (min-width: 1079px) {
  .col-12 {
  }
}
</style>
