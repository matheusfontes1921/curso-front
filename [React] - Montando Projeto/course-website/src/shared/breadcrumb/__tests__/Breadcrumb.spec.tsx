import {fireEvent, render} from "@testing-library/react";
import Breadcrumb, { ListBreadcrumb } from "../Breadcrumb";
import { name } from "axios";
import { useNavigate } from "react-router-dom";
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => {
    useNavigate: () => mockNavigate,
}));
export const enum BreadcrumbTestEnum {
  CONTAINER = "CONTAINER",
  ITEM = "ITEM",
  CONTAINER_NAVIGATE = "CONTAINER_NAVIGATE",
}
const mockListBreadcrumb: ListBreadcrumb[] = [
  {
    name: "nameMock",
  },
];
const mockListBreadcrumbNavigate: ListBreadcrumb[] = [
    {
        name: "nameMock",
        navigateTo: "navigateTo",
    },
];
describe("test Breadcrumb", () => {
  it("should render success", () => {
    const { getByTestId } = render(<Breadcrumb listBreadcrumb={[]} />);
    expect(getByTestId(BreadcrumbTestEnum.CONTAINER)).toBeDefined();
  });
  it("shouldn render if list is empty", () => {
    const { queryAllByTestId } = render(<Breadcrumb listBreadcrumb={[]} />);
    expect(queryAllByTestId(BreadcrumbTestEnum.ITEM).length).toEqual(0);
  });
  it("should render item", () => {
    const { queryAllByTestId, getByText } = render(
      <Breadcrumb listBreadcrumb={mockListBreadcrumb} />,
    );
    expect(queryAllByTestId(BreadcrumbTestEnum.ITEM).length).toEqual(1);
    expect(queryAllByTestId(BreadcrumbTestEnum.CONTAINER_NAVIGATE).length).toEqual(0);
    expect(getByText(mockListBreadcrumb[0].name)).toBeDefined();
  });
  it("should render item", () => {
    const { queryAllByTestId, getByText } = render(
      <Breadcrumb listBreadcrumb={mockListBreadcrumbNavigate} />,
    );
    expect(queryAllByTestId(BreadcrumbTestEnum.CONTAINER_NAVIGATE).length).toEqual(1);
  });
    it("should onClick works", () => {
        const { getByTestId } = render(
            <Breadcrumb listBreadcrumb={mockListBreadcrumbNavigate} />,
        );
        const buttonNavigate = getByTestId(BreadcrumbTestEnum.CONTAINER_NAVIGATE);
        fireEvent.click(buttonNavigate);
        expect(mockNavigate).toHaveBeenCalledWith(mockListBreadcrumbNavigate[0].navigateTo);
    });
});
