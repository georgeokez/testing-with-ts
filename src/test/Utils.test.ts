import { getStringInfo, StringUtils, toUpperCase } from "../app/Utils";

describe("Util test Suite", () => {
  describe("StringUtils Test", () => {
    let sut: StringUtils;

    beforeEach(() => {
      sut = new StringUtils();
      console.log("SetUp");
    });

    afterEach(() => {
      // clear mocks
      console.log("Teardown");
    });

    it("should return correct uppercase", () => {
      const actual = sut.toUpperCase("abc");

      expect(actual).toBe("ABC");
    });

    it("should throw error on invalid argument - function", () => {
      function expectedError() {
        const actual = sut.toUpperCase("");
      }

      expect(expectedError).toThrow();
      expect(expectedError).toThrowError("Invalid Argument");
    });

    it.todo("Should run async call to API");

    it("should throw error on invalid argument - try catch", (done) => {
      try {
        const actual = sut.toUpperCase("");
        done("Should throw error");
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty("message", "Invalid Argument");
        done();
      }
    });
  });

  it("should return uppercase", () => {
    const result = toUpperCase("abc");
    expect(result).toBe("ABC");
  });

  it("should return info for a valid string", () => {
    const actual = getStringInfo("My-String");
  });
});
