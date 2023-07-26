import Button from "../button/Button";
import {render} from "@testing-library/react";

describe("Test button", () => {
  it("teste render", () => {
    render(<Button />);
    expect(1).toBe(1);
  });
});
