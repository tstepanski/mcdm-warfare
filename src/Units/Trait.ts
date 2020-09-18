import {INamed} from "./INamed";
import {ICostly} from "./ICostly";

export class Trait implements INamed, ICostly {
	public constructor(public readonly Name: string,
					   public readonly Description: string,
					   public readonly Cost: number) {
	}
}
