"use strict";
describe("Union Type", function () {
    it("should support in typescript", function () {
        let sample = "rijan";
        console.info(sample);
        sample = 100;
        console.info(sample);
        sample = true;
        console.info(sample);
    });
    it("should support typeof operator", function () {
        function process(value) {
            if (typeof value === "string") {
                return value.toLocaleUpperCase();
            }
            else if (typeof value === "number") {
                return value + 2;
            }
            else {
                return !value;
            }
        }
        expect(process("Rijan")).toBe("RIJAN");
        expect(process(100)).toBe(102);
        expect(process(true)).toBe(false);
    });
});
