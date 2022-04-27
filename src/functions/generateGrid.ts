
interface GridCell {
    color: string
}


function createCell() {
    return {
        color: "transparent"
    }
}



export function generateGrid(size: number) {
    const grid: GridCell[][] = [];
    
    for (let i = 0; i < size; i++) {
        grid[i] = [];

        for (let j = 0; j < size; j++) {
            const cell : GridCell = createCell();

            grid[i].push(cell);
        }    
    }

    return grid; 
}