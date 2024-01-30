import { defineStore, /*mapStores,mapState*/ } from 'pinia'



export const useTaskStore = defineStore({
  id:'task',
  state: () =>(
    { 
      // corns:56, 
       atask: [
       { id: 1, task: "Check mails", remainder: true },
       { id: 2, task: "Regularize attendance", remainder: false  },
       { id: 3, task: "Join the meet", remainder: true },
        ],
      
    }),
//     return { //  //   corns: 56//  }
// },


  getters: {
    // double: (state) => {state.count * 2},
  },
  actions: {
    addTask (record)  {
      
      this.atask = [...this.atask, record];
      console.log( ` New task added `)
      console.log(record)
      // console.log( ` New task added`)
    },
    deleteTask (id) {
      console.log(`deleting task ${id}`)
      this.atask = this.atask.filter( (apple)=> apple.id !== id
      )
    }
    // increment() {
    //   this.count++
    // }
    ,
    toggleRemainder( id ){
      this.atask = this.atask.map( 
        (data)=>
        data.id === id ? { ...data,remainder:!data.remainder}: data
      )
       },
    
  },
})

// export default {
//   computed: {
//     ...mapState(useTaskStore, ['task']),
//     ...mapState( useTaskStore, {
      
//     })
//   }
// }


