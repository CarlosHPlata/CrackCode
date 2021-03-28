// Imagine a robot sitting on the upper left corner of grid with R rows and C columnd
// The robot can only move in two directions, right and down, but certain cells are 'off limits'
// such that the robot cannot step on them. Design an algorith to find a path for the robot
// from the top left to the bottom right

type point = {row: number, col: number};

const getPath = (maze: boolean[][]) => {
    
    const points: point[] = [];

    if ( solveMaze(maze, points, 0, maze[0].length-1) ) {
	return points;
    }

    return null;

};

const solveMaze = (maze: boolean[][], points: point[], row: number, col: number) => {

    if (col < 0 || row > maze.length-1 || !maze[row][col]) {
	return false;
    }

    const isOrigin: boolean = (col === 0) && (row === maze.length-1);

    if (isOrigin || solveMaze(maze, points, row+1, col) || solveMaze(maze, points, row, col-1)) {
	points.push({row, col});
	return true;
    }

    return false;

};

const maze: boolean[][] = [
    [true,  false,  true],
    [false, false,  true],
    [true,  true,   true]
];

const path = getPath(maze);
if (path){
    path.forEach(point => {
	console.log(point.row, point.col);
    });
}
