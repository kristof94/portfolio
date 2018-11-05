<template>
  <section v-bind:id="id">
    <b-container class="d-flex page">
      <b-row class="align-items-center">
        <b-col>
          <b-img rounded width="300" height="300" fluid alt="Me" src="/portfolio/img/face.JPEG" />
        </b-col>
        <b-col cols="12" sm="6" lg="6" class="blackOnWhite">
          <div class="justify-content-left">
            Christophe DOS SANTOS, 24 ans, sportif, fêtard et amateur de burger quand il ne code pas.
            <br />
          </div>
          <div class="text-center">
            <a style='display:inline;' href="http://www.linkedin.com/in/dossantoschristophe">
              <span class="icon">
                <font-awesome-icon :icon="['fab', 'linkedin']" />
              </span>
            </a>
            <a style='display:inline;' href="http://www.linkedin.com/in/dossantoschristophe">
              <span class="icon-pdf">
                <font-awesome-icon :icon="['fa', 'file-pdf']"/>
              </span>
            </a>
          </div>
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
.icon {
  font-size: 30px;
  color: #00a0dc;
  align-content: center;
}
.icon-pdf {
  font-size: 28px;
  color: #ce304a;
  align-content: center;
}
@media screen and (min-width: 360px) {
  .row {
    display: flex;
  }
  .col {
    display: block;
    text-align: center;
  }
  .col-sm-6 {
    margin-top: 20px;
  }
}
</style>
