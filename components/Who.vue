<template>
  <section v-bind:id="id" class="who">
    <b-container class="d-flex">
      <b-row>
        <b-col class="d-flex align-items-center justify-content-center">
          <b-img fluid rounded alt="Me" src="/img/face.JPEG" />
        </b-col>
        <b-col cols="12" sm="6" lg="6">          
            <h1>Christophe DOS SANTOS</h1>
            <h2>25 ans, sportif, fêtard et amateur de kébab quand il ne code pas.</h2>          
          <div class="icon">
              <a style='display:inline;' href="http://www.linkedin.com/in/dossantoschristophe">
                <span class="icon-linkedin">
                  <font-awesome-icon :icon="['fab', 'linkedin']" />
                </span>
              </a>
              <a style='display:inline;' href="/Christophe_DOSSANTOS_CV.pdf">
                <span class="icon-pdf">
                  <font-awesome-icon :icon="['fa', 'file-pdf']" />
                </span>
              </a>
              <a style='display:inline;' href="https://github.com/kristof94?tab=repositories">
                <span class="icon-github">
                  <font-awesome-icon :icon="['fab', 'github-square']" />
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
  components: {},
  props: {
    id: String
  }
}
</script>

<style>

.icon {
  margin-top: 20px;
  font-size: 28px;
  width: 100%;
  letter-spacing: 20px;
  text-align: center ;
}
.icon-linkedin {
  color: #00a0dc;
}

.icon-pdf {
  color: #ce304a;
}

.icon-mail {
  color: #3caa61;
}

.icon-github {
  color: #272425;
}
</style>
