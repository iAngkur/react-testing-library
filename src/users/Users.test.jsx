import { render, screen } from "@testing-library/react";
import Users from "./Users";

describe("Users API", () => {
  it("should render the component correctly", () => {
    render(<Users />);
    const textElement = screen.getByText("Users");
    expect(textElement).toBeInTheDocument();
  });

  test("renders a list of users", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");

    expect(users).toHaveLength(3);
  });
});
