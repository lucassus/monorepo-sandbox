import { sayHello } from "./index";

test(".sayHello", () => {
  expect(sayHello("luke")).toEqual("Hello Luke!");
});
