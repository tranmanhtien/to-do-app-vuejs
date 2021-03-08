<template>
    <div>
        {{ remaning}} việc chưa hoàn thành
    </div>
</template>

<script>
    export default {
        props: {
            remaning: {
                type: Number,
                required: true
            }
        }
    }
</script>

<style>

</style>