import DIFFICULTY from '@/enums/DifficultyTypes'
import { defineStore } from 'pinia'


export const useGameStore = defineStore('GameStore', {
  state:() => ({
    difficulty: "",
    gridSize: 25,
    snake: { }
  }),

  getters: {
    getGridSize: (state) => { return state.gridSize },

    getSnake: (state) => { return state.snake }
  },

  actions: {
    setDifficulty(diff : DIFFICULTY) {
      this.difficulty = diff;
    },

    setSnake(snake: any) {
      this.snake = snake;
    }
  },

  
})