"use strict";

const {createApp} = Vue

createApp({

    data(){
        return {
            // array tasks
            tasks: [
                {
                    id: 1,
                    text: 'aaa',
                    done: true
                },
                {
                    id: 2,
                    text: 'bbb',
                    done: false
                },
                {
                    id: 3,
                    text: 'ccc',
                    done: false
                }
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

    },

    mounted(){

    }

}).mount('#app');