<template>
    <div class="todo-item">
        <div class="todo-item-left">
            <input type="checkbox" v-model="completed" @change="doneEdit">
            <div v-if="!editting" @dblclick="editToDo" class="todo-item-label" :class="{ completed: completed}"> {{tittle}}</div>
            <input 
                v-else type="text" 
                class="todo-item-edit" 
                v-model="tittle"
                @blur="doneEdit" 
                @keyup.enter="doneEdit"
                @keyup.esc="cancelEdit"
                v-focus
            />
        </div>
        <div class="remove-item" @click="removeToDo(index)" >
            &times;
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            todo: {
                type: Object,
                required: true
            },
            index: {
                type: Number,
                required: true
            },
            checkAll: {
                type: Boolean,
                required: true
            }
        },
        data() {
            return {
                id: this.todo.id,
                tittle: this.todo.tittle,
                completed: this.todo.completed,
                editting: this.todo.editting,
                beforeEditCache: '',
            }
        },
        watch: {
            checkAll() {
                this.completed = this.checkAll ? true : this.todo.completed;
            }
        },
        directives: {
            focus: {
                inserted: function (el) {
                el.focus()
                }
            }
        },
        methods: {
            removeToDo: function(index) {
                eventBus.$emit('removeToDo',index);
            },
            editToDo: function() {
                this.beforeEditCache = this.tittle;
                this.editting = true;
            },
            doneEdit: function(){
                if(this.tittle.trim() == '') {
                    this.tittle = this.beforeEditCache;
                }
                this.editting = false;
                eventBus.$emit('finishedEdit',{
                    index: this.index,
                    todo: {
                        id : this.id,
                        tittle: this.tittle,
                        completed: this.completed,
                        editting: this.editting
                    }
                })
            },
            cancelEdit: function(){
                this.tittle = this.beforeEditCache;
                this.editting = false;
            },
        }
    }
</script>

<style >

</style>