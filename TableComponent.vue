<template>
<div class=" table">
    <table>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
      </tr> 
        <!-- <tr :key="item.id" v-for=" item in tableObject" >
            <td >{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
        </tr> -->
    
    </table>

</div>
    </template>

<script>
export default{
    name : 'TableComponent',
    props:{
        tableObject : Array,
    }

}
</script>

<style scoped>
    table, th,td {
        border: 2px rgb(145, 75, 145) double ;
        border-collapse: collapse;
        padding: 0.3em;
        margin : 1em auto;

    }

    .table{
        overflow-x: auto;
    }
/*
    {
        border:2px solid;
        padding:0.3em
    }*/
</style>