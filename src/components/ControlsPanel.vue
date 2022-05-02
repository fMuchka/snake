<script setup lang="ts">

    import { reactive, onMounted, defineEmits } from "vue"
    import MoveKeyDirection from "@/enums/MoveKeyDirection"

    interface ControlKeyType{
        icon: string,
        color: string | null,
        direction: string
    }

    const controlKeys = reactive(
        new Map<string, ControlKeyType> ([
            ["ArrowLeft", { icon: "arrow-left-circle", color: null, direction: MoveKeyDirection.left }],
            ["ArrowRight", { icon: "arrow-right-circle", color: null, direction: MoveKeyDirection.right }],
            ["ArrowUp", { icon: "arrow-up-circle", color: null, direction: MoveKeyDirection.up }],
            ["ArrowDown", { icon: "arrow-down-circle", color: null, direction: MoveKeyDirection.down }],
        ])
    )

    const emit = defineEmits<{ 
        ( e: "move", direction: string): void
         }>()

    let lastPressedKeys : string[] = [];

    onMounted(() => {
        window.addEventListener("keydown", (event) => {    
            if (event.key) {
                const keyPressed : string = event.key;
                const hasControlKey = controlKeys.has(keyPressed);

                // check if the key pressed is part of controls
                if (hasControlKey === true) {
                    event.preventDefault;

                    const controlKey = controlKeys.get(keyPressed)!;
                    
                    // highlight key pressed
                    controlKey.color = "orange";
    
                    emit("move", controlKey.direction);

                    lastPressedKeys.push(keyPressed);
                }
            }          
        }) 

        window.addEventListener("keyup", (event) => {
            
            if (event.key) {
                const keyUp : string = event.key;

                if (lastPressedKeys.length > 0) {
                    
                    // clear highlight
                    const keyIndex = lastPressedKeys.findIndex(e => e === keyUp);
                    controlKeys.get(keyUp)!.color= null;
                    lastPressedKeys.splice(keyIndex, 1);
                }
            }
            
        })
    })
    
</script>


<template>
    <div>
       <mdicon
        v-for="[key, controlKey] in controlKeys "
        :key="key"
        :name="controlKey.icon"
        :style="`color: ${controlKey.color === null ? 'unset' : controlKey.color }`"
        />
    </div>
</template>

<style scoped>

</style>