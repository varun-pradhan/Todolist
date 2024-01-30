<template>
    <div class="header">
        <h1> To Do List App<br /> {{ data }} </h1>
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent',
    props: {
        'data': {
            type: String,
            default: 'Component'
        }
    }
} 
</script>

<style scoped>
.header {
    background-color: rgb(249, 216, 173);
    border: 0.1em red dashed;

}
</style>