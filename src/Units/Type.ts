import {IAttributed} from "./IAttributed";
import {INamed} from "./INamed";
import {ICostMultiplicative} from "./ICostMultiplicative";

export class Type implements INamed, IAttributed, ICostMultiplicative {
	public constructor(public readonly Name: string,
					   public readonly Attack: number,
					   public readonly Power: number,
					   public readonly Defense: number,
					   public readonly Toughness: number,
					   public readonly Morale: number,
					   public readonly CostMultiplier: number) {
	}
}
