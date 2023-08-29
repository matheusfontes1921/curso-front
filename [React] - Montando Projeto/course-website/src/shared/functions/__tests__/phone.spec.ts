import {inserMaskForCpf} from "../cpf";
import {insertMaskForPhone} from "../phone";

describe("test phone", () => {
    it("mask phone", () => {
        const returnPhone = insertMaskForPhone("00123456789");
        expect(returnPhone).toEqual("(00) 12345-6789");
    });
    it("mask home phone", () => {
        const returnPhone = insertMaskForPhone("0012345678");
        expect(returnPhone).toEqual("(00) 1234-5678");
    });
});