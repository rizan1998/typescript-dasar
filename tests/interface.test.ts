import { Seller } from "../src/seller";
describe("Interface", function () {
  it("should support in typescript", function () {
    const seller: Seller = {
      id: 1,
      name: "toko ABC",
      nib: "123123",
      npwp: "321321321",
    };

    console.info(seller);
  });
});
