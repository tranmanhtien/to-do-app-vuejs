<template>
    <div>
        <label>
            <input 
                type="checkbox" 
                :checked="!anyRemaing"
                @change="allChecked"
            >check all
        </label>
    </div>
</template>

<script>
    export default {
        props: {
            anyRemaing: {
                type: Boolean,
                required: true
            }
        },
        methods: {
            allChecked: function() {
                eventBus.$emit('checkAllChanged',this.anyRemaining)
            }
        }
    }
</script>

<style>

</style>