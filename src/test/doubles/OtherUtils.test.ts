import {
  calculateComplexity,
  toUpperCaseWithCb,
} from "../../app/doubles/OtherUtils";

describe("Test suite for OtherUtils", () => {
  describe.only("Tracking Callback functions with Jest Mocks", () => {
    const callBackMock = jest.fn();

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("should test for toUpperCaseWithCb with invalid args - track cb with jest fn", () => {
      const actual = toUpperCaseWithCb("", callBackMock);

      expect(actual).toBeUndefined();
      expect(callBackMock).toHaveBeenCalledWith("Invalid argument");
      expect(callBackMock).toHaveBeenCalledTimes(1);
    });

    it("should test for toUpperCaseWithCb with valid args - track cb with jest fn", () => {
      const actual = toUpperCaseWithCb("abc", callBackMock);

      expect(actual).toBe("ABC");
      expect(callBackMock).toHaveBeenCalledWith("called function with abc");
      expect(callBackMock).toHaveBeenCalledTimes(1);
    });
  });

  describe("Tracking Callback function", () => {
    let cbArgs = [];
    let timesCalled = 0;

    function callBackMock(args: string) {
      cbArgs.push(args);
      timesCalled++;
    }

    afterEach(() => {
      cbArgs = [];
      timesCalled = 0;
    });

    it("should test for toUpperCaseWithCb with invalid args - track cb", () => {
      const actual = toUpperCaseWithCb("", callBackMock);

      expect(actual).toBeUndefined();
      expect(cbArgs).toContain("Invalid argument");
      expect(timesCalled).toBe(1);
    });

    it("should test for toUpperCaseWithCb with valid args - track cb", () => {
      const actual = toUpperCaseWithCb("abc", callBackMock);

      expect(actual).toBe("ABC");
      expect(cbArgs).toContain("called function with abc");
      expect(timesCalled).toBe(1);
    });
  });

  it("should test for toUpperCaseWithCb with invalid args", () => {
    const actual = toUpperCaseWithCb("", (arg) => {
      console.log(arg);
    });

    expect(actual).toBeUndefined();
  });

  it("should test for toUpperCaseWithCb with valid args", () => {
    const actual = toUpperCaseWithCb("abc", (arg) => {
      console.log(arg);
    });

    expect(actual).toBe("ABC");
  });

  it("should test for complexity", () => {
    const someInfo = {
      length: 5,
      extraInfo: {
        a: "Today",
        b: "Tomorrow",
      },
    };

    const actual = calculateComplexity(someInfo as any);

    expect(actual).toBe(10);
  });
});
