export class RangerSprite extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "ranger");
    this.play("direction");

    scene.add.existing(this);

    this.setScale(1.5);
  }
}
