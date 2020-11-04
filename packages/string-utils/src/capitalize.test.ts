import { capitalize } from "./capitalize";

test(".capitalize", () => {
  expect(capitalize("foo")).toEqual("Foo");
  expect(capitalize("Bar")).toEqual("Bar");
});
