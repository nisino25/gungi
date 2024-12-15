export const GUNGI_PAWNS = [
  {
    kanji: "帥", count: 1, higherLevelOnly: false,
    moves: {
      tier1: [
        { x: 1, y: 0 },
        { x: -1, y: 0 },
        { x: 0, y: 1 },
        { x: 0, y: -1 },
        { x: 1, y: 1 },
        { x: -1, y: -1 },
        { x: -1, y: 1 },
        { x: 1, y: -1 },
      ],
      tier2: [],
      tier3: [],
    },
  },
  {
    kanji: "大", count: 1, higherLevelOnly: false,
    moves: {
      tier1: [{ x: 1, y: 1 }],
      tier2: [
        { x: 2, y: 0 },
        { x: -2, y: 0 },
      ],
      tier3: [
        { x: 2, y: 2 },
        { x: -2, y: -2 },
      ],
    },
  },
  {
    kanji: "中", count: 1, higherLevelOnly: false,
    moves: {
      tier1: [
        { x: 1, y: 0 },
        { x: -1, y: 0 },
      ],
      tier2: [
        { x: 1, y: 1 },
        { x: -1, y: -1 },
      ],
      tier3: [{ x: 0, y: 2 }],
    },
  },

  
  {
    kanji: "兵", count: 4, higherLevelOnly: false,
    moves: {
      tier1: [{ x: 0, y: 1 }],
      tier2: [],
      tier3: [],
    },
  },

  {
    kanji: "槍", count: 3, higherLevelOnly: false,
    moves: {
      tier1: [{ x: 0, y: 1 }],
      tier2: [],
      tier3: [],
    },
  },

  {
    kanji: "侍", count: 2, higherLevelOnly: false,
    moves: {
      tier1: [
        { x: 0, y: 1 },
        { x: 0, y: -1 },
      ],
      tier2: [
        { x: 1, y: 1 },
        { x: -1, y: -1 },
      ],
      tier3: [
        { x: 2, y: 0 },
        { x: -2, y: 0 },
      ],
    },
  },
  {
    kanji: "忍", count: 2, higherLevelOnly: false,
    moves: {
      tier1: [{ x: 0, y: 1 }],
      tier2: [
        { x: 1, y: 0 },
        { x: -1, y: 0 },
      ],
      tier3: [
        { x: 1, y: 1 },
        { x: -1, y: -1 },
      ],
    },
  },
  {
    kanji: "馬", count: 2, higherLevelOnly: false,
    moves: {
      tier1: [
        { x: 1, y: 2 },
        { x: -1, y: -2 },
      ],
      tier2: [
        { x: 2, y: 1 },
        { x: -2, y: -1 },
      ],
      tier3: [
        { x: 2, y: 2 },
        { x: -2, y: -2 },
      ],
    },
  },
  {
    kanji: "弓", count: 2, higherLevelOnly: false,
    moves: {
      tier1: [
        { x: 0, y: 2 },
        { x: 0, y: -2 },
      ],
      tier2: [
        { x: 1, y: 0 },
        { x: -1, y: 0 },
      ],
      tier3: [
        { x: 1, y: 1 },
        { x: -1, y: -1 },
      ],
    },
  },
  {
    kanji: "砦", count: 2, higherLevelOnly: false,
    moves: {
      tier1: [
        { x: 1, y: 0 },
        { x: -1, y: 0 },
        { x: 0, y: 1 },
        { x: 0, y: -1 },
      ],
      tier2: [],
      tier3: [],
    },
  },
  {
    kanji: "小", count: 2, higherLevelOnly: false,
    moves: {
      tier1: [
        { x: 1, y: 0 },
        { x: -1, y: 0 },
        { x: 0, y: 1 },
      ],
      tier2: [
        { x: 1, y: 1 },
        { x: -1, y: -1 },
      ],
      tier3: [{ x: 0, y: 2 }],
    },
  },

  
  {
    kanji: "謀", count: 1, higherLevelOnly: true,
     moves: {
      tier1: [
        { x: 1, y: 0 },
        { x: -1, y: 0 },
      ],
      tier2: [],
      tier3: [],
    },
  },
  {
    kanji: "砲", count: 1, higherLevelOnly: true,
    moves: {
      tier1: [
        { x: 0, y: 1 },
        { x: 0, y: -1 },
        { x: 1, y: 0 },
        { x: -1, y: 0 },
      ],
      tier2: [
        { x: 2, y: 0 },
        { x: -2, y: 0 },
      ],
      tier3: [
        { x: 2, y: 2 },
        { x: -2, y: -2 },
      ],
    },
  },
  {
    kanji: "筒", count: 1, higherLevelOnly: true,
    moves: {
      tier1: [{ x: 0, y: 2 }],
      tier2: [{ x: 0, y: -2 }],
      tier3: [
        { x: 2, y: 0 },
        { x: -2, y: 0 },
      ],
    },
  },
];

export const INITIAL_SETUP = [
  // White Team (Top Rows)
  { kanji: "大", color: "black", currentLocation: { row: 0, col: 3 } },
  { kanji: "帥", color: "black", currentLocation: { row: 0, col: 4 } },
  { kanji: "中", color: "black", currentLocation: { row: 0, col: 5 } },

  { kanji: "馬", color: "black", currentLocation: { row: 1, col: 1 } },
  { kanji: "弓", color: "black", currentLocation: { row: 1, col: 2 } },
  { kanji: "槍", color: "black", currentLocation: { row: 1, col: 4 } },
  { kanji: "弓", color: "black", currentLocation: { row: 1, col: 6 } },
  { kanji: "忍", color: "black", currentLocation: { row: 1, col: 7 } },

  { kanji: "兵", color: "black", currentLocation: { row: 2, col: 0 } },
  { kanji: "砦", color: "black", currentLocation: { row: 2, col: 2 } },
  { kanji: "侍", color: "black", currentLocation: { row: 2, col: 3 } },
  { kanji: "兵", color: "black", currentLocation: { row: 2, col: 4 } },
  { kanji: "侍", color: "black", currentLocation: { row: 2, col: 5 } },
  { kanji: "砦", color: "black", currentLocation: { row: 2, col: 6 } },
  { kanji: "兵", color: "black", currentLocation: { row: 2, col: 8} },

  // Black Team (Bottom Rows)

  { kanji: "大", color: "white", currentLocation: { row: 8, col: 3 } },
  { kanji: "帥", color: "white", currentLocation: { row: 8, col: 4 } },
  { kanji: "中", color: "white", currentLocation: { row: 8, col: 5 } },

  { kanji: "忍", color: "white", currentLocation: { row: 7, col: 1 } },
  { kanji: "弓", color: "white", currentLocation: { row: 7, col: 2 } },
  { kanji: "槍", color: "white", currentLocation: { row: 7, col: 4 } },
  { kanji: "弓", color: "white", currentLocation: { row: 7, col: 6 } },
  { kanji: "馬", color: "white", currentLocation: { row: 7, col: 7 } },

  { kanji: "兵", color: "white", currentLocation: { row: 5, col: 0 } },
  { kanji: "砦", color: "white", currentLocation: { row: 5, col: 2 } },
  { kanji: "侍", color: "white", currentLocation: { row: 5, col: 3 } },
  { kanji: "兵", color: "white", currentLocation: { row: 5, col: 4 } },
  { kanji: "侍", color: "white", currentLocation: { row: 5, col: 5 } },
  { kanji: "砦", color: "white", currentLocation: { row: 5, col: 6 } },
  { kanji: "兵", color: "white", currentLocation: { row: 5, col: 8} },
];


