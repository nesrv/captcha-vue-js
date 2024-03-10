
const app = Vue.createApp({});

app.component("hello", {
  template: "<h2>Hello</h2>",
});
app.mount("#app");


const app1 = Vue.createApp({});

app1.component("component-a", {
  template: "<h2>Component A</h2>",
});
app1.component("component-b", {
  template: "<h2>Component B</h2>",
});
app1.mount("#app1");


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


