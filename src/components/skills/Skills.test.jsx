import { render, screen } from "@testing-library/react";
import Skills from "./Skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JavaScript"];

  test("renders correctly", () => {
    render(<Skills skills={skills} />);

    const listElement = screen.getByRole("list");

    expect(listElement).toBeInTheDocument();
  });

  test("render a list of skills", () => {
    render(<Skills skills={skills} />);

    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skills.length);
  });

  test("renders Login button", () => {
    render(<Skills skills={skills} />);

    const loginButotn = screen.getByRole("button", {
      name: "Login",
    });

    expect(loginButotn).toBeInTheDocument();
  });

  test("Start Learning button is not rendered", () => {
    render(<Skills skills={skills} />);

    const startLearningButotn = screen.queryByRole("button", {
      name: "Start Learning",
    });

    expect(startLearningButotn).not.toBeInTheDocument();
  });

  test("Start Learning button is eventually displayed", async () => {
    render(<Skills skills={skills} />);

    const startLearningButotn = await screen.findByRole(
      "button",
      {
        name: "Start Learning",
      }
      // {
      //   timeout: 2000,
      // }
    );
    expect(startLearningButotn).toBeInTheDocument();
  });
});
