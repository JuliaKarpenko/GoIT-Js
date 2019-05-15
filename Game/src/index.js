const fieldHeight = 400;
const fieldWidth = 500;
const numberOfRols = 3;
const tilesInRow = 8;

class Tile {
    constructor(x,y) {
        this.x = x,
        this.y = y,
        this.isAlive = true
    }

    draw(ctx) {
        if (!this.isAlive) return;
        ctx.fillStyle = Tile.color;
        ctx.fillRect(
            this.x,
            this.y,
            Tile.width,
            Tile.height
        );
    }
}
Tile.color = 'rgba(0, 0, 200, 0.5)';
Tile.width = fieldHeight / tilesInRow;
Tile.height = 25;

const generateTiles = () => {
    const tiles = []
    for (let i = 0; i < numberOfRols; i++) {
        tiles[i] = [];
        for (let j = 0; j < numberOfRols; j++) {
            const x = (2 * j + 1) + j * Tile.width;
            const y = (2 * i + 1) + i * Tile.height;
            tiles[i][j] = new Tile[x, y];
        }
        return tiles
    }
}

window.onload = () => {
    const canvas = document.getElementById('arkanoid');
    const ctx = canvas.getContent('2d');
}