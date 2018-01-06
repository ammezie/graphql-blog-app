<template>
  <aside class="menu">
    <p class="menu-label">Post</p>
      <ul class="menu-list">
        <li>
          <router-link to="/admin/posts/new">New Post</router-link>
        </li>
        <li>
          <router-link to="/admin/posts">Posts</router-link>
        </li>
      </ul>
    <p class="menu-label">User</p>
    <ul class="menu-list">
      <li>
        <router-link to="/admin/users">Users</router-link>
      </li>
    </ul>
  </aside>
</template>
