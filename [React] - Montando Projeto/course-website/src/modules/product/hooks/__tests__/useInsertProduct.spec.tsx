import { act, renderHook } from "@testing-library/react";
import { useInsertProduct } from "../useInsertProduct";
import { useNavigate } from "react-router-dom";
import { useGlobalReducer } from "../../../../store/reducers/globalReducer/useGlobalReducer";
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => {
  () => mockNavigate;
});
const mockSetNotification = jest.fn();

jest.mock("../../../../store/reducers/globalReducer/useGlobalReducer", () => {
  () => {
    mockSetNotification;
  };
});

describe("Test useInsertProduct", () => {
  it("should return initian values", () => {
    const { result } = renderHook(() => useInsertProduct());
    expect(result.current.loading).toEqual(false);
    expect(result.current.disableButton).toEqual(false);
    expect(result.current.product).toEqual({ name: "", price: 0, image: "" });
  });
  it("should change select", () => {
    const { result } = renderHook(() => useInsertProduct());
    act(() => {
      result.current.handleOnChangeSelect("1921");
    });
    expect(result.current.product.categoryId).toEqual(1921);
  });
  it("should change input send name", () => {
    const { result } = renderHook(() => useInsertProduct());
    const TEST_MOCK = "TEST_MOCK";
    act(() => {
      result.current.onChangeInput({ target: { value: TEST_MOCK } } as any, "name");
    });
    expect(result.current.product.name).toEqual(TEST_MOCK);
  });
  it("should change input send price", () => {
    const { result } = renderHook(() => useInsertProduct());
    const TEST_MOCK = "1921";
    act(() => {
      result.current.onChangeInput({ target: { value: TEST_MOCK } } as any, "price");
    });
    expect(result.current.product.price).toEqual(TEST_MOCK);
  });
  it("should change disabledButton when inserting data", () => {
    const { result } = renderHook(() => useInsertProduct());
    expect(result.current.disableButton).toEqual(true);
    act(() => {
      result.current.onChangeInput({ target: { value: "1921" } } as any, "price", true);
    });
    expect(result.current.disableButton).toEqual(true);
    act(() => {
      result.current.onChangeInput({ target: { value: "teste" } } as any, "name");
    });
    expect(result.current.disableButton).toEqual(true);
    act(() => {
      result.current.onChangeInput({ target: { value: "http" } } as any, "image");
    });
    expect(result.current.disableButton).toEqual(true);
    act(() => {
      result.current.handleOnChangeSelect("1921");
    });
    expect(result.current.disableButton).toEqual(false);
    act(() => {
      result.current.onChangeInput({ target: { value: "" } } as any, "image");
    });
    expect(result.current.disableButton).toEqual(true);
  });
});
