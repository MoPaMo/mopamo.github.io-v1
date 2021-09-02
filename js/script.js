const routes = [{
    path: '/',
    component: {
      template: `<div><div v-for="r in rows" class="card text-white bg-dark mb-3"><div class="card-header"><img :src="r.img" class="w-5 h-5 rounded-full">{{r.username}}</div><div class="card-body" v-html="r.text"></div></div></div>`,
      data() {
        return {
          rows: [{
            img:"/img/avatar.JPG",
            username: "Hobby",
            text: "I like drawing! Check out my newest drawings on behance: <a href=\"https://mpm.is-a.dev/be\">https://mpm.is-a.dev/be</a>"
          }, {
            img:"/img/avatar.jpg",
            username: "Hobby",
            text: "I like drawing! Check out my newest drawings on behance: <a href=\"https://mpm.is-a.dev/be\">https://mpm.is-a.dev/be</a>"
          }]
        }
      }
    }
  },
  {
    path: '/bar',
    component: {
      template: '<div>bar</div>'
    }
  },
  {
    path: '*',
    component: {
      template: '<div>404 Not Found</div>'
    }
  }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

const app = new Vue({
  router: router,
  data: {
    rows: [{
      username: "Hobby",
      text: "I like drawing! Check out my newest drawings on behance: <a href=\"https://mpm.is-a.dev/be\">https://mpm.is-a.dev/be</a>"
    }, {
      username: "Hobby",
      text: "I like drawing! Check out my newest drawings on behance: <a href=\"https://mpm.is-a.dev/be\">https://mpm.is-a.dev/be</a>"
    }]
  }
}).$mount('#app')
