import {Trait} from "./Trait";
import {IAttributed} from "./IAttributed";
import {INamed} from "./INamed";

export class Ancestry implements INamed, IAttributed  {
	public constructor(public readonly Name: string,
					   public readonly Attack: number,
					   public readonly Power: number,
					   public readonly Defense: number,
					   public readonly Toughness: number,
					   public readonly Morale: number,
					   public readonly Traits: Trait[] = []) {
	}
}

