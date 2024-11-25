<script setup>
import { onMounted, ref } from "vue";
import Modal from "./components/Modal.vue";
import { getTasks } from "./composables/getTasks";
import { deleteTask } from "./composables/deleleTask";
import { addTask } from "./composables/addTask";

const { tasks } = getTasks();
const taskInput = ref("");
const isEditing = ref(false);

const editedTask = ref("");
const currentId = ref("");
const currentEditIndex = ref(null);

const taskAdd = async () => {
  if (taskInput.value.trim() !== "") {
    const data = {
      name: taskInput.value,
      completed: false,
    };
    await addTask(data);
    taskInput.value = "";
  }
};

const delTask = (id) => {
  deleteTask(id);
};

const editTask = (index) => {
  isEditing.value = true;
  currentEditIndex.value = index;
  currentId.value = tasks.value[index].id;
  editedTask.value = tasks.value[index].name;
};

const handleEdit = (data) => {
  console.log(data);
  // if (currentEditIndex.value !== null) {
  //   tasks.value[currentEditIndex.value].name = data;
  // }
  // isEditing.value = false;
  // currentEditIndex.value = null;
};

const cancelEdit = (data) => {
  isEditing.value = data;
};
</script>

<template>
  <h1>To Do List</h1>
  <input
    type="text"
    @keyup.enter="taskAdd"
    placeholder="Enter Task"
    v-model="taskInput"
  />
  <button @click="taskAdd">Add Task</button>
  <ul>
    <li v-for="(task, index) in tasks" :key="task.id">
      <p>{{ task.name }}</p>
      <div class="btns">
        <button @click="editTask(index)">Edit</button>
        <button @click="delTask(task.id)">Delete</button>
      </div>
    </li>
  </ul>

  <Modal
    @cancel-edit="cancelEdit"
    :currentTask="editedTask"
    :taskId="currentId"
    class="editModal"
    v-show="isEditing"
  />
</template>

<style scoped>
input {
  display: inline-block;
  padding: 13px;
  border-radius: 10px;
  border: none;
  width: 50%;
  background: rgb(227, 227, 225);
  box-shadow: 0px 0 5px grey, -0px 0 5px grey;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

li {
  display: flex;
  justify-content: space-between;
  text-align: left;
  padding: 10px 15px;
  margin: auto;
  background: rgb(227, 227, 225);
  border-radius: 10px;
  margin: 10px auto;
  box-shadow: 0px 0 5px grey, -0px 0 5px grey;
}

button {
  margin: 30px auto;
  margin-left: 15px;
  display: inline-block;
  padding: 10px 20px;
  background: rgb(25, 25, 25);
  border-radius: 10px;
  color: white;
  cursor: pointer;
}

.editModal {
  z-index: 1000;
}

.btns {
  padding: 3px;
  display: inline-block;
  text-align: center;
  align-content: center;
}

.btns button {
  display: inline-block;
  margin: 0;
  margin-left: 20px;
}

p {
  max-width: 250px;
  text-align: left;
  align-content: center;
}
</style>
