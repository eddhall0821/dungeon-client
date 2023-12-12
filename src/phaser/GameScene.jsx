import { RangerSprite } from "./RangerSprite";
import ranger from "../assets/games/character/ranger.png";
// Phaser scene
class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }
  preload() {
    this.load.spritesheet("ranger", ranger, {
      frameWidth: 32,
      frameHeight: 32,
    });
  }
  create() {
    this.anims.create({
      key: "direction",
      frames: this.anims.generateFrameNumbers("ranger", {
        frames: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
      }),
      frameRate: 10,
      repeat: -1,
    });

    // for (let i = 0; i < 100; i++) {
    new RangerSprite(this, 100, 100);
    // }
  }

  // create() {
  //   const rangerSprite = this.physics.add.sprite(0, 0, "ranger");
  //   const gridEngineConfig = {
  //     characters: [
  //       {
  //         id: "ranger",
  //         sprite: rangerSprite,
  //         startPosition: { x: 1, y: 1 },
  //       },
  //     ],
  //   };
  // }

  // update() {
  //   const cursors = this.input.keyboard.createCursorKeys();

  //   if (cursors.left.isDown) {
  //     this.gridEngine.move("hero", "left");
  //   } else if (cursors.right.isDown) {
  //     this.gridEngine.move("hero", "right");
  //   } else if (cursors.up.isDown) {
  //     this.gridEngine.move("hero", "up");
  //   } else if (cursors.down.isDown) {
  //     this.gridEngine.move("hero", "down");
  //   }
  // }
}

export default GameScene;
