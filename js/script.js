"use strict";

const {createApp} = Vue

createApp({

    data(){
        return {
            // array tasks
            tasks: [],
            
        }
        
    },
    
    methods: {
        // nuova task
        addTask(){
            const newTask = {
                text: 'aa',
                id: 1,
                done: false
            }

            this.tasks.push(newTask)
            console.log(tasks)
        }

    },

    mounted(){

    }

}).mount('#app');