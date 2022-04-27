<script setup lang="ts">

import router from "@/router"

    function startGame() :void {
        router.push("/gameSetup");
    }

</script>


<template>
    <div>
        <h1>Welcome to Snake_FM</h1>
        <h3>JavaScript version</h3>
    </div>

    <button @click="startGame()">Start</button>
</template>


<style scoped>

</style>