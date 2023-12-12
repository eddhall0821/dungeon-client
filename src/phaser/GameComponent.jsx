import React, { useEffect } from "react";
import Phaser, { Game } from "phaser";
import GameScene from "./GameScene";

function GameComponent() {
  useEffect(() => {
    const game = new Game({
      type: Phaser.AUTO,
      parent: "game-content",
      width: 500,
      height: 500,
      scene: [GameScene],
    });
  }, []);

  return <div id="game-content" />;
}

export default GameComponent;
