import { insertMaskForCep } from "../address";

describe("test address", () => {
  it("should return masked cep", () => {
    const returnCep = insertMaskForCep("1234567");
    expect(returnCep).toEqual("12345-67");
  });
    it("should return masked 6 cep", () => {
        const returnCep = insertMaskForCep("123456");
        expect(returnCep).toEqual("12345-6");
    });
    it("should return masked 5 cep", () => {
        const returnCep = insertMaskForCep("1234567");
        expect(returnCep).toEqual("12345");
    });
});
