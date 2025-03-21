interface Position {
  x: number;
  y: number;
}

enum BodyPosition {
  DOWN = 0,
  UP = 1,
  LEFT = 2,
  RIGHT = 3,
}

export class Vampire {
  public sprite: HTMLImageElement;

  constructor(
    public readonly SPRITE_WIDTH = 64,
    public readonly SPRITE_HEIGHT = 64,
    public readonly TOTAL_FRAMES = 6
  ) {
    this.sprite = new Image();
    this.sprite.src = "/Vampires1_Walk_full.png";
  }

  getCurrentSpriteVariant(nextPosition: Position, currentPosition: Position) {
    switch (true) {
      // Go right
      case nextPosition.x > currentPosition.x:
        return BodyPosition.RIGHT;
      // Go left
      case nextPosition.x < currentPosition.x:
        return BodyPosition.LEFT;
      // Go up
      case nextPosition.y < currentPosition.y:
        return BodyPosition.UP;
      // Go down
      case nextPosition.y > currentPosition.y:
        return BodyPosition.DOWN;
      default:
        throw new Error("Invalid body position");
    }
  }
}
