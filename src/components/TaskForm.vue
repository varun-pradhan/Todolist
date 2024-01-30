<template>
  <div>
    <form @submit.prevent="AddTask">
      <input v-model="currentTask" placeholder="Write Task" />

      <input
        type="checkbox"
        v-model.lazy="remainder" 
      :true-value=true
        :false-value=false 
      />

      <button class="AddButton"  type="Submit">Add</button><br />
      <!-- <p >{{ currentTask }}</p> -->
    </form>
  </div>
</template>
    
<script setup>
import { useTaskStore } from '../store/index.js'
import { ref } from 'vue'
const Connect = useTaskStore()

const id = ref(0)
const currentTask = ref("")
const remainder = ref(true)
// export default {
//   name: "TaskForm",
//   // inject:['taskRecord'],
//   props: {
//     AllTasks: Array,
//   },
//   data() {
//     return {
//       id: "",
//       // jkl: this.taskRecord,

//       remainder: false,
//       currentTask: "",
//     };
//   },
//   methods: {
    function AddTask() {
        // .preventDefault();
      const record = {
        id : Math.floor(Math.random() * 1000),
        task: currentTask.value,
        remainder: remainder.value,
      };
      console.log("Fetched data record ");
      // console.log(record);

      Connect.addTask(record);

      // this.$emit("addTask",);

      id.value= 0;
      remainder.value = false;
      currentTask.value = ""
    // }//   },//   emits:['addTask']

}
</script>
    
<style scoped>
.AddButton {
  border: none;
  background-color: #51f3ed;
  margin: 10px 1em;
}

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