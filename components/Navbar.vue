<template>
  <b-navbar
    toggleable="md"
    sticky>

    <no-ssr>
      <b-navbar-toggle target="nav_collapse">
        <span>
          <font-awesome-icon :icon="['fa', 'bars']" />
        </span>
      </b-navbar-toggle>
    </no-ssr>

    <b-navbar-brand v-scroll-to="{ element: '#home', duration: 1000 }"><a>Mon Portfolio</a></b-navbar-brand>

    <b-collapse
      id="nav_collapse"
      is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item v-scroll-to="{ element: '#home', duration: 1000 }">Qui suis-je</b-nav-item>
        <b-nav-item v-scroll-to="{ element: '#skills', duration: 1000 }">Mes compétences</b-nav-item>
        <b-nav-item v-scroll-to="{ element: '#contact', duration: 1000 }">Contactez-moi</b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>


<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  components: {},
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data: function() {
    return {
      items: [
        { text: 'Qui sommes-nous ?', sectionRef: '#who' },
        { text: 'Contactez-nous', sectionRef: '#contactus' }
      ]
    }
  },
  methods: {
    lanchModal() {
      // LoginModal.$refs.myModalRef.show()
    }
  }
}
</script>

<style>
ol,
ul {
  list-style: none;
}
li {
  display: inline-block;
  padding: 20px 0 20px;
  vertical-align: middle;
}
.navbar-brand:hover {
  color: #fff !important;
}

a:hover,
a:focus,
a:active {
  color: #999;
  text-decoration: none;
}
a {
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
  text-decoration: none;
  transition: color 0.1s, background-color 0.1s;
}
a {
  position: relative;
  display: block;
  padding: 16px 0;
  margin: 0 12px;
  letter-spacing: 1px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 900;
  text-transform: uppercase;
  transition: color 0.1s, background-color 0.1s, padding 0.2s ease-in;
  color: #fff;
}
a::before {
  content: '';
  display: block;
  position: absolute;
  bottom: 3px;
  left: 0;
  height: 3px;
  width: 100%;
  background-color: #fff;
  transform-origin: right top;
  transform: scale(0, 1);
  transition: color 0.1s, transform 0.2s ease-out;
}
a:active::before {
  background-color: #fff;
}
a:hover::before,
a:focus::before {
  transform-origin: left top;
  transform: scale(1, 1);
}

.navbar {
  background-color: transparent !important;
  position: fixed;
}
.navbar-light .navbar-toggler-icon {
  color: white !important;
}
.navbar.navbar-light .navbar-nav .nav-item .nav-link {
  color: white !important;
}
.navbar.navbar-light .navbar-toggler {
  color: white !important;
  border-color: rgba(0, 0, 0, 0) !important;
}
.navbar-light .navbar-brand {
  color: white;
}
.btn-primary-outline {
  background-color: transparent !important;
  border-color: transparent !important;
}

@media screen and (max-width: 640px) {
  .navbar-brand {
    font-size: 0.75rem;
  }
}
</style>
