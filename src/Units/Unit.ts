import {INamed} from "./INamed";
import {IAttributed} from "./IAttributed";
import {IHasTraits} from "./IHasTraits";
import {ICostly} from "./ICostly";
import {Ancestry} from "./Ancestry";
import {ExperienceLevel} from "./ExperienceLevel";
import {Equipment} from "./Equipment";
import {Type} from "./Type";
import {Size} from "./Size";
import {Trait} from "./Trait";
import {ICostMultiplicative} from "./ICostMultiplicative";

export class Unit implements INamed, IAttributed, ICostly, IHasTraits {
	private static readonly EmptyAttributes: IAttributed = <IAttributed>{
		Attack: 0,
		Power: 0,
		Defense: 0,
		Toughness: 0,
		Morale: 0
	};

	private static readonly BaseTraitCost: ICostly = <ICostly>{
		Cost: 30
	};

	private static readonly BaseCostMultiplier: ICostMultiplicative = <ICostMultiplicative>{
		CostMultiplier: 10
	};

	public readonly Attack: number;
	public readonly Defense: number;
	public readonly Morale: number;
	public readonly Power: number;
	public readonly Toughness: number;
	public readonly Cost: number;
	public readonly Traits: Trait[];

	public constructor(public readonly Name: string,
					   public readonly Ancestry: Ancestry,
					   public readonly Experience: ExperienceLevel,
					   public readonly Equipment: Equipment,
					   public readonly Type: Type,
					   public readonly Size: Size) {
		const attributes: IAttributed[] = [
			Ancestry,
			Experience,
			Equipment,
			Type
		];

		const unitAttributes = attributes
			.reduce((sum, component) => {
				return <IAttributed>{
					Attack: sum.Attack + component.Attack,
					Power: sum.Power + component.Power,
					Defense: sum.Defense + component.Defense,
					Toughness: sum.Toughness + component.Toughness,
					Morale: sum.Morale + component.Morale
				}
			}, Unit.EmptyAttributes);

		this.Attack = unitAttributes.Attack;
		this.Power = unitAttributes.Power;
		this.Defense = unitAttributes.Defense;
		this.Toughness = unitAttributes.Toughness;
		this.Morale = unitAttributes.Morale;
		this.Traits = this.Ancestry.Traits;

		const costMultipliers: ICostMultiplicative[] = [
			Type,
			Size
		];

		const traitCost = this
			.Traits
			.reduce((sum, trait) => <ICostly>{
				Cost: sum.Cost + trait.Cost
			}, Unit.BaseTraitCost);

		const multiplier = costMultipliers
			.reduce((total, multiplier) => <ICostMultiplicative>{
				CostMultiplier: total.CostMultiplier * multiplier.CostMultiplier
			}, Unit.BaseCostMultiplier);

		this.Cost = (this.Attack + this.Power + this.Defense + this.Toughness + 2 * this.Morale)
			* multiplier.CostMultiplier
			+ traitCost.Cost;
	}
}
