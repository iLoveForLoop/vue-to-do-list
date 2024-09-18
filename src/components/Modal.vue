<script>
export default {
    name: 'Modal',
    props: ['currentTask'],
    data(){
        return{
            editedTask: this.currentTask,
            isBlank: false
            
        }
    },
    methods: {
        blankTask(){
            this.isBlank = true
            setTimeout(() => {
            this.isBlank = false
            }, 1500);

        },
        editData(){
            if(this.editedTask){
                this.isBlank = false
                this.$emit('edit-data', this.editedTask)
            }else{
                this.blankTask()
            }
        },
        cancelEdit(){
            this.isBlank = false
            this.editedTask = this.currentTask
            this.$emit('cancel-edit', false)
        }
    },
    watch: {
        currentTask(newVal){
            this.editedTask = newVal
        }
    }
}
</script>

<template>
<div class="backdrop">
    <div class="modal">
        <div class="text-area">
            <h2>{{editedTask}}</h2>
        </div>
        
        <input @keyup.enter="editData" type="text" placeholder="Edit Task" v-model="editedTask">
        <p v-show="isBlank">You can't leave this empty</p>
        <div class="btn-box">
            <button @click="cancelEdit">Cancel</button>
            <button @click="editData">Save</button>
        </div>
        
    </div>
</div>
</template>

<style scoped>
.backdrop{
    position: fixed;
    align-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);

}

.modal{
    text-align: center;
    margin: auto;
    height: 450px;
    width: 500px;
    background: rgb(227, 227, 225);
    box-shadow: 0px 0 5px grey, -0px 0 5px grey;
    border-radius: 10px;
    padding: 10px 20px

}

.text-area{
    min-height: 100px;
}

input{
  display: block;
  padding: 13px;
  border-radius: 10px;
  border: none;
  width: 50%;
  background: rgb(227, 227, 225);
  box-shadow: 0px 0 5px grey, -0px 0 5px grey;
  margin: auto;

}

button{
  margin: 35px auto;
  display: inline-block;
  padding: 10px 20px;
  background: rgb(25, 25, 25);
  border-radius: 15px;
  color: white;
  cursor: pointer;
}

.btn-box{
    max-width: 220px;
    display: flex;
    margin: auto;
}

p{
    position: fixed;
    color: red;
    margin: 5px 120px;
    padding: 0px;
    width: 170px;
    z-index: 1000;
}
</style>