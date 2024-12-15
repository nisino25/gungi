<template>
  <div class="game-area">
    <div class="player-pawns-area">
      <h3 style="line-height: 1.5;">Black Pawns<strong v-if="currentPlayer === 'black'" style="line-height: 1">のターンです。</strong></h3>
      <div class="player-pawns black">
          <template v-for="(pawn, index) in playerPawns.black" :key="index">
            <Pawn :pawn="pawn" />
          </template>
      </div>
    </div>

    <div class="board">
      <div v-for="(row, rowIndex) in board" :key="rowIndex" class="row">
        <div
          v-for="(tile, colIndex) in row"
          :key="colIndex"
          class="tile"
          :class="{ 
            'white': tile?.color === 'white', 
            'black': tile?.color === 'black',
            'highlight': isTileHighlighted(rowIndex, colIndex),
            'blinking': tile?.id === selectingId 
          }"
          @click="handleTileClick(rowIndex, colIndex, tile)"
        >
          <span v-if="tile">{{ tile?.kanji }}</span>
        </div>
      </div>
    </div>

    <div class="player-pawns-area">
      <h3  style="line-height: 1.5;">White Pawns<strong v-if="currentPlayer === 'white'">のターンです。</strong></h3>
      <div class="player-pawns white">
          <template v-for="(pawn, index) in playerPawns.white" :key="index">
            <Pawn :pawn="pawn" />
          </template>
      </div>
    </div>
  </div>
</template>

<script>
import { INITIAL_SETUP, GUNGI_PAWNS } from './const/pawns';
import Pawn from './components/GamePawn.vue';

export default {
  name: "App",
  components: {
    Pawn,
  },
  data() {
    return {
      board: null, // The 9x9 game board
      currentPlayer: "black", // Current player's turn
      playerPawns: {
        black: [],
        white: [],
      },
      GUNGI_PAWNS,
      INITIAL_SETUP,
      selectingId: null,
      selectedTile: null, // Stores the currently selected tile or pawn
      possibleMoves: [], // Highlighted valid moves
    };
  },
  methods: {
    createEmptyBoard() {
      return Array.from({ length: 9 }, () => Array(9).fill(null));
    },
    initializePawnPools() {
      let idCount = 0;
      const generatePlayerPawns = (color) =>
        GUNGI_PAWNS.flatMap((pawn) =>
          pawn.higherLevelOnly
            ? []
            : Array.from({ length: pawn.count }, () => ({
                ...pawn,
                id: idCount++,
                color,
                state: "available",
              }))
        );

      this.playerPawns.black = generatePlayerPawns("black");
      this.playerPawns.white = generatePlayerPawns("white");
    },
    initializeBoardSetup() {
      this.board = this.createEmptyBoard();
      INITIAL_SETUP.forEach((setupPawn) => {
        const { row, col } = setupPawn.currentLocation;
        const color = setupPawn.color;

        const playerPawns = color === "black" ? this.playerPawns.black : this.playerPawns.white;
        const pawn = playerPawns.find((p) => p.kanji === setupPawn.kanji && p.state === "available");

        if (pawn) {
          pawn.currentLocation = { row, col };
          pawn.state = "active";
          this.board[row][col] = { ...pawn, id: pawn.id };
        }
      });
    },
    handleTileClick(row, col, tile) {
      // console.log('hello');
      if (tile && tile.color === this.currentPlayer) {
        // Select the pawn and calculate its possible moves
        this.selectedTile = tile;
        this.selectingId = tile.id;
        this.calculatePossibleMoves(tile);
      } else if (this.selectedTile && this.isTileHighlighted(row, col)) {
        // Move the selected pawn to the new tile
        this.placeTile(row, col);
      } else {
        // Clear selection if clicked elsewhere
        this.clearSelection();
      }
    },
    calculatePossibleMoves(tile) {
  this.possibleMoves = [];
  const { currentLocation, moves, color } = tile;
  const { row, col } = currentLocation;

  // Adjust movement direction for white pawns
  const directionMultiplier = color === "white" ? -1 : 1;

  moves.tier1.forEach(({ x, y }) => {
    const newRow = row + y * directionMultiplier;
    const newCol = col + x * directionMultiplier;

    if (newRow >= 0 && newRow < 9 && newCol >= 0 && newCol < 9) {
      const targetTile = this.board[newRow][newCol];
      if (!targetTile || targetTile.color !== this.currentPlayer) {
        this.possibleMoves.push({ row: newRow, col: newCol });
      }
    }
  });
},

    isTileHighlighted(row, col) {
      return this.possibleMoves.some((move) => move.row === row && move.col === col);
    },
    placeTile(row, col) {
      const { row: oldRow, col: oldCol } = this.selectedTile.currentLocation;

      // Move the selected pawn to the new location
      this.board[oldRow][oldCol] = null;
      this.selectedTile.currentLocation = { row, col };
      this.board[row][col] = { ...this.selectedTile };

      // Clear selection and end turn
      this.clearSelection();
      this.switchTurn();
    },
    clearSelection() {
      this.selectingId = null;
      this.selectedTile = null;
      this.possibleMoves = [];
    },
    switchTurn() {
      this.currentPlayer = this.currentPlayer === "black" ? "white" : "black";
    },
  },
  mounted() {
    console.clear()
    this.board = this.createEmptyBoard();
    this.initializePawnPools();
    this.initializeBoardSetup();
  },
};
</script>

<style>
  .highlight {
    background-color: rgba(0, 255, 0, 0.5) !important;
  }
  /* General Styles */
  .game-area {
    display: grid;
    height: 75vh;
    align-content: space-between;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .player-pawns-area {
    width: 100%;
    text-align: center;
    /* background-color: red; */
    margin: auto;
    /* display: flex; */
    /* justify-content: space-around; */
    margin-bottom: 20px;
  }
  
  .player-pawns {
    display: grid;
    grid-template-columns: repeat(10,1fr);
    justify-content: space-between;
    /* grid-template-columns: repeat(); */
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  
  .player-pawns.black {
    color: black;
  }
  
  .player-pawns.white {
    color: white;
  }
  
  .pawn {
    width: 40px;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 50%;
    background-color: lightgray;
  }
  
  .pawn.taken {
    background-color: darkred;
    color: white;
  }
  
  .setup-button {
    margin: 20px auto;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
  }
  
  .board {
      width: 600px;
      height: 600px;
      margin: 20px auto;
      border: 2px solid #333;
      background: #e0c9a6;
  }

  .board .row {
      display: flex;
      height: calc(100% / 9);
  }

  .board .row .tile {
      width: calc(100% / 9);
      height: 100%;
      border: 1px solid #333;
      position: relative;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #e0c9a6;
  }

  /* Piece Styles */
  .board .row .tile span {
      font-size: 2em;
      position: absolute;
      width: 80%;
      height: 80%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
  }

  .board .row .tile.white span {
      background: #fff;
      border: 2px solid #333;
      color: #000;
  }

  .board .row .tile.black span {
      background: #333;
      border: 2px solid #000;
      color: #fff;
  }

  /* Hover effect */
  .board .row .tile:hover {
      background: rgba(255, 255, 0, 0.2);
  }

  /* Optional: Add board coordinates */
  .board .row .tile::before {
      position: absolute;
      top: 2px;
      left: 2px;
      font-size: 0.8em;
      color: #666;
      content: attr(data-coords);
  }

  .blinking {
    animation: blink-animation 1s infinite;
  }

  @keyframes blink-animation {
    50% {
      opacity: 0.5;
    }
  }

</style>