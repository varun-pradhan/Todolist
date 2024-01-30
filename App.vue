<template>
  <HeaderComponent data='Header Comp.'></HeaderComponent>

  <HelloWorld
    msg="Double Click on tasks to prioritize"
       :db="db"
       :AllTasks="AllTasks"
    />

  
    <!-- <h1 class="fun">I'm here H! tag</h1> -->
  <HeaderComponent data="Footer Comp." />
</template>

<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import HeaderComponent from "./components/HeaderComponent.vue"
// import { useTaskStore} from '../store/index.js'

import { ref, reactive,onMounted } from "vue";
// import _ from "lodash"

let db = ref([]);
let AllTasks = reactive([]);
//  let input = null;

onMounted(() => {
  db.value = [
    { id: 1, name: "Varun", email: "varun@mail.com" },
    { id: 2, name: "Pravin", email: "pravin@mail.com" },
    { id: 3, name: "Barun", email: "barun@mail.com" },
  ];

  AllTasks.addTask( [
    { id: 1, task: "Check mails", remainder: false },
    { id: 2, task: "Regularize attendance", remainder: true },
    { id: 3, task: "Join the meet", remainder: true },
  ]);
});


// async function AddTask(Record) {
//   // this.input = Record;
//   // console.log(typeof this.input);
//   // console.log(this.input);
//   const input = computed(() => { return Record})

//   console.log("Fetched data record " + input.value);

// }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border: 0.5em dotted rgb(234, 123, 142);
  background-color: cadetblue;
  max-width: 75%;
  /* text-justify: center; */
  margin: auto;
  /*box-shadow: px linear-gradient( top ,*red;/*, blue, green);*/
}

#app:hover {
  box-shadow: 0.2em 0.16em /*linear-gradient( top ,*/ red; /*, blue, green);*/

  /* transform:translateY(-0.3em);  */
  transition: all ease-out 2s;
}
</style>
