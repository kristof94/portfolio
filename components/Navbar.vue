<template>
  <b-navbar variant="dark" toggleable="md">
    <no-ssr>
      <b-navbar-toggle v-if="this.items[0]"  target="nav_collapse">
        <span>
          <font-awesome-icon :icon="['fa', 'bars']" />
        </span>
      </b-navbar-toggle>
    </no-ssr>

    <b-navbar-brand to="/" v-scroll-to="{ element: '#home', duration: 1000 }">Mon Portfolio</b-navbar-brand>

    <b-collapse id="nav_collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item v-scroll-to="{ element: item.sectionRef, duration: 1000 }" v-for="item in items" :key="item.sectionRef">
          {{ item.text }}
        </b-nav-item>
        <b-nav-item v-for="link in rlinks" :key="link.link" :to="link.link">{{ link.text }}</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>


<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  components: {},
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    rlinks: {
      type: Array,
      required: false
    }
  }
};
</script>

<style scoped>
ol,
ul {
  list-style: none;
}
li {
  display: inline-block;
  vertical-align: middle;
}
.navbar-brand:hover {
  color: #fff !important;
}

.navbar-light .navbar-brand {
  color: white;
}
.navbar-brand:hover{
  color: white !important;
}
.navbar-light .navbar-toggler-icon {
  color: white !important;
}
.navbar.navbar-light .navbar-nav .nav-link {
  color: white !important;
}
.navbar.navbar-light .navbar-toggler {
  color: white !important;
}


a:hover,
a:focus,
a:active {
  color: #999;
  text-decoration: none;
}
a {
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
  content: "";
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
</style>
