<template>
    <div id="home">
    <navbar :items="items" :title="title" />
     <b-container class="d-flex about">
      <b-row class="align-items-center justify-content-center text-center" style="width:100%;">
        <b-col>
          <b-img rounded width="300" height="300" fluid alt="Me" src="/img/face.JPEG" />
        </b-col>
       </b-row>
    </b-container>
    <foot/>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import axios from "~/plugins/axios";
import Footer from '~/components/Footer.vue'
export default {
  components: {
    Navbar,
        'foot' : Footer

  },
  data() {
    return {
      title: "Mon portfolio",
      items: [        
      ]
    };
  }
};
</script>

<style>
.about{
  height: 100vh;
}
</style>
