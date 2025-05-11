<template>
  <div class="container mt-5">
    <h2>New Task</h2>
    <form @submit.prevent="saveTask">
      <div class="mb-3">
        <label class="form-label">Title</label>
        <input v-model="task.title" type="text" class="form-control" />
      </div>
      <button class="btn btn-success">Save</button>
      <NuxtLink to="/" class="btn btn-secondary ms-2">Cancel</NuxtLink>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useTasksStore } from '@/stores/tasks'
import Swal from 'sweetalert2'

const tasksStore = useTasksStore()

const task = reactive({ title: '' })

const saveTask = async () => {
  await tasksStore.createTask(task)
  Swal.fire('Success', 'Task created successfully!', 'success')
  navigateTo('/')
}
</script>
