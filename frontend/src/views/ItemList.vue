<template>
  <div class="itemList">
    <button @click="getUsers">a</button>
    <div v-for="(user, index) in users" :key="index" class="user-wrap">
      <h2>No. {{ index + 1 }}</h2>
      <dl>
        <dt>아이디</dt>
        <dd>{{ user.userid }}</dd>
        <dt>이름</dt>
        <dd>{{ user.name }}</dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    }
  },
  created() {
    this.axios.get("/users").then((response) => {
      this.users = response.data;
      console.log("this.users",this.users)
    });
  },
  methods: {
    getUsers(){
      console.log(this.users)
    }
  }
};
</script>
 