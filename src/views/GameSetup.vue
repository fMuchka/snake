<script setup lang="ts">
    import { ref, onMounted } from "vue"
    import DIFFICULTY from '@/enums/DifficultyTypes'
    import router from "@/router"
    import { useGameStore } from "@/store/GameStore"


    const difficultyOptions = ref<Record<string, unknown>>({})
    const store = useGameStore();

    onMounted(() => {
        difficultyOptions.value = DIFFICULTY
    })

    function play() :void {
        router.push("/playGame");
    }

    function updateDiff(e : any) {  
        store.$patch(state => {
            state.difficulty = e.target.value
        })
    }


</script>

<template>
    <h1>
        Game Setup
    </h1>


    <label for="dff_selector">Choose your difficulty:</label>
    <select 
        name="diff_selector" 
        id="diff-select"
        @change="(e = event) => updateDiff(e)"
    >
        <option 
            v-for="(item, key) in difficultyOptions"
            :key="`diff_selector_opt_${key}`"
            :value="key"
        >
        {{ item }}
        </option>
    </select>

    <button @click="play()">Play</button>
</template>



<style scoped>

</style>