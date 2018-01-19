const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');
document.getElementById('pauseText').style.display = 'none';

context.scale(20, 20);

function arenaSweep() {
    let rowCount = 1;
    outer: for (let y = arena.length -1; y > 0; --y) {
        for (let x = 0; x < arena[y].length; ++x) {
            if (arena[y][x] === 0) {
                continue outer;
            }
        }

        const row = arena.splice(y, 1)[0].fill(0);
        arena.unshift(row);
        ++y;

        player.score += rowCount * 10;
        rowCount *= 2;
    }
}

function collide(arena, player) {
    const m = player.matrix;
    const o = player.pos;
    for (let y = 0; y < m.length; ++y) {
        for (let x = 0; x < m[y].length; ++x) {
            if (m[y][x] !== 0 &&
               (arena[y + o.y] &&
                arena[y + o.y][x + o.x]) !== 0) {
                return true;
            }
        }
    }
    return false;
}

function createMatrix(w, h) {
    const matrix = [];
    while (h--) {
        matrix.push(new Array(w).fill(0));
    }
    return matrix;
}

function createPiece(type)
{
    if (type === 'I') {
        return [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
        ];
    } else if (type === 'L') {
        return [
            [0, 2, 0],
            [0, 2, 0],
            [0, 2, 2],
        ];
    } else if (type === 'J') {
        return [
            [0, 3, 0],
            [0, 3, 0],
            [3, 3, 0],
        ];
    } else if (type === 'O') {
        return [
            [4, 4],
            [4, 4],
        ];
    } else if (type === 'Z') {
        return [
            [5, 5, 0],
            [0, 5, 5],
            [0, 0, 0],
        ];
    } else if (type === 'S') {
        return [
            [0, 6, 6],
            [6, 6, 0],
            [0, 0, 0],
        ];
    } else if (type === 'T') {
        return [
            [0, 7, 0],
            [7, 7, 7],
            [0, 0, 0],
        ];
    }
}

function drawMatrix(matrix, offset) {
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                context.fillStyle = colors[value];
                context.fillRect(x + offset.x,
                                 y + offset.y,
                                 1, 1);
            }
        });
    });
}

function draw() {
   context.fillStyle = '#000';
   context.fillRect(0, 0, canvas.width, canvas.height);

   drawMatrix(arena, {x: 0, y: 0});
   drawMatrix(player.matrix, player.pos);
}

function merge(arena, player) {
   player.matrix.forEach((row, y) => {
      row.forEach((value, x) => {
         if (value !== 0) {
            arena[y + player.pos.y][x + player.pos.x] = value;
         }
      });
   });
}

function rotate(matrix, dir) {
   for (let y = 0; y < matrix.length; ++y) {
      for (let x = 0; x < y; ++x) {
         [
            matrix[x][y],
            matrix[y][x],
         ] = [
            matrix[y][x],
            matrix[x][y],
         ];
      }
   }

   if (dir > 0) {
      matrix.forEach(row => row.reverse());
   } else {
      matrix.reverse();
   }
}

function playerDrop() {
   player.pos.y++;
   if (collide(arena, player)) {
      player.pos.y--;
      merge(arena, player);
      playerReset();
      arenaSweep();
      updateScore();
   }
   dropCounter = 0;
}

function playerMove(offset) {
   player.pos.x += offset;
   if (collide(arena, player)) {
      player.pos.x -= offset;
   }
}

function playerReset() {
   const pieces = 'TJLOSZI';
   player.matrix = createPiece(pieces[pieces.length * Math.random() | 0]);
   player.pos.y = 0;
   player.pos.x = (arena[0].length / 2 | 0) -
                   (player.matrix[0].length / 2 | 0);
   if (collide(arena, player)) {
      arena.forEach(row => row.fill(0));
      alert('You got a score of ' + player.score);
      player.score = 0;
      dropInterval = 1000;
      updateScore();
      start = false;
      pause = !pause;
      playFunc(start);
   }
}

function playerRotate(dir) {
   const pos = player.pos.x;
   let offset = 1;
   rotate(player.matrix, dir);
   while (collide(arena, player)) {
      player.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > player.matrix[0].length) {
         rotate(player.matrix, -dir);
         player.pos.x = pos;
         return;
      }
   }
}

var pause = true;
var start;

let dropCounter = 0;
var dropInterval = 1000;

let lastTime = 0;
function update(time = 0) {
   const deltaTime = time - lastTime;

   dropCounter += deltaTime;
   if ((dropCounter > dropInterval) && !pause) {
      playerDrop();
   }

   lastTime = time;

   draw();
   requestAnimationFrame(update);
}

function updateScore() {
   document.getElementById('score').innerText = player.score;
   if (player.score > 1000) {
      dropInterval = 100;
   } if (player.score > 500) {
      dropInterval = 150;
   } else if (player.score > 400) {
      dropInterval = 200;
   } else if (player.score > 300) {
      dropInterval = 400;
   } else if (player.score > 200) {
      dropInterval = 600;
   } else if (player.score > 100) {
      dropInterval = 800;
   }
}

document.addEventListener('keydown', event => {
   if (event.keyCode === 37 && !pause) {
      playerMove(-1);
   } else if (event.keyCode === 39 && !pause) {
      playerMove(1);
   } else if (event.keyCode === 40 && !pause) {
      playerDrop();
   } else if (event.keyCode === 83 && !pause) {
      playerRotate(-1);
   } else if (event.keyCode === 65 && !pause) {
      playerRotate(1);
   } else if (event.keyCode === 13 || event.keyCode === 32) {
      //call pause
      pause = !pause;
      start = true;
      pauseTextFunc(pause);
      playFunc(start);
   }
});

function pauseTextFunc(pause) {
   if (!pause) {
      document.getElementById('pauseText').style.display = 'none';
   } else {
      document.getElementById('pauseText').style.display = 'block';
   }

}

function playFunc(start) {
   if (start) {
      document.getElementById('play').style.display = 'none';
   } else {
      document.getElementById('play').style.display = 'block';
   }
}


const colors = [
   null,
   '#FF0D72',
   '#0DC2FF',
   '#0DFF72',
   '#F538FF',
   '#FF8E0D',
   '#FFE138',
   '#3877FF',
];

const arena = createMatrix(12, 20);

const player = {
   pos: {x: 0, y: 0},
   matrix: null,
   score: 0,
};

playerReset();
updateScore();
update();
