<template>
  <div>Текущий пользователь: {{ user }}</div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      user: 'Василий Пупкин'
    }
  }
}
</script>