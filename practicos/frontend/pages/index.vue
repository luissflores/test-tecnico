<template>
  <div class="container mt-5">
    <h1 class="mb-4">Task List</h1>
    <NuxtLink to="/new" class="btn btn-primary mb-3">Create Task</NuxtLink>

    <div v-for="task in tasksStore.tasks" :key="task.id" class="card mb-2">
      <div class="card-body d-flex justify-content-between align-items-center">
        <div>{{ task.title }}</div>
        <div>
          <NuxtLink :to="`/edit/${task.id}`" class="btn btn-warning btn-sm">Edit</NuxtLink>
          <button @click="deleteTask(task.id)" class="btn btn-danger btn-sm ms-2">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTasksStore } from '@/stores/tasks'
import Swal from 'sweetalert2'

const tasksStore = useTasksStore()
await tasksStore.fetchTasks()

const deleteTask = async (id) => {
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: 'This action cannot be undone!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
  })
  if (result.isConfirmed) {
    await tasksStore.deleteTask(id)
    Swal.fire('Deleted!', 'The task has been deleted.', 'success')
  }
}
</script>
