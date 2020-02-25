<template>
    <div>
        <form @submit.prevent="login">
            <h1>Sign in</h1>
            <label>User name</label>
            <input required v-model="username" type="text" placeholder="John"/>
            <label>Password</label>
            <input required v-model="password" type="password" placeholder="Password"/>
            <hr/>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      username: null,
      password: null
    };
  },
  methods: {
    login() {
      const user = {
        username: this.username,
        password: this.password
      };

      this.$store.dispatch('auth_request', user)
        .then(() => {
          this.$router.push('/');
        });
    }
  }
};
</script>
