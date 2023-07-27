import { render, screen } from "@testing-library/react";
import Input from "../Input";
import { InputTestIdEnum } from "../inputTestIdEnum";
const TEXT_MOCK = "TEXT_MOCK";
const TEST_ID_INPUT = "TEXT_ID_INPUT";
const MARGIN = "24px";
describe("Test Input", () => {
  beforeEach(() => {
    render(<Input data-testid={TEST_ID_INPUT} margin={MARGIN} />);
  });
  it("should render", () => {
    expect(screen.getByTestId(TEST_ID_INPUT)).toBeDefined();
    expect(screen.getByTestId(InputTestIdEnum.BOX_INPUT)).toBeDefined();
  });
  it("should render with margin", () => {
    expect(screen.getByTestId(InputTestIdEnum.BOX_INPUT)).toHaveAttribute(
      "style",
      `margin: ${MARGIN};`,
    );
  });
  it("should hide Title", () => {
    const element = screen.queryAllByTestId(InputTestIdEnum.TITLE_INPUT);
    expect(element.length).toEqual(0);
  });
  it("should render Title", () => {
    const { queryAllByTestId } = render(
      <Input title={"test"} data-testid={TEST_ID_INPUT} margin={MARGIN} />,
    );
    const element = queryAllByTestId(InputTestIdEnum.TITLE_INPUT);
    expect(element.length).toEqual(1);
  });
  it("should render Title", () => {
    const { getByText } = render(
        <Input title={TEXT_MOCK} data-testid={TEST_ID_INPUT} margin={MARGIN} />,
    );
    const element = getByText(TEXT_MOCK);
    expect(element).toBeDefined();
  });
});
