<template>
  <div>
    <!-- <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        :style="{ backgroundImage: 'url(' + require('@/assets/img/bg6.jpg') + ')' }"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">Amaranth Baltic123</h1>
        </div>
      </div>
    </div> -->
     <div class="parallax py-5 parralax-header d-flex" :style="{ backgroundImage: 'url(' + require('@/assets/img/bg6.jpg') + ')' }">
       <div class="container justify-content-center align-self-center">
         <div class="row">
         <div class="col-lg-12">
           <h1 class="title text-center">Amaranth Baltic</h1>
         </div>
         </div>
       </div>
     </div>    
    <div class="section section-about-us" id="about">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <h2><strong>About Us</strong></h2>
            <h5><strong>Amaranth Baltic is 123 asdadas</strong></h5>
            <p>We have a wide network of suppliers from all over the world and are continuously looking for new partners and possibilities.</p>
            <h3><strong>Amaranth Baltic in short</strong></h3>
            <ul class="list-unstyled amaranth-list">
              <li>Test test test test test test</li>
              <li>Test test test test test test</li>
              <li>Test test test test test test</li>
              <li>Test test test test test test</li>
              <li>Test test test test test test</li>
              <li>Test test test test test test</li>
              <li>Test test test test test test</li>
            </ul>
          </div>
          <div class="col-md-3">
            <img class="img-fluid" :src="require('@/assets/img/about2min.jpg')"/>
          </div>          
          <div class="col-md-4">
            <h2 class="secondary-title"><strong>Amaranth Baltic works in sectors within the food industry:</strong></h2>
            <ul class="list-unstyled amaranth-list">
              <li>Test test</li>
              <li>Test test</li>
              <li>Test test</li>
              <li>Test test</li>
            </ul>
          </div>          
        </div>
      </div>
    </div>
       <!-- <div class="page-header page-header-small">
         <parallax class="page-header-image" style="background-image: url('https://demos.creative-tim.com/vue-now-ui-kit-pro/img/bg3.jpg')"></parallax>
     </div> -->
     <div class="parallax py-5" :style="{ backgroundImage: 'url(' + require('@/assets/img/parallax1.jpg') + ')' }">
       <div class="container">
         <div class="row">
         <div class="col-lg-6 offset-lg-6">
           <h1><strong>Baltic Food industry</strong></h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
               pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
               deserunt mollit anim id est laborum.
            </p>
           <br>
           <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
             laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto 
             beatae vitae dicta sunt explicabo.
          </p>
         </div>
         </div>
       </div>
     </div>
     <div class="section" id="products">
       <div class="container">
         <div class="row">
           <div class="col-md-12">
             <h2 class="text-center"><strong>Our Products</strong></h2>
           </div>
           <div class="row">
              <div class="col-md-4">
                <div class="card mb-3">
                  <div class="row no-gutters">
                    <div class="col-md-4">
                      <img :src="require('@/assets/img/login1.jpg')" class="card-img">
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      </div>
                    </div>
                  </div>
                </div>
             </div>
             <div class="col-md-4">
              <div class="card mb-3">
                <img :src="require('@/assets/img/login.jpg')" class="card-img-top">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>               
             </div>
             <div class="col-md-4">
              <div class="card">
                <img :src="require('@/assets/img/login.jpg')" class="card-img-top">
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>               
             </div>
           </div>
         </div>
       </div>
      </div>
        <!-- <div class="section"> 
      <parallax
        class="page-header-image"
        style="background-image: url('/img/bg6.jpg')"
      >
      </parallax>
  </div> -->
    <div class="section section-contact-us text-center" id="contact-us">
      <div class="container">
        <h2 class="title">Want to contact us?</h2>
        <p class="description">Description test test test.</p>
        <div class="row">
          <div class="col-lg-6 text-center ml-auto mr-auto col-md-8">
            <p>Contact Information</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-contact-information">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h3>Contact information</h3>
            <p>
              <strong>Title Title</strong>
              <br>
              Street 123, nr 5
              <br>
              Distrtict 99
            </p>
            <p>
              Random title 321
            </p>
            <p>
              Telephone: 22334455
              <br>
              Email: sales@amaranthbaltic.com
            </p>
          </div>
          <div class="col-md-6 offset-md-2 d-flex">
            <div class="row align-self-center">
              <div class="col-md-6">
                <img class="img-fluid" :src="require('@/assets/img/dummy-stamp.png')"/>
              </div>
              <div class="col-md-6">
                <img class="img-fluid" :src="require('@/assets/img/dummy-stamp.png')"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';

export default {
  name: 'landing',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {};
  }
};
</script>
<style></style>
