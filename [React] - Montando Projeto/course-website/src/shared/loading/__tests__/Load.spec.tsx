import { render } from "@testing-library/react";
import Load from "../Load";

export enum LoadTestId {
  SPIN = "SPIN",
}
describe("test load", () => {
  it("should render load", () => {
    const { getByTestId } = render(<Load data-testid={LoadTestId.SPIN} />);
    expect(getByTestId(LoadTestId.SPIN)).toBeDefined();
  });
});
