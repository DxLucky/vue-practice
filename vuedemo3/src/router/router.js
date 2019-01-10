import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const Home=()=>import("../app/Home.vue");//首页
const PageOne =()=>import("../app/PageOne/PageOne.vue");//页面1
const PageOneChild1=()=>import("../app/PageOne/PageOneChild1.vue");//页面1的子页面1
const PageOneChild2=()=>import("../app/PageOne/PageOneChild2.vue");//页面1的子页面2
const PageTwo=()=>import("../app/PageTwo.vue");//页面2
const PageThree=()=>import("../app/PageThree.vue");//页面3
const PageFour=()=>import("../app/PageFour.vue");//页面4

export default new Router({
  routes:[
    {path:"*",component:Home},
    {path:"/",component:Home},
    {
      path:"/one",
      component:PageOne,
      children:[
        {
          path:"child1",
          component:PageOneChild1,
        },
        {
          path:"child2",
          component:PageOneChild2,
        }
      ]
    },
    {path:"/two/:id",component:PageTwo},
    {path:"/three",component:PageThree},
    {path:"/four",component:PageFour}
  ]
})
