/**
 * Monstruo al que tenemos que destruir
 */
class Boss extends Opponent {
    
    constructor (game) {
        const bossImageDead = BOSS_PICTURE_DEAD,
            bossImage = BOSS_PICTURE,
            bossSpeed = BOSS_SPEED;

        super(game, bossImageDead, bossImage, bossSpeed);

        this.myImageDead = bossImageDead;
        this.image.src = bossImage;
        this.speed = bossSpeed;

    }

    /**
     * Mata al jefe
     */
    collide(){
        super.collide();
        this.game.endGame();
    }
}