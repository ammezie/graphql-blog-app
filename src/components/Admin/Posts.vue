<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-3">
          <Menu/>
        </div>
        <div class="column is-9">
          <h2 class="title">Posts</h2>

          <table class="table is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>title</th>
                <th>User</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="post in allPosts"
                :key="post.id">
                <td>{{ post.title }}</td>
                <td>{{ post.user.username }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Menu from '@/components/Admin/Menu'
import { ALL_POSTS_QUERY } from '@/graphql'

export default {
  name: 'Posts',
  components: {
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
