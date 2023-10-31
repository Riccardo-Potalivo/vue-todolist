"use strict";

const {createApp} = Vue

createApp({

    data(){
        return {
            // array tasks
            tasks: [
                {
                    text: 'aaa',
                    done: true,
                    id: 1
                },
                {
                    text: 'bbb',
                    done: false,
                    id: 2
                },
                {
                    text: 'ccc',
                    done: false,
                    id: 3
                },
                {
                    text: 'ddd',
                    done: false,
                    id: 4
                },
                {
                    text: 'eee',
                    done: false,
                    id: 5
                },
            ],
            
        }
        
    },
    
    methods: {
        // nuova task
        // addTask(){
        //     const newTask = {
        //         text: 'aa',
        //         id: 1,
        //         done: false
        //     }

        //     this.tasks.push(newTask)
        //     console.log(tasks)
        // }
        
        removeTask(i){
            this.tasks.splice(i,1)
        }

    },

    mounted(){

    }

}).mount('#app');