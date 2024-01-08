import { CustomerType } from "../src/enum";
describe("enum", function () {
    it("should support in typescript", function () {
        const customer = {
            id: 1,
            name: "Rijan",
            type: CustomerType.GOLD,
        };
        console.info(customer);
    });
});
