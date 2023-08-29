import { inserMaskForCpf } from "../cpf";

describe("test cpf", () => {
  it("mask cpf", () => {
    const returnCpf = inserMaskForCpf("15546727677");
    expect(returnCpf).toEqual("155.467.276-77");
  });
});
