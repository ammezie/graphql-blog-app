<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/admin">Blog App</router-link>

        <button class="button navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item" @click="logout">Logout</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    logout () {
      // remove user token from localstorage
      localStorage.removeItem('blog-app-token')

      // redirect to login page
      this.$router.replace('/login')
    }
  }
}
</script>
