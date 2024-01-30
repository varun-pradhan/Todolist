<template>
    <!-- <div class="task"> -->
    <h3
     :class=" [ item.remainder ? 'remainder' : ''  ] "
      @dblclick="AllTasks.toggleRemainder(item.id)"  >
        {{ item.task }}
        <i @click="AllTasks.deleteTask(item.id)" class="fas fa-xmark"></i>
    </h3>

    <!-- </div> -->
</template>
    
<script setup>
import { useTaskStore } from "../store/index.js";
const AllTasks = useTaskStore();
import { defineProps } from "vue";

defineProps({
    item: Object,
});
</script>
    
<style scoped>
.remainder {
    border: 3px dashed purple;
}
div{

    overflow: hidden;
}

.fas {
    color: rgb(164, 47, 47);
    padding : 0 30px;
    float :right;
    /* border: 0.1em red dashed */
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
        }*/</style>