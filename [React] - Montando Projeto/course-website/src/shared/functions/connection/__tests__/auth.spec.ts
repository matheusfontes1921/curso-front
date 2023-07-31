import {
  getAuthorizationToken,
  logout,
  setAuthorizationToken,
  unsetAuthorizationToken,
  verifyLoggedIn,
} from "../auth";
import { getItem, removeItem, setItem } from "../storageProxy";
import { AUTHORIZATION_KEY } from "../../../constants/authorizationConstants";
import { LoginRoutesEnum } from "../../../../modules/login/routes";
import MockAdapter from "axios-mock-adapter";
import { redirect } from "react-router-dom";
import axios from "axios";
import { URL_PRODUCT, URL_USER } from "../../../constants/urls";
import { connectionAPIGet } from "../connectionAPI";

jest.mock("../storageProxy");
jest.mock("../connectionAPI");
const MOCK_TOKEN = "MOCK_TOKEN";
const mockGetItem = getItem as jest.Mock<any>;
const mockConnectionAPI = connectionAPIGet as jest.Mock<any>;
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
    it("should call setAuthorizationToken", () => {
      getAuthorizationToken();
      expect(getItem).toHaveBeenCalledWith(AUTHORIZATION_KEY);
    });
  });
  describe("logout", () => {
    it("should call navigate and unsetAuthorizationToken", () => {
      const navigateMock = jest.fn();
      logout(navigateMock);
      expect(navigateMock).toHaveBeenCalledWith(LoginRoutesEnum.LOGIN);
      expect(removeItem).toHaveBeenCalledWith(AUTHORIZATION_KEY);
    });
  });
  describe("verifyLoggedIn", () => {
    beforeEach(() => {
      mockGetItem.mockReturnValue(undefined);
      mockConnectionAPI.mockResolvedValue({ name: "name" });
    });
    it("should call redirect", async () => {
      mockGetItem.mockReturnValue(undefined);
      await verifyLoggedIn();
      expect(redirect).toHaveBeenCalledWith(LoginRoutesEnum.LOGIN);
    });
    it("must unsetToken when occurs requets error", async () => {
      mockConnectionAPI.mockRejectedValueOnce(new Error());
      await verifyLoggedIn();
      expect(redirect).toHaveBeenCalledWith(AUTHORIZATION_KEY);
    });
    it("must redirect", async () => {
      mockConnectionAPI.mockResolvedValue(undefined);
      await verifyLoggedIn();
      expect(redirect).toHaveBeenCalledWith(LoginRoutesEnum.LOGIN);
    });
    it("must return mull if theres an user", async () => {
      const returnVerify = await verifyLoggedIn();
      expect(returnVerify).toBeNull();
    });
  });
});
