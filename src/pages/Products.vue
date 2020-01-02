<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image:url('/img/bg5.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">Products</h1>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <h3 class="title text-center">Our range</h3>
        <h5 class="description">
          One morning, when Gregor Samsa woke from troubled dreams, he 
          found himself transformed in his bed into a horrible vermin. He la
          y on his armour-like back, and if he lifted his head a little he 
          could see his brown belly, slightly domed and d
        </h5>
        <div class="row">
          <div class="col-md-6 ml-auto mr-auto">
            <h4 class="title text-center">Types</h4>
          </div>
          <tabs
            pills
            class="nav-align-center"
            tab-content-classes="gallery"
            tab-nav-classes="nav-pills-just-icons"
            type="primary"
          >
            <tab-pane title="Products">
              <i slot="label" class="now-ui-icons design_image"></i>

              <div class="col-md-10 ml-auto mr-auto">
                <div class="row collections">
                  <div class="col-md-6">
                    <img src="img/bg6.jpg" class="img-raised" />
                    <img src="img/bg11.jpg" alt="" class="img-raised" />
                  </div>
                  <div class="col-md-6">
                    <img src="img/bg7.jpg" alt="" class="img-raised" />
                    <img src="img/bg8.jpg" alt="" class="img-raised" />
                  </div>
                </div>
              </div>
            </tab-pane>

            <tab-pane title="Home">
              <i slot="label" class="now-ui-icons location_world"></i>

              <div class="col-md-10 ml-auto mr-auto">
                <div class="row collections">
                  <div class="col-md-6">
                    <img src="img/bg1.jpg" alt="" class="img-raised" />
                    <img src="img/bg3.jpg" alt="" class="img-raised" />
                  </div>
                  <div class="col-md-6">
                    <img src="img/bg8.jpg" alt="" class="img-raised" />
                    <img src="img/bg7.jpg" alt="" class="img-raised" />
                  </div>
                </div>
              </div>
            </tab-pane>

            <tab-pane title="Messages">
              <i slot="label" class="now-ui-icons sport_user-run"></i>

              <div class="col-md-10 ml-auto mr-auto">
                <div class="row collections">
                  <div class="col-md-6">
                    <img src="img/bg3.jpg" alt="" class="img-raised" />
                    <img src="img/bg8.jpg" alt="" class="img-raised" />
                  </div>
                  <div class="col-md-6">
                    <img src="img/bg7.jpg" alt="" class="img-raised" />
                    <img src="img/bg6.jpg" class="img-raised" />
                  </div>
                </div>
              </div>
            </tab-pane>
          </tabs>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Tabs, TabPane } from '@/components';

export default {
  name: 'products',
  bodyClass: 'products-page',
  components: {
    Tabs,
    TabPane
  }
};
</script>
<style></style>
