import { render, screen } from "@testing-library/react";
import Notification from "./Index.tsx";

const { getByTestId } = screen;

describe("<Notification />", () => {
  beforeEach(() => {
    render(<Notification />);
  });

  test("Should pass always", () => {
    expect(1).toBe(1);
  });
});
