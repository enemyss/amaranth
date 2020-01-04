import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/Index.vue';
import Products from './pages/Products.vue';
//import Login from './pages/Login.vue';
//import Profile from './pages/Profile.vue';
import MainNavbar from './layout/MainNavbar.vue';
import MainFooter from './layout/MainFooter.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/amaranth',
      name: 'index',
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/amaranth/production',
      name: 'production',
      components: { default: Products, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   components: { default: Login, header: MainNavbar },
    //   props: {
    //     header: { colorOnScroll: 400 }
    //   }
    // },
    // {
    //   path: '/profile',
    //   name: 'profile',
    //   components: { default: Profile, header: MainNavbar, footer: MainFooter },
    //   props: {
    //     header: { colorOnScroll: 400 },
    //     footer: { backgroundColor: 'black' }
    //   }
    // }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
