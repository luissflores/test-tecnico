import {defineStore} from 'pinia'

export const useTasksStore = defineStore('tasks', {
    state: () => ({
        tasks: [],
    }),
    actions: {
        async fetchTasks() {
            const {data} = await useFetch('http://localhost:3001/tasks')
            this.tasks = data.value || []
        },
        async createTask(task) {
            await $fetch('http://localhost:3001/tasks', {
                method: 'POST',
                body: task,
            })
            await this.fetchTasks()
        },
        async updateTask(id, task) {
            await $fetch(`http://localhost:3001/tasks/${id}`, {
                method: 'PUT',
                body: task,
            })
            await this.fetchTasks()
        },
        async deleteTask(id) {
            await $fetch(`http://localhost:3001/tasks/${id}`, {
                method: 'DELETE',
            })
            await this.fetchTasks()
        },
        async getTask(id) {
            return await $fetch(`http://localhost:3001/tasks/${id}`)
        },
    },
})
