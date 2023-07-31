import MockAdapter from "axios-mock";
import axios from "axios";
import { URL_AUTH } from "../../../constants/urls";
import ConnectionAPI, {
  connectionAPIDelete,
  connectionAPIGet,
  connectionAPIPatch,
  connectionAPIPost,
  connectionAPIPut,
} from "../connectionAPI";
import { MethodsEnum } from "../../../enums/methods.enum";
import { ERROR_ACCESS_DENIED, ERROR_CONNECTION } from "../../../constants/errorStatus";
import { getAuthorizationToken } from "../auth";
import { AUTHORIZATION_KEY } from "../../../constants/authorizationConstants";
const mockAxios = new MockAdapter(axios);
const returnValue = "returnValue";
const BODY_MOCK = { name: "name" };
const mockToken = "TOKEN_MOCK";
jest.mock("../auth", () => ({
    getAuthorizationToken: () => mockToken,
}));
const mockGetAuthorizationToken = getAuthorizationToken as jest.Mock<any>;
describe("connectionAPI function", () => {
  describe("connectionAPI get", () => {
    it("must test get", async () => {
      const spyAxios = jest.spyOn(axios, "get");
      mockAxios.onGet(URL_AUTH).reply(200, returnValue);
      const returnGet = await connectionAPIGet(URL_AUTH);
      expect(returnGet).toEqual(returnValue);
      expect(spyAxios.mock.calls[0][0]).toEqual(URL_AUTH);
    });
  });
  describe("connectionAPI delete", () => {
    it("must test delete", async () => {
      const spyAxios = jest.spyOn(axios, "delete");
      mockAxios.onDelete(URL_AUTH).reply(200, returnValue);
      const returnDelete = await connectionAPIDelete(URL_AUTH);
      expect(returnDelete).toEqual(returnValue);
      expect(spyAxios.mock.calls[0][0]).toEqual(URL_AUTH);
    });
  });
  describe("connectionAPI post", () => {
    it("must test post", async () => {
      const spyAxios = jest.spyOn(axios, "post");
      mockAxios.onPost(URL_AUTH).reply(200, returnValue);
      const returnPost = await connectionAPIPost(URL_AUTH, BODY_MOCK);
      expect(returnPost).toEqual(returnValue);
      expect(spyAxios.mock.calls[0][0]).toEqual(URL_AUTH);
      expect(spyAxios.mock.calls[0][1]).toEqual(BODY_MOCK);
    });
  });
  describe("connectionAPI put", () => {
    it("must test put", async () => {
      const spyAxios = jest.spyOn(axios, "put");
      mockAxios.onPut(URL_AUTH).reply(200, returnValue);
      const returnPut = await connectionAPIPut(URL_AUTH, BODY_MOCK);
      expect(returnPut).toEqual(returnValue);
      expect(spyAxios.mock.calls[0][0]).toEqual(URL_AUTH);
      expect(spyAxios.mock.calls[0][1]).toEqual(BODY_MOCK);
    });
  });
  describe("connectionAPI patch", () => {
    it("must test patch", async () => {
      const spyAxios = jest.spyOn(axios, "patch");
      mockAxios.onPatch(URL_AUTH).reply(200, returnValue);
      const returnPatch = await connectionAPIPatch(URL_AUTH, BODY_MOCK);
      expect(returnPatch).toEqual(returnValue);
      expect(spyAxios.mock.calls[0][0]).toEqual(URL_AUTH);
      expect(spyAxios.mock.calls[0][1]).toEqual(BODY_MOCK);
    });
    describe("test connect", () => {
      it("return success", async () => {
        mockAxios.onGet(URL_AUTH).reply(200, returnValue);
        const returnGet = await ConnectionAPI.connect(URL_AUTH, MethodsEnum.GET);
        expect(returnGet).toEqual(returnValue);
      });
      it("return error401", async () => {
        mockAxios.onGet(URL_AUTH).reply(401);
        expect(ConnectionAPI.connect(URL_AUTH, MethodsEnum.GET)).rejects.toThrowError(
          Error(ERROR_ACCESS_DENIED),
        );
      });
      it("return error403", async () => {
        mockAxios.onGet(URL_AUTH).reply(403);
        expect(ConnectionAPI.connect(URL_AUTH, MethodsEnum.GET)).rejects.toThrowError(
          Error(ERROR_ACCESS_DENIED),
        );
      });
      it("return error400", async () => {
        mockAxios.onGet(URL_AUTH).reply(400);
        expect(ConnectionAPI.connect(URL_AUTH, MethodsEnum.GET)).rejects.toThrowError(
          Error(ERROR_CONNECTION),
        );
      });
    });
  });
  describe("test call", () => {
    it("verifying if header is sending authorization", async () => {
      mockGetAuthorizationToken.mockReturnValue(mockToken);
      const spyAxios = jest.spyOn(axios, "get");
      mockAxios.onGet(URL_AUTH).reply(200, returnValue);
      const returnGet = await ConnectionAPI.call(URL_AUTH, MethodsEnum.GET);
      expect(spyAxios.mock.calls[0][1]?.headers).toEqual({
        Authorization: undefined,
        "Content-Type": "application/json",
      });
    });
  });
});
