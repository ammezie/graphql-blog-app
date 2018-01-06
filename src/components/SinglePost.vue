<template>
  <section class="section">
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <router-link class="button is-link is-small" to="/">Back Home</router-link>

        <h1 class="title">
          {{ post.title }}
        </h1>

        <div class="content">
          {{ post.content }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { POST_QUERY } from '@/graphql'

export default {
  name: 'SinglePost',
  data () {
    return {
      post: '',
      slug: this.$route.params.slug
    }
  },
  apollo: {
    // fetch post by slug
    post: {
      query: POST_QUERY,
      variables () {
        return {
          slug: this.slug
        }
      }
    }
  }
}
</script>
