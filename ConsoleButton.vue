<template>
  <div class="button">
    <button type="button" @click="click"
   
    >New Task</button>
  </div>
</template>

<script>
export default {
  name: "ConsoleButton",
  methods: {
    click() {
      // alert("Hello There !!");
      this.$emit("addtask-Toggle"); // create an emit event to be triggered when
       //above click event is called simultaneously [ call the emit where component is used created ]
    },
  },
};
</script>

<style>
.button {
  padding: 0.5em;
  border: 0.2em dashed green;
  border-radius: 50%;
}
</style>