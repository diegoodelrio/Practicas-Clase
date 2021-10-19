/**
 * Monstruo supremo al que tenemos que destruir
 */
class Boss extends Opponent {
    /**
     * @param game {Game} La instancia del juego al que pertenece el jefe
     */
    constructor (game) {
        const bossImageDead = BOSS_PICTURE_DEAD,
        bossImage = BOSS_PICTURE,
        bossSpeed = BOSS_SPEED;

        super(game, bossImageDead, bossImage, bossSpeed);

    }

    /**
     * Mata al jefe
     */
    collide(){
        if (!this.dead) {
            
            this.game.score += 5;
            document.getElementById('scoreli').innerHTML = `Score: ${game.score}`;
            
            setTimeout(() => {
                this.game.removeOpponent();
            }, 2000);
            super.collide();
        }
    }
}