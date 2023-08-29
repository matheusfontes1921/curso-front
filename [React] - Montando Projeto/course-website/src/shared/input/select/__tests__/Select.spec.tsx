import { render } from "@testing-library/react";
import Select from "../Select";
export enum SelectTestId {
  CONTAINER = "CONTAINER",
  SELECT_ANTD = "SELECT_ANTD",
  TITLE = "TITLE",
}
describe("test select", () => {
  it("render Select", () => {
    const { getByTestId } = render(<Select />);
    expect(getByTestId(SelectTestId.CONTAINER)).toBeDefined();
    expect(getByTestId(SelectTestId.SELECT_ANTD)).toBeDefined();
  });
  it("not render TITLE", () => {
    const { queryAllByTestId } = render(<Select />);
    expect(queryAllByTestId(SelectTestId.TITLE).length).toEqual(0);
  });
  it("render TITLE", () => {
    const mockTitle = "mockTitle";
    const { queryAllByTestId, getByText } = render(<Select title={mockTitle} />);
    expect(queryAllByTestId(SelectTestId.TITLE).length).toEqual(1);
    expect(getByText(mockTitle)).toBeDefined();
  });
  it("render margin", () => {
    const mockMargin = "43px 53px 523px 85px";
    const { getByTestId } = render(<Select margin={mockMargin} />);
    expect(getByTestId(SelectTestId.CONTAINER)).toHaveAttribute("style", `margin: ${mockMargin};`);
  });
});
