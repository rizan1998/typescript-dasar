"use strict";
describe("Object", function () {
    it("Should support in typescript", function () {
        const person = {
            id: "1",
            name: "Rijan",
        };
        console.info(person);
        person.id = "2";
        person.name = "Alpalah";
        console.info(person);
    });
});
