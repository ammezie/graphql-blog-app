<template>
   <section class="section">
    <div class="columns">
      <div class="column is-4 is-offset-4">

        <h2 class="title has-text-centered">Login</h2>

        <form method="POST" @submit.prevent="login">
          <div class="field">
            <label class="label">E-Mail Address</label>

            <p class="control">
              <input
                type="email"
                class="input"
                v-model="email">
            </p>
          </div>

          <div class="field">
            <label class="label">Password</label>

            <p class="control">
              <input
                type="password"
                class="input"
                v-model="password">
            </p>
          </div>

          <p class="control">
            <button class="button is-primary is-fullwidth is-uppercase">Login</button>
          </p>
        </form>
      </div>
    </div>
   </section>
</template>

<script>
import { LOGIN_MUTATION } from '@/graphql'

export default {
  name: 'LogIn',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$apollo
        .mutate({
          mutation: LOGIN_MUTATION,
          variables: {
            email: this.email,
            password: this.password
          }
        })
        .then(response => {
          // save user token to localstorage
          localStorage.setItem('blog-app-token', response.data.login)

          // redirect user
          this.$router.replace('/admin/posts')
        })
    }
  }
}
</script>
