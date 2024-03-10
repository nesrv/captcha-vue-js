<template>
  <form @submit.prevent="submit">
    <label for="name">Name</label>
    <input type="text" id="name" v-model="name">

    <label for="email">Email</label>
    <input type="email" id="email" v-model="email">

    <button type="submit">Submit</button>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      name: '',
      email: ''
    }
  },
  methods: {
    submit() {
      axios.post('/send.php', {
        name: this.name,
        email: this.email
      })
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.error(error)
      })
    }
  }
}
</script>