<template>
  <section class="contact" v-bind:id="id">
    <div class="icon" >
      <a style='display:inline;' href="http://www.linkedin.com/in/dossantoschristophe">
        <span class="icon-linkedin">
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </span>
      </a>
      <a style='display:inline;' href="mailto:christophe-dossantos@outlook.com?subject=From Portfolio">
        <span class="icon-mail">
          <font-awesome-icon :icon="['fa', 'envelope']" />
        </span>
      </a>
      <a style='display:inline;' href="https://github.com/kristof94?tab=repositories">
        <span class="icon-github">
          <font-awesome-icon :icon="['fab', 'github-square']" />
        </span>
      </a>
    </div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  components: {},
  props: {
    id: String
  },
  data () {
    return {
      form: {
        email: '',
        name: '',
        text: ''
      },
      foods: [
        { text: 'Select One', value: null },
        'Carrots',
        'Beans',
        'Tomatoes',
        'Corn'
      ],
      show: true
    }
  },
  methods: {
    async onSubmit (evt) {
      await axios.post('/api/mail', this.form).then(function (response) {
        console.log(response)
      })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style>


</style>
