import Vue from 'vue'
import Router from 'vue-router'
import home from './pages/home'
import index from './components/index'
import product from './components/product'
import detail from './pages/detail'
import order from './pages/order'
import orderConfirm from './pages/orderConfirm'
import orderList from './pages/orderList'
import orderPay from './pages/orderPay'
import aliPay from './pages/aliPay'
import cart from './pages/cart'

Vue.use(Router);
export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: home,
      redirect: '/index',
      children: [{
          path: '/index',
          name: 'index',
          component: index,
        },
        {
          path: '/product/:id',
          name: 'product',
          component: product,
        },
        {
          path: '/detail/:id',
          name: 'detail',
          component: detail,
        }
      ]


    },
    {
      path: '/cart',
      name: 'cart',
      component: cart,
    },
    {
      path: '/order',
      name: 'order',
      component: order,
      children: [{
          path: 'confirm',
          name: 'order-confirm',
          component: orderConfirm,
        },
        {

          path: 'list',
          name: 'order-list',
          component: orderList,

        },
        {

          path: 'pay',
          name: 'order-pay',
          component: orderPay,

        },
        {

          path: 'alipay',
          name: 'alipay',
          component: aliPay,

        }

      ]
    }


  ]

})
