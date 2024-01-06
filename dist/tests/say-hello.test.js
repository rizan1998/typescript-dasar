import { sayHello } from "../src/say-hello";
describe("sayHello", function () {
    it("should return hello rijan", function () {
        expect(sayHello("rijan")).toBe("Hello rijan");
    });
});
