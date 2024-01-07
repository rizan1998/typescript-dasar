"use strict";
describe("Any", function () {
    it("should support in typescript", function () {
        const person = {
            id: 1,
            name: "Rijan Alpalah",
            age: 30,
        };
        person.age = 31;
        person.address = "Indonesia";
        console.info(person);
    });
});
