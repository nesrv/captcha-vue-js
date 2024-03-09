const EventHandling = {
  data() {
    return {
      message: "Привет, Vue.js!",
    };
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split("").reverse().join("");
    },
  },
};

Vue.createApp(EventHandling).mount("#event-handling").use(VueAxios, axios);


const app = Vue.createApp({
  /* опции */
});