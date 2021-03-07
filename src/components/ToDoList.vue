<template>
    <div class="to-do-list">
        <h1>Danh sách các việc cần làm</h1>
        <input type="text" class="todo-input" placeholder="Việc cần làm" v-model="newToDo" @keyup.enter="addToDo">
        <ToDoItem 
            v-for="(todo,index) in toDos" 
            :key="todo.id" :todo="todo" :index="index" :checkAll="!anyRemaing"
            @removeToDo="removeToDo"
            @finishedEdit="finishedEdit"
        />
        <div class="extra-container">
            <div>
                <label>
                    <input 
                        type="checkbox" 
                        :checked="!anyRemaing"
                        @change="checkAllToDo"
                    >check all
                </label>
            </div>
            <div>{{ remaning}} items left</div>
            
        </div>
    </div>
</template>

<script>
import ToDoItem from "./ToDoItem";
    export default {
        data() {
            return {
                newToDo: '',
                idForToDo: 3,
                beforeEditCache: '',
                toDos:[
                    {
                        id: 1,
                        tittle: 'Quét nhà',
                        completed: false,
                        editting: false
                    },
                    {
                        id: 2,
                        tittle: 'Rửa bát',
                        completed: true,
                        editting: false
                    },
                    {
                        id: 3,
                        tittle: 'Nấu cơm',
                        completed: false,
                        editting: false
                    }
                ]
            }
        },
        components: {
            ToDoItem
        },
        computed: {
            remaning() {
                return this.toDos.filter(todo => !todo.completed).length ;
            },
            anyRemaing(){
                return this.remaning != 0;   
            }
        },
        methods: {
            addToDo: function() {
                if(this.newToDo.trim().length == 0) {
                    return
                }
                this.toDos.push({
                    id: this.idForToDo,
                    tittle: this.newToDo,
                    completed: false
                })
                this.newToDo = '';
                this.idForToDo++;
            },
            checkAllToDo: function(){
                this.toDos.forEach((todo) => {
                    todo.completed = event.target.checked;
                })
            },
            finishedEdit: function(data) {
                this.toDos.splice(data.index,1,data.todo)
            },
            removeToDo: function(index) {
                this.toDos.splice(index,1);
            }
        }
       
    }
</script>

<style>
.todo-input{
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
}
.todo-item{
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    padding: 10px;
}
.todo-item:hover{
    background-color: lightcoral;
    color: lightcyan;
}
.remove-item{
    cursor: pointer;
    margin-left: 14px;
}
.todo-item-left{
    display: flex;
    align-items: center;
}
.todo-item-edit{
    width: 100%;
    font-size: 20px;
    padding: 10px;
    margin-left: 12px;
}
.completed{
    text-decoration: line-through;
    color: gray;
}
.extra-container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 17px;
    border-top: 1px solid black;
    padding: 10px;
}


</style>