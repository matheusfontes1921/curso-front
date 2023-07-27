import { fireEvent, render, screen } from "@testing-library/react";
import ProductInsert from "../ProductInsert";
import { ProductInsertTestIdEnum } from "../../productInsertTestIdEnum";
import { mockProductInsert } from "../../__mocks__/productInsert.mock";
let value = "";
let type = "";
const mockButtonInsert = jest.fn();
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
}));
jest.mock("../../../category/hooks/useCategory", () => ({
  useCategory: () => ({
    categories: [],
  }),
}));
jest.mock("../../hooks/useInsertProduct", () => ({
  useInsertProduct: () => ({
    loading: false,
    disableButton: false,
    handleInsertProduct: mockButtonInsert,
    onChangeInput: (e: React.ChangeEvent<HTMLInputElement>, x: string) => {
      value = e.target.value;
      type = x;
    },
    handleOnChangeSelect: jest.fn(),
    product: mockProductInsert,
  }),
}));
describe("Test button", () => {
  it("should render modal when confirm logout", () => {
    const { getByTestId } = render(<ProductInsert />);
    expect(getByTestId(ProductInsertTestIdEnum.PRODUCT_INSERT_BUTTON_CANCEL)).toBeDefined();
    expect(getByTestId(ProductInsertTestIdEnum.PRODUCT_INSERT_BUTTON_INSERT)).toBeDefined();
    expect(getByTestId(ProductInsertTestIdEnum.PRODUCT_INSERT_INPUT_NAME)).toBeDefined();
    expect(getByTestId(ProductInsertTestIdEnum.PRODUCT_INSERT_INPUT_IMAGE)).toBeDefined();
    expect(getByTestId(ProductInsertTestIdEnum.PRODUCT_INSERT_INPUT_PRICE)).toBeDefined();
    expect(getByTestId(ProductInsertTestIdEnum.PRODUCT_INSERT_INPUT_SELECT)).toBeDefined();
    expect(getByTestId(ProductInsertTestIdEnum.PRODUCT_INSERT_CONTAINER)).toBeDefined();
  });
  it("should call onChangeInput when changing name", () => {
    const { getByTestId } = render(<ProductInsert />);
    const input = getByTestId(ProductInsertTestIdEnum.PRODUCT_INSERT_INPUT_NAME);
    fireEvent.change(input, { target: { value: "name" } });
    expect(value).toEqual("name");
    expect(type).toEqual("name");
  });
  it("should call onChangeInput when changing price", () => {
    const { getByTestId } = render(<ProductInsert />);
    const input = getByTestId(ProductInsertTestIdEnum.PRODUCT_INSERT_INPUT_PRICE);
    fireEvent.change(input, { target: { value: "5.43" } });
    expect(value).toEqual("5.43");
    expect(type).toEqual("price");
  });
  it("should call onChangeInput when changing image", () => {
    const { getByTestId } = render(<ProductInsert />);
    const input = getByTestId(ProductInsertTestIdEnum.PRODUCT_INSERT_INPUT_IMAGE);
    fireEvent.change(input, { target: { value: "image" } });
    expect(value).toEqual("image");
    expect(type).toEqual("image");
  });
  it("should call handleInsertProduct when click insertButton", () => {
    const { getByTestId } = render(<ProductInsert />);
    const button = getByTestId(ProductInsertTestIdEnum.PRODUCT_INSERT_BUTTON_INSERT)
    fireEvent.click(button);
    expect(mockButtonInsert).toBeCalled();
  });
  it("should call navigate when clicking cancelButton", () => {
    const { getByTestId } = render(<ProductInsert />);
    const button = getByTestId(ProductInsertTestIdEnum.PRODUCT_INSERT_BUTTON_CANCEL);
    fireEvent.click(button);
    expect(mockNavigate).toBeCalled();
  });
});
