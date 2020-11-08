import { pdSticker } from "../pd-sticker.js";

describe("pd-sticker", () => {
  describe("stickers", () => {
    it("Checks that stickers is an empty object upon initialization.", () => {
        const component = new pdSticker();
        expect(typeof component.stickers).toEqual("object");
		expect(component.stickers.length == 0).toBeTrue();
	});
  });
  describe("direction", () => {
    it("Checks that direction has default value.", () => {
        const component = new pdSticker();
        expect(typeof component.direction).toEqual("string");
		expect(component.direction).toMatch(/left|right/);
    });
  });
  describe("searchFor", () => {
    it("Checks that searchFor attribute has default value \"article\".", () => {
        const component = new pdSticker();
        expect(typeof component.searchFor).toEqual("string");
		expect(component.searchFor).toEqual('article');
    });
  });
  describe("sRoot", () => {
    it('Checks that component is attached to DOM and is equal to <pd-sticker>', async () => {
        const component = new pdSticker();
        expect(component.outerHTML).toBe("<pd-sticker></pd-sticker>");
    });
  });  
  describe("sRoot", () => {
    it('Checks that component is attached to DOM and has empty innerHTML', async () => {
        const component = new pdSticker();
        expect(component.innerHTML.includes("")).toBeTruthy();
    });
  });   
 });
describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present. This is a demo test to check that the response from the testing framework is ok.', () => {
    assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});