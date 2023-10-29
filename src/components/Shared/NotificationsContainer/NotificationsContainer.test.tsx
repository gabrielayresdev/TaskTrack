import { render, screen } from "@testing-library/react";
import NotificationsContainer from "./NotificationsContainer.tsx";

const { getByTestId } = screen;

describe("<Notificationscontainer />", () => {
  beforeEach(() => {
    render(<NotificationsContainer />);
  });

  test("Should pass always", () => {
    expect(1).toBe(1);
  });
});
