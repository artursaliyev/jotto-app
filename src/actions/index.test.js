import { storeFactory } from "../../test/testUtils";
import { getSecretWord } from "./";

jest.mock("../api", () => {
  return {
    fetchSecretWord: jest.fn(() => "zebra"),
  };
});

describe("getSecretWord action creator", () => {
  test("adds response word to state", () => {
    const secretWord = "zebra";
    const store = storeFactory();

    return store.dispatch(getSecretWord()).then(() => {
      const newState = store.getState();
      expect(newState.secretWord).toBe(secretWord);
    });
  });
});
