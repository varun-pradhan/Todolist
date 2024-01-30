<template>
  <div class="hello">
    <img alt="Vue logo" src="../assets/logo.png" @click="onClick" />

    <transition>
      <TaskForm v-if="addtask_show" @add-Task="AddTask" />
    </transition>

    <TaskListComponent  />
    <!-- <TableComponent :tableObject="db" /> -->

    <h3>{{ msg }}</h3>
    <!-- <h3>{{ AllTasks }}</h3> -->

    <ConsoleButton @addtask-Toggle="addtaskToggle" />
  </div>
</template>


<script>
// import TableComponent from "./TableComponent.vue";
import ConsoleButton from "./ConsoleButton.vue";
import TaskListComponent from "./TaskListComponent.vue";
import TaskForm from "./TaskForm.vue";
// import {computed} from 'vue'
// function

export default {
  name: "HelloWorld",
  components: {
    TaskForm,
    TaskListComponent,
    ConsoleButton, //*TableComponent,
  },
  props: {
    msg:String,
    db: Array,

    AllTasks: Array,
  },
  data() {
    return {
      currentTask: "",
      addtask_show: false,
    };
  },
  methods: {
    // AddTask(Record) {
    //   // this.input = Record;
    //   // console.log(typeof this.input);
    //   // console.log(this.input);
    //   console.log("Fetched data record " + Record);
    //   const input = computed(() => {
    //     return Record;
    //   });

      // console.log("Fetched data input " + input.value);
    // },

    addtaskToggle() {
      this.addtask_show = !this.addtask_show;
    },

    onClick() {
      //this.addtask_show = !this.addtask_show;
      this.$emit("addtask_Toggle");
    },
  },
  //[ AddTask ],

  // data() {return{}}
};

// function
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* * {
  border: 1.5px solid orangered;
} */
.hello {
  border: 0.4em greenyellow dotted;
}
h3 {
  margin: 2em 0px 0px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from .v-leave-to {
  opacity: 0;
}
img{ 
  object-fit: contain;
}
</style>
