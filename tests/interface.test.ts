import { Seller } from "../src/seller";
describe("Interface", function () {
  it("should support in typescript", function () {
    const seller: Seller = {
      id: 1,
      name: "toko ABC",
    };

    console.info(seller);
  });
});
