const routes = [{
    path: '/',
    component: {
      template: `<div><div v-for="r in rows" class="card mb-3"><div class="card-header"><img :src="r.img" :class="'w-5 h-5 '+(r.round ? 'rounded-full':'')">{{r.username}}</div><div class="card-body" v-html="r.text"></div></div></div>`,
      data() {
        return {
          rows: [{
              img: "/img/avatar.jpg",
              round:true,
              username: "Hobby",
              text: "I like drawing! Check out my newest drawings on behance: <a href=\"https://mpm.is-a.dev/be\">https://mpm.is-a.dev/be</a>"
            }, {
              img: "/img/avatar.jpg",
              round:true,
              username: "Hobby",
              text: "I like drawing! Check out my newest drawings on behance: <a href=\"https://mpm.is-a.dev/be\">https://mpm.is-a.dev/be</a>"
            },
            {
              img: "/img/quotable.svg",
              round:false,
              username: "Quotable",
              text: `<figure>
  <blockquote class="blockquote">
    <p>Huh, Yeah! What is it good for?</p>
  </blockquote>
  <figcaption class="blockquote-footer">
  Edwin Starr, <cite title="War">War</cite>
  </figcaption>
</figure>`
            },
          ]
        }
      }
    }
  },
  {
    path: '/project/:name',
    component: {
      template: '<div>{{$route.params.name}}</div>'
    }
  },{
    path: '/acknowledgements',
    component: {
      template: '<article><h1>Acknowledgements</h1><h3>These awesome open source projects made this site possible:<h3></article>'
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
    loading:false,
    rows: [{
      username: "Hobby",
      text: "I like drawing! Check out my newest drawings on behance: <a href=\"https://mpm.is-a.dev/be\">https://mpm.is-a.dev/be</a>"
    }, {
      username: "Hobby",
      text: "I like drawing! Check out my newest drawings on behance: <a href=\"https://mpm.is-a.dev/be\">https://mpm.is-a.dev/be</a>"
    }]
  }
}).$mount('#app')
