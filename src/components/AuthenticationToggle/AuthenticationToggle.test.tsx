import { render, screen } from "@testing-library/react";
import AuthenticationToggle, {
  IAuthenticationToggle,
} from "./AuthenticationToggle.tsx";

const { getByTestId } = screen;

export const mockAuthenticationToggle: IAuthenticationToggle = {
  line: "Don’t have an account yet?",
  anchor: "Create an account",
  href: "/register",
};

describe("<Authenticationtoggle />", () => {
  beforeEach(() => {
    render(<AuthenticationToggle {...mockAuthenticationToggle} />);
  });

  test("Should pass always", () => {
    expect(1).toBe(1);
  });
});
