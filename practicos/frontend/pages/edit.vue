<template>
  <div class="container mt-5">
    <h2>Edit Task</h2>
    <form @submit.prevent="updateTask">
      <div class="mb-3">
        <label class="form-label">Title</label>
        <input v-model="task.title" type="text" class="form-control" />
      </div>
      <button class="btn btn-primary">Update</button>
      <NuxtLink to="/" class="btn btn-secondary ms-2">Cancel</NuxtLink>
    </form>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import { useTasksStore } from '@/stores/tasks'
import { useRoute, navigateTo } from '#app'
import Swal from 'sweetalert2'

const tasksStore = useTasksStore()
const route = useRoute()
const task = reactive({ title: '' })

onMounted(async () => {
  const data = await tasksStore.getTask(route.params.id)
  task.title = data.title
})

const updateTask = async () => {
  await tasksStore.updateTask(route.params.id, task)
  Swal.fire('Updated', 'Task updated successfully!', 'success')
  navigateTo('/')
}
</script>
