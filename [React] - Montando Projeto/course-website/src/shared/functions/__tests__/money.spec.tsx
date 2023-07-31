import { convertNumberToMoney } from "../money";

describe("money", () => {
  it("should return cents", () => {
    const returnValue = convertNumberToMoney(21.61);
    expect(returnValue).toContain("R$");
    expect(returnValue).toContain("21,61");
  });
  it("should return integer", () => {
    const returnValue = convertNumberToMoney(21);
    expect(returnValue).toContain("R$");
    expect(returnValue).toContain("21,00");
  });
  it("should return thousands", () => {
    const returnValue = convertNumberToMoney(1921047.61);
    expect(returnValue).toContain("R$");
    expect(returnValue).toContain("1921.047,61");
  });
});
