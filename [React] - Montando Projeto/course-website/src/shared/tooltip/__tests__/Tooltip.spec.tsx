import { render } from "@testing-library/react";
import Tooltip from "../Tooltip";

export enum TooltipTestId {
  CONTAINER = "CONTAINER",
  INFO = "INFO",
  ANTD = "ANTD",
}
describe("test tooltip", () => {
  it("render tooltip", () => {
    const { getByTestId } = render(<Tooltip>Teste</Tooltip>);
    expect(getByTestId(TooltipTestId.CONTAINER)).toBeDefined();
  });
  it("render tooltip children", () => {
    const mockChildren = "mockChildren";
    const { getByText } = render(<Tooltip>{mockChildren}</Tooltip>);
    expect(getByText(mockChildren)).toBeDefined();
  });
  it("render tooltip antd", () => {
    const mockChildren = "mockChildren";
    const { getByText, queryAllByTestId } = render(<Tooltip title={mockChildren}>{mockChildren}</Tooltip>);
    expect(getByText(mockChildren)).toBeDefined();
    expect(queryAllByTestId(TooltipTestId.CONTAINER).length).toEqual(0);
  });
});
