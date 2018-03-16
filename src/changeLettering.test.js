import changeLettering from "./changeLettering";

describe("changeLettering function", () => {
  it("should alter received texts every second letter to uppercase", () => {
    const actual = changeLettering(
      "Extract Logic away from React Components. Reusable, much cleaner and easier to test"
    );
    const expected =
      "ExTrAcT LoGiC AwAy fRoM ReAcT CoMpOnEnTs. ReUsAbLe, MuCh cLeAnEr aNd eAsIeR To tEsT";
    expect(actual).toEqual(expected);
  });
});
