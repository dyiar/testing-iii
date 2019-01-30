// Test away!
import React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import Display from "./Display";

describe("<Display />", () => {
  it("should render without crashing", () => {
    const { getByTestId } = render(<Display />);

    const locked = getByTestId("locked");
    const closed = getByTestId("closed");
    expect(closed).toBeInTheDocument();
    expect(locked).toBeInTheDocument();
  });

  describe("displays if gate is closed and locked", () => {
    it("should select the class closed and locked", () => {
      const { getByTestId } = render(<Display locked={true} closed={true} />);

      const closed = getByTestId("closed");
      const locked = getByTestId("locked");

      expect(closed).toHaveClass("led red-led");
      expect(locked).toHaveClass("led red-led");
      expect(closed).toHaveTextContent(/closed/i);
      expect(locked).toHaveTextContent(/locked/i);
    });
  });

  describe("displays if gate is open and unlocked", () => {
    it("should select the class closed and locked", () => {
      const { getByTestId } = render(<Display locked={false} closed={false} />);

      const closed = getByTestId("closed");
      const locked = getByTestId("locked");

      expect(closed).toHaveClass("led green-led");
      expect(locked).toHaveClass("led green-led");
      expect(closed).toHaveTextContent(/open/i);
      expect(locked).toHaveTextContent(/unlocked/i);
    });
  });
});
