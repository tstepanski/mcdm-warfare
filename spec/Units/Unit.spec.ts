import {Unit} from "../../src/Units/Unit";

describe("Rockbreakers example", () => {
	it("Should cost 400", () => {
		const rockbreakers = new Unit();

		expect(rockbreakers.Cost).toBe(400);
	})
});
