import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '@/views/ProductsView.vue'
import ProductItemView from '@/views/ProductItemView.vue'
import CartView from '@/views/CartView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import ProductFilter from '@/views/ProductFilter.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView,
      children: [{
        path: ':itemId',
        name: 'productItem',
        component: ProductItemView,
        props: true
      }
      ]
    },
    {
      path: '/filter/:category',
      name: 'productFilter',
      component: ProductFilter,
      props: true,
      children: [{
        path: ':itemId',
        name: 'productFilterItem',
        component: ProductItemView,
        props: true
      }
      ]
    },
    {
      path: '/cart',
      name: 'cartList',
      component: CartView,
      props: true
    },
    {
      path: '/about',
      name: 'aboutUs',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }

  ],
})

export default router
