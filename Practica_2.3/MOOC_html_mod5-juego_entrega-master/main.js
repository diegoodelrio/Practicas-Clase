const OPPONENT_HEIGHT = 5,
    OPPONENT_PICTURE = "assets/malo1.png",
    OPPONENT_PICTURE_DEAD = "assets/explosion.png",
    OPPONENT_SPEED = 5,
    BOSS_PICTURE_DEAD = "assets/explosion.png",
    BOSS_PICTURE = "assets/pngegg.png",
    BOSS_SPEED = 12,
    OPPONENT_WIDTH = 5,
    GAME_OVER_PICTURE = "assets/game_over.png",
    WIN_PICTURE = "assets/you_win.png",
    KEY_LEFT = "LEFT",
    KEY_RIGHT = "RIGHT",
    KEY_SHOOT = "SHOOT",
    MIN_TOUCHMOVE = 20,
    PLAYER_HEIGHT = 5,
    PLAYER_PICTURE = "assets/Bueno1.png",
    PLAYER_PICTURE_DEAD = "assets/bueno_muerto.png",
    PLAYER_SPEED = 20,
    PLAYER_WIDTH = 5,
    SHOT_HEIGHT = 1.5,
    SHOT_SPEED = 15,
    SHOT_PICTURE_PLAYER = "assets/laserbeam.png",
    SHOT_PICTURE_OPPONENT = "assets/fireball.png",
    SHOT_WIDTH = 1.5,
    PLAYER_LIVES = 3;

function getRandomNumber (range) {
    return Math.floor(Math.random() * range);
}

function collision (div1, div2) {
    const a = div1.getBoundingClientRect(),
        b = div2.getBoundingClientRect();
    return !(a.bottom < b.top || a.top > b.bottom || a.right < b.left || a.left > b.right);

}
var game;
document.addEventListener("DOMContentLoaded", () => {
        game = new Game();
        game.start();
    }
);