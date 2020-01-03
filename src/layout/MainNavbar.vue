<template>
<div class="container">
  <div class="row">
    <div class="col-12">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="/amaranth/"><img class="nav-logo" :src="require('@/assets/img/fake-logo.png')"/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/amaranth/#about" v-scroll-to="'#about'">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/amaranth/#contact-us" v-scroll-to="'#contact-us'">Contact Us</router-link>
            </li>
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Productions</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" to="/amaranth/#products" v-scroll-to="'#products'">Products</router-link>
                          <router-link class="dropdown-item" to="/amaranth/products" >
                    Production Department
                  </router-link> 
            </div>
          </li>
          </ul>
          
        </div>
      </nav>
    </div>
  </div>
</div>
  <!-- <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template slot-scope="{ toggle, isToggled }">
      <router-link class="navbar-brand" to="/amaranth/" v-scroll-to="'#app'"  >
        <img class="nav-logo" src="/img/fake-logo.png" />
      </router-link>
    </template>
    <template slot="navbar-menu">
      <li class="nav-item">
        <router-link class="nav-link" to="/amaranth/#about" v-scroll-to="'#about'">About</router-link>
      </li>
      
    <li class="nav-item">
        <router-link class="nav-link" to="/amaranth/#contact-us" v-scroll-to="'#contact-us'">Contact Us</router-link>
      </li>
      <li class="nav-item">
        <router-link class="navbar-brand nav-link" to="/amaranth/products" >
          Products
        </router-link>        
      </li>
      <drop-down tag="li" class="nav-item" title="Production">
       <a class="dropdown-item" href="#">Products</a>
       <a class="dropdown-item" href="#">Production Department</a>
      </drop-down>      
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow us on Twitter"
          data-placement="bottom"
          href="https://twitter.com/test"
          target="_blank"
        >
          <i class="fab fa-twitter"></i>
          <p class="d-lg-none d-xl-none">Twitter</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Like us on Facebook"
          data-placement="bottom"
          href="https://www.facebook.com/test"
          target="_blank"
        >
          <i class="fab fa-facebook-square"></i>
          <p class="d-lg-none d-xl-none">Facebook</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow us on Instagram"
          data-placement="bottom"
          href="https://www.instagram.com/test"
          target="_blank"
        >
          <i class="fab fa-instagram"></i>
          <p class="d-lg-none d-xl-none">Instagram</p>
        </a>
      </li>
    </template>
  </navbar> -->
</template>

<script>

import 'bootstrap';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  methods: {
    scrollMeTo(refName) {
      var element = this.$refs[refName];
      console.log(element);
      //var top = element.offsetTop;

      //window.scrollTo(0, top);
    }
}
};
</script>

