const app = Vue.createApp({
  data() {
    return {
      newTask: "",
      Tasks: [],
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== "") {
        this.Tasks.push(this.newTask.trim());
        this.newTask = "";
      }
    },
    deleteTask(index) {
      this.Tasks.splice(index, 1);
    },
  },
  mounted() {
    const saved = localStorage.getItem("Tasks");
    if (saved) {
      this.Tasks = JSON.parse(saved);
    }
  },
  watch: {
    Tasks: {
      handler(newVal) {
        localStorage.setItem("Tasks", JSON.stringify(newVal));
      },
      deep: true,
    },
  },
});

app.mount("#app");