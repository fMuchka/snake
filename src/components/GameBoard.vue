<script setup lang="ts">
    import { ref, computed } from "vue"
    import { generateGrid } from "@/functions/generateGrid"

    const GRID_SIZE = 25;
    const GRID = generateGrid(GRID_SIZE)
    
</script>

<template>
    <div id="gameBoard">
        <div
            v-for="(col, colIndex) in GRID"
            :key="`col_${colIndex}`"
            class="col"
        >
            <div
                v-for="(cell, rowIndex) in col"
                :key="`cell_${colIndex}_${rowIndex}`"
                class="cell"
                :style="{ backgroundColor: cell.color }"
            >
            </div>
        </div>
    </div>
</template>

<style scoped>

.cell{
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    height: 1em;
    width: 1em;
}

.col{
    display: grid;
    grid-auto-flow: row;
}

#gameBoard{
    display: grid;
    margin: auto;
    grid-auto-flow: column;
    background-color: grey;
    height: fit-content;
    width: fit-content;
}

</style>