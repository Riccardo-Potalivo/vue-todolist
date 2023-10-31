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

            idIndex: 5,
            taskDescription: ''
        }
        
    },
    
    methods: {
        // nuova task
        addTask(){
            this.idIndex++
            const newTask = {
                text: this.taskDescription,
                done: false,
                id: this.idIndex
            }

            this.tasks.push(newTask);
            this.taskDescription = ''
            console.log(newTask)
        },
        
        removeTask(i){
            this.tasks.splice(i,1)
        },

        taskCheck(i){
            this.tasks[i].done = !this.tasks[i].done
        }

    },

    mounted(){

    }

}).mount('#app');