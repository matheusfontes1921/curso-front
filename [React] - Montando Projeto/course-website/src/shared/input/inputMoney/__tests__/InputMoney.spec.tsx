import InputMoney from "../InputMoney";
import { fireEvent, getByTestId, render } from "@testing-library/react";
export enum InputMoneyTestIdEnum {
  INPUT = "INPUT",
}

describe("test InputMoney", () => {
  it("should show input", () => {
    const mockOnChange = jest.fn();
    const { getByTestId } = render(<InputMoney value={0} onChange={mockOnChange} />);
    const input = getByTestId(InputMoneyTestIdEnum.INPUT);
    expect(input).toBeDefined();
  });
  it("should show initial value", () => {
    const mockOnChange = jest.fn();
    const { getByTestId } = render(<InputMoney value={0} onChange={mockOnChange} />);
    const input = getByTestId(InputMoneyTestIdEnum.INPUT);
    fireEvent.change(input, { target: { value: "0,00" } });
    expect(input).toHaveAttribute("value", "0,00");
  });
});
