import { setAuthorizationToken, unsetAuthorizationToken } from "../auth";
import { removeItem, setItem } from "../storageProxy";
import { AUTHORIZATION_KEY } from "../../../constants/authorizationConstants";

jest.mock("../storageProxy");
describe("auth functions", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe("unsetAuthorizationToken", () => {
    it("should call removeItem", () => {
      unsetAuthorizationToken();
      expect(removeItem).toHaveBeenCalledWith(AUTHORIZATION_KEY);
    });
  });
  describe("setAuthorizationToken", () => {
    const MOCK_TOKEN = "MOCK_TOKEN";
    it("shouldn't call setAuthorizationToken", () => {
      setAuthorizationToken();
      expect(setItem).not.toHaveBeenCalledWith();
    });
      it("should call setAuthorizationToken", () => {
          setAuthorizationToken(MOCK_TOKEN);
          expect(setItem).toHaveBeenCalledWith(AUTHORIZATION_KEY, MOCK_TOKEN);
      });
  });
    describe("getAuthorizationToken", () => {
        const MOCK_TOKEN = "MOCK_TOKEN";
        it("shouldn't call setAuthorizationToken", () => {
            setAuthorizationToken();
            expect(setItem).not.toHaveBeenCalledWith();
        });
        it("should call setAuthorizationToken", () => {
            setAuthorizationToken(MOCK_TOKEN);
            expect(setItem).toHaveBeenCalledWith(AUTHORIZATION_KEY, MOCK_TOKEN);
        });
    });
});
