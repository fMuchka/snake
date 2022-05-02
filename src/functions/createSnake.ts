import MoveKeyDirection from "@/enums/MoveKeyDirection";
import SnakeBodyPartType from "@/enums/SnakeBodyPartType";
import { useGameStore } from "@/store/GameStore"

const store = useGameStore();


interface SnakeBodyPart{
    coordinates: { x: number, y: number }
    type: SnakeBodyPartType
}


class Snake {
    head: SnakeBodyPart
    tail: SnakeBodyPart[]

    constructor() {
        this.head = this.createHead(); 
        this.tail = []
    }

    createHead() {
        return {
            coordinates: {
                x: Math.floor(Math.random() * store.getGridSize),
                y: Math.floor(Math.random() * store.getGridSize)
            },
            type: SnakeBodyPartType.head
        }
    }

    move(direction: MoveKeyDirection) {      
        switch (direction) {
            case MoveKeyDirection.left:
                this.head.coordinates.x--; 
                break;

            case MoveKeyDirection.right:
                this.head.coordinates.x++; 
                break;
            
            case MoveKeyDirection.up:
                this.head.coordinates.y--; 
                break;
            
            case MoveKeyDirection.down:
                this.head.coordinates.y++; 
                break;
        
            default:
                break;
        }        
    }
}


export function createSnake() {
    return new Snake();
}