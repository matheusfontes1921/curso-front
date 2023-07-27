import Button from "../button/Button";
import {render, screen} from "@testing-library/react";
const TEXT_MOCK = "TEXT_MOCK";
const TEST_ID = "text_id";
const margin = "24px";
describe("Test button", () => {
  beforeEach(() => {
    render(
      <Button data-testid={TEST_ID} margin={margin}>
        {TEXT_MOCK}
      </Button>,
    );
  });
  it("should render", () => {
    expect(screen.getByText(TEXT_MOCK)).toBeDefined();
  });
  it("should render with margin", () => {
    expect(screen.getByTestId(TEST_ID)).toHaveAttribute("style", `margin: ${margin};`);
  });
});
