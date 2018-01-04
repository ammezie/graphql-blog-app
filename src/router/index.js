import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import SignUp from '@/components/Admin/SignUp'
import LogIn from '@/components/Admin/LogIn'
import Users from '@/components/Admin/Users'
import UserProfile from '@/components/Admin/UserProfile'
import Posts from '@/components/Admin/Posts'
import AddPost from '@/components/Admin/AddPost'
import SinglePost from '@/components/SinglePost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/login',
      name: 'LogIn',
      component: LogIn
    },
    {
      path: '/admin/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/admin/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/admin/posts/new',
      name: 'AddPost',
      component: AddPost
    },
    {
      path: '/admin/users/:id',
      name: 'UserProfile',
      component: UserProfile,
      props: true
    },
    {
      path: '/:slug',
      name: 'SinglePost',
      component: SinglePost,
      props: true
    }
  ]
})
