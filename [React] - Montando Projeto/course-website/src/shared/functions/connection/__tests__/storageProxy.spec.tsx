import {getItem, removeItem, setItem} from "../storageProxy";
const MOCK_KEY = "MOCK_KEY";
const MOCK_VALUE = "MOCK_VALUE";
describe("storageProxy", () => {
  it("should verify set", () => {
    setItem(MOCK_KEY, MOCK_VALUE);
    expect(localStorage.getItem(MOCK_KEY)).toEqual(MOCK_VALUE);
  });
  it("should verify remove", () => {
    localStorage.setItem(MOCK_KEY, MOCK_VALUE);
    removeItem(MOCK_KEY);
    expect(localStorage.getItem(MOCK_KEY)).toEqual(null);
  });
    it("should verify get", () => {
        localStorage.setItem(MOCK_KEY, MOCK_VALUE);
        getItem(MOCK_KEY);
        expect(getItem(MOCK_KEY)).toEqual(MOCK_VALUE);
    });
});
