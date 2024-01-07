describe("Type Alias", function () {
    it("should support in typescript", function () {
        const category = {
            id: "1",
            name: "Hanphone",
        };
        const product = {
            id: "1",
            name: "Xiaomi red note 10",
            price: 3000000,
            category: category,
        };
        console.info(category);
        console.info(product);
        // product.description = "test";
    });
});
export {};
