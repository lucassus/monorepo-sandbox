import { capitalize } from ".";

test(".capitalize", () => {
  expect(capitalize("foo")).toEqual("Foo");
  expect(capitalize("Bar")).toEqual("Bar");
});
