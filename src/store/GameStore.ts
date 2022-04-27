import DIFFICULTY from '@/enums/difficulty'
import { defineStore } from 'pinia'


export const useGameStore = defineStore('GameStore', {
  state() {
    return {
      difficulty: ""
    }
  },

  actions: {
    setDifficulty(diff : DIFFICULTY) {
      this.difficulty = diff;
    }
  }
})