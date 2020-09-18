export class DiceRoll {
	public constructor(public readonly Count: number,
					   public readonly Faces: number,
					   public readonly Modifier: number = 0) {
	}
}
