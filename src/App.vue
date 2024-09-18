<script>
import Modal from './components/Modal.vue';

export default {
    name: 'App',
    components: {Modal},
    data(){
      return{
        taskInput: '',
        tasks: [],
        isEditing: false,
        editedTask: '',
        currentEditIndex: null

        
      }
    },
    methods: {
      addTask(){
        if(this.taskInput.trim() !== ''){
          const newTask = {
          name: this.taskInput,
          isChecked: false
        }
        this.tasks.push(newTask)
        this.taskInput = ''
        }
        

      },
      deleteTask(index){
        this.tasks.splice(index, 1)
      },
      editTask(index){
        this.isEditing = !this.isEditing
        this.currentEditIndex = index
        this.editedTask = this.tasks[index].name
      }, 
      handleEdit(data){
        if(this.currentEditIndex !== null){
          this.tasks[this.currentEditIndex].name = data
        }
        this.isEditing = false
        this.currentEditIndex = null
      },
      cancelEdit(data){
        this.isEditing = data
      }
    }
}
</script>

<template>
  <h1>To Do List</h1> 
  <input type="text"  @keyup.enter="addTask" placeholder="Enter Task" v-model="taskInput">
  <button @click="addTask">Add Task</button>
  <ul>
    <li v-for="(task, index) in tasks" :key="index">
      <p>{{ task.name }}</p>
      <div class="btns">
        <button @click="editTask(index)">Edit</button>
        <button @click="deleteTask(index)">Delete</button>
      </div>
    </li>
  </ul>

  <Modal @edit-data="handleEdit" @cancel-edit="cancelEdit" :currentTask="editedTask" class="editModal" v-show="isEditing" />
</template>

<style scoped>
input{
  display: inline-block;
  padding: 13px;
  border-radius: 10px;
  border: none;
  width: 50%;
  background: rgb(227, 227, 225);
  box-shadow: 0px 0 5px grey, -0px 0 5px grey;

}

ul{
  padding: 0;
  margin: 0;
  list-style: none;
}

li{
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

button{
  margin: 30px auto;
  margin-left: 15px;
  display: inline-block;
  padding: 10px 20px;
  background: rgb(25, 25, 25);
  border-radius: 10px;
  color: white;
  cursor: pointer;
}

.editModal{
  z-index: 1000;
}

.btns{
  padding: 3px;
  display: inline-block;
  text-align: center;
  align-content: center;
  
}

.btns button{
  display: inline-block;
  margin: 0;
  margin-left: 20px;
  
  
  
}

p{
  max-width: 250px;
  text-align: left;
  align-content: center;
  
}

</style>