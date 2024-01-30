<template>
    <!-- <h3>
    {{ item.task }}
      <i @click=" AllTasks.deleteTask(item.id)" class="fas  fa-xmark"></i>
    </h3> -->
  <div v-for="item in atask" v-bind:key="item">
    <TaskComponent :item=item />
  </div>
  <!-- <h3>{{ AllTasks.corns}}</h3> -->

  <!-- <h3>{{ AllTasks.getTask() }} -->
  <!-- {{task.task}} -->
  <!-- </h3> -->
</template>
    
    <script setup>
import { useTaskStore } from "../store/index.js";
import { storeToRefs } from "pinia";
const AllTasks = useTaskStore();

import TaskComponent from "./TaskComponent.vue";

const { atask } = storeToRefs(AllTasks);
// export default{
//     name : 'TaskListComponent',

//     props:{
//         AllTasks : Array,
//     }

// }
</script>
    
    <style scoped>
/* div{
        border: 3px dashed black
    } */

/*
        table, th,td {
            border: 2px rgb(145, 75, 145) double ;
            border-collapse: collapse;
            padding: 0.3em;
            margin : 1em auto;
    
        }
    
        .table{
            overflow-x: auto;
        }
        {
            border:2px solid;
            padding:0.3em
        }*/
</style>