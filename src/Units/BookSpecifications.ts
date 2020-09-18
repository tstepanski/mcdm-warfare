import {Ancestry} from "./Ancestry";
import {Trait} from "./Trait";
import {ExperienceLevel} from "./ExperienceLevel";
import {Equipment} from "./Equipment";
import {Type} from "./Type";
import {Size} from "./Size";

export interface ISpecifications<TAncestries extends ICollection<Ancestry>, TTraits extends ICollection<Trait>,
	TLevels extends ICollection<ExperienceLevel>, TEquipmentLoads extends ICollection<Equipment>,
	TTypes extends ICollection<Type>, TSizes extends ICollection<Size>> {
	readonly Ancestries: TAncestries;
	readonly Traits: ICollection<Trait>;
	readonly Levels: ICollection<ExperienceLevel>;
	readonly EquipmentLoads: ICollection<Equipment>;
	readonly Types: ICollection<Type>;
	readonly Sizes: ICollection<Size>;
}

export interface ICollection<T> {
	readonly All: T[];
}

export class BookTraits implements ICollection<Trait> {
	public static readonly Amphibious: Trait =
		new Trait("Amphibious", "This unit does not suffer terrain penalties for fighting in water or on land.", 50);

	public static readonly BredForWar: Trait =
		new Trait("Bred For War", "This unit cannot be diminished, and cannot have disadvantage on morale checks.",
			100);

	public static readonly Brutal: Trait =
		new Trait("Brutal", "This unit inflicts 2 casualties on a successful power check.", 200);

	public static readonly Courageous: Trait =
		new Trait("Courageous", "Once per battle, This unit can choose To succeed on a Morale check it just failed.",
			50);

	public static readonly Eternal: Trait =
		new Trait("Eternal",
			"This unit cannot be horrified, and it always succeeds on morale checks to attack undead and fiends.", 50);

	public static readonly Frenzy: Trait =
		new Trait("Frenzy",
			"If this unit diminishes an enemy unit, it immediately makes a free attack against that unit.", 50);

	public static readonly Horrific: Trait =
		new Trait("Horrific",
			"If This unit inflicts a casualty on an enemy unit, that unit must make a DC 15 morale check. Failure exhausts the unit.",
			200);

	public static readonly Martial: Trait =
		new Trait("Martial",
			"If This unit succeeds on a power check and its size is greater than the defending unit, it inflicts 2 casualties.",
			200);

	public readonly All: Trait[] = [
		BookTraits.Amphibious
	];

	public static readonly Instance: BookTraits = new BookTraits();

	private constructor() {
	}
}

export class BookSpecifications implements ISpecifications<> {
	public readonly Ancestries: ICollection<Ancestry>;
	public readonly EquipmentLoads: ICollection<Equipment>;
	public readonly Levels: ICollection<ExperienceLevel>;
	public readonly Sizes: ICollection<Size>;
	public readonly Traits: ICollection<Trait>;
	public readonly Types: ICollection<Type>;

	public static readonly Instance: BookSpecifications = new BookSpecifications();


	private constructor() {
	}
}
