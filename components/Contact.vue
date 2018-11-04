<template>
  <div class="page">
    <b-container>
      <b-form-row class="d-flex é align-items-center justify-content-center text-center" style="width:100%;">
        <b-col cols="8">
          <b-form v-if="show" @submit="onSubmit">
            <b-form-group id="exampleInputGroup2" label="Your Name:" label-for="exampleInput2">
              <b-form-input id="exampleInput2" v-model="form.name" type="text" required placeholder="Enter name" />
            </b-form-group>
            <b-form-group id="exampleInputGroup1" label="Email address:" label-for="exampleInput1">
              <b-form-input id="exampleInput1" v-model="form.email" type="email" required placeholder="Enter email" />
            </b-form-group>
            <b-form-group id="exampleInputGroup3" label="Votre message:" label-for="exampleInput3">
              <b-form-textarea id="exampleInput3" v-model="form.text" :rows="3" :max-rows="6" required placeholder="Enter something" />
            </b-form-group>
            <transition name="submitBtn">
              <b-button type="submit" class="" variant="primary">Submit</b-button>
            </transition>
          </b-form>

        </b-col>
      </b-form-row>
    </b-container>
  </div>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  components: {},
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
.btn {
  background-color: black;
  border-color: transparent;
}

.btn:hover {
  background-color: #fff;
  color: #000;
  border-color: transparent;
}
</style>
