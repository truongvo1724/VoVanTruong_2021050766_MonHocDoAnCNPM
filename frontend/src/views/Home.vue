<template>
  <div class="container">
    <header class="jumbotron">
      <p>Xin chào {{ currentUser.fullName }}, id của bạn là {{ currentUser.id }}</p>
      <button v-on:click="logOut">Đăng xuất</button>
    </header>
  </div>
</template>
<script>
export default {
  name: 'Home',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
</script>
