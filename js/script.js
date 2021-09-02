//Copyright (c) 2021 MoPaMo All Rights Reserved.
const routes = [{
    path: '/',
    component: {
      template: `<div><div v-for="r in rows" class="card mb-3"><div class="card-header"><img :src="r.img" :class="'w-5 h-5 '+(r.round ? 'rounded-full':'')">{{r.username}}</div><div class="card-body" v-html="r.text"></div></div></div>`,
      data() {
        return {
          rows: [{
              img: "/img/avatar.jpg",
              round: true,
              username: "Hobby",
              text: "I like drawing! Check out my newest drawings on behance: <a href=\"https://mpm.is-a.dev/be\">https://mpm.is-a.dev/be</a>"
            }, {
              img: "/img/avatar.jpg",
              round: true,
              username: "Hobby",
              text: "I like drawing! Check out my newest drawings on behance: <a href=\"https://mpm.is-a.dev/be\">https://mpm.is-a.dev/be</a>"
            },
            {
              img: "/img/quotable.svg",
              round: false,
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
  }, {
    path: '/acknowledgements',
    component: {

      data() {
        return {
          licenses: [{
            name: "Bootstrap",
            text: `The MIT License (MIT)<br/>
<br/>
  Copyright (c) 2011-2021 Twitter, Inc.<br/>
  Copyright (c) 2011-2021 The Bootstrap Authors<br/>
<br/>
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
<br/>
  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.
<br/>
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.`
          }, {
            name: "Vue",
            text: `The MIT License (MIT)

Copyright (c) 2013-present, Yuxi (Evan) You<br/>
<br/>
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
<br/>
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
<br/>
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.`
          }, {
            name: "Vue Router",
            text: `MIT License
<br/><br/>
Copyright (c) 2013-present Evan You
<br/><br/>
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
<br/><br/>
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
<br/><br/>
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
          }, {
            name: "Tailwind CSS",
            text: `MIT License
<br/><br/>
Copyright (c) Adam Wathan <adam.wathan@gmail.com><br/>
Copyright (c) Jonathan Reinink <jonathan@reinink.ca>
<br/><br/>
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
<br/><br/>
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
<br/><br/>
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
          }, {
            name: "Bootstrap Icon",
            text: `The MIT License (MIT)
<br/><br/>
Copyright (c) 2019-2020 The Bootstrap Authors
<br/>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
<br/><br/>
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
<br/><br/>
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
          }, {
            name: "FontAwesome Icons",
            text: `CC BY 4.0 License (<a href="https://creativecommons.org/licenses/by/4.0/">https://creativecommons.org/licenses/by/4.0/</a>)
In the Font Awesome Free download, the CC BY 4.0 license applies to all icons
packaged as SVG and JS file types.
<br/>
<br/>
Indication: Changes were made to the icons`
          }]
        }
      },
      template: `<article><h1>Acknowledgements</h1><h5>These awesome open source projects made this site possible:</h5>
      <div class="accordion" id="accordionParent">
        <div class="accordion-item"  v-for="item,i in licenses">
          <h2 class="accordion-header" :id="'heading'+i">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse'+i" aria-expanded="false" aria-controls="collapseOne">
              {{item.name}}
            </button>
          </h2>
          <div :id="'collapse'+i" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionParent">
            <div class="accordion-body" v-html="item.text">
            </div>
          </div>
        </div>

      </div>
      </article>`

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
  methods:{
    back(){
      router.go(-1)
    }
  },
  data: {
    loading: false,
    rows: [{
      username: "Hobby",
      text: "I like drawing! Check out my newest drawings on behance: <a href=\"https://mpm.is-a.dev/be\">https://mpm.is-a.dev/be</a>"
    }, {
      username: "Hobby",
      text: "I like drawing! Check out my newest drawings on behance: <a href=\"https://mpm.is-a.dev/be\">https://mpm.is-a.dev/be</a>"
    }]
  }
}).$mount('#app')
