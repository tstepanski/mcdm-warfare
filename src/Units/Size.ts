import {ICostMultiplicative} from "./ICostMultiplicative";
import {DiceRoll} from "./DiceRoll";

export class Size implements ICostMultiplicative {
	public constructor(public readonly Dice: DiceRoll,
					   public readonly CostMultiplier: number) {
	}
}
