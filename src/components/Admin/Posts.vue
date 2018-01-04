<template>
  <div>
    <Header/>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-3">
            <Menu/>
          </div>
          <div class="column is-9">
            <h2 class="title">Posts</h2>

            <router-link class="button is-primary" to="/admin/posts/new">New Post</router-link>

            <table class="table is-striped is-narrow is-hoverable is-fullwidth">
              <thead>
                <tr>
                  <th>SN</th>
                  <th>title</th>
                  <th>User</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(post, index) in allPosts"
                  :key="post.id">
                  <td>{{ index + 1 }}</td>
                  <td>{{ post.title }}</td>
                  <td>{{ post.user.username }}</td>
                  <td>
                    <router-link :to="`/${post.slug}`">View</router-link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from '@/components/Admin/Header'
import Menu from '@/components/Admin/Menu'
import { ALL_POSTS_QUERY } from '@/graphql'

export default {
  name: 'Posts',
  components: {
    Header,
    Menu
  },
  data () {
    return {
      allPosts: []
    }
  },
  apollo: {
    // fetch all posts
    allPosts: {
      query: ALL_POSTS_QUERY
    }
  }
}
</script>
