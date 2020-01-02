<template>
  <navbar
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
      <!-- <li class="nav-item">
        <router-link class="navbar-brand nav-link" to="/amaranth/products" >
          Products
        </router-link>        
      </li> -->
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
  </navbar>
</template>

<script>
import { DropDown, NavbarToggleButton, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    DropDown,
    Navbar,
    NavbarToggleButton,
    NavLink,
    [Popover.name]: Popover
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

<style scoped></style>
