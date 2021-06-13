const c1 = () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/sunjingqian/work/src/templates/Post.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--journal-post-vue" */ "/Users/sunjingqian/work/src/templates/JournalPost.vue")
const c3 = () => import(/* webpackChunkName: "page--src--templates--project-post-vue" */ "/Users/sunjingqian/work/src/templates/ProjectPost.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--journal-vue" */ "/Users/sunjingqian/work/src/pages/Journal.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--contact-vue" */ "/Users/sunjingqian/work/src/pages/Contact.vue")
const c6 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/sunjingqian/work/node_modules/gridsome/app/pages/404.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/sunjingqian/work/src/pages/Index.vue")

export default [
  {
    path: "/post/:id/",
    component: c1
  },
  {
    path: "/projectPost/:id/",
    component: c2
  },
  {
    path: "/list/:id/",
    component: c3
  },
  {
    path: "/journal/",
    component: c4
  },
  {
    path: "/contact/",
    component: c5
  },
  {
    name: "404",
    path: "/404/",
    component: c6
  },
  {
    name: "home",
    path: "/",
    component: c7
  },
  {
    name: "*",
    path: "*",
    component: c6
  }
]
