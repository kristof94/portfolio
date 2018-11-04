<template>
  <section v-bind:id="id">
    <b-container class="d-flex page">
    <b-row class="justify-content-center text-center align-items-center ">
      <b-col>
        <b-img rounded width="300" height="300" fluid alt="Me" src="/portfolio/img/face.JPEG" />
      </b-col>
      <b-col cols="12" sm="8" lg="8" class="blackOnWhite">
        Christophe DOS SANTOS, 24 ans, jeune développeur, sportif et fétard quand il ne code pas.
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
  }
}
</script>

<style>
@media screen and (min-width: 1079px) {
  .col {
    margin-top: 20px;
  }
}
</style>
