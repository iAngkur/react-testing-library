import Application from "./Application";
import { render, screen } from "@testing-library/react";

describe("Application", () => {
  it("renders the component", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", {
      name: "Job application form",
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      // name: "Section 1",
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    // const paragraphElement = screen.getByText("All fields are mandatory");
    // const paragraphElement = screen.getByText((content) =>
    //   content.startsWith("All")
    // );
    const paragraphElement = screen.getByText(/fields/);
    expect(paragraphElement).toBeInTheDocument();

    const closeElement = screen.getByTitle("close");
    expect(closeElement).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", { name: "Name" });

    expect(nameElement).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText("Name", {
      selector: "input",
    });
    expect(nameElement2).toBeInTheDocument();

    const nameElement3 = screen.getByPlaceholderText("Fullname");
    expect(nameElement3).toBeInTheDocument();

    const nameElement4 = screen.getByDisplayValue("Angkur Mondal");
    expect(nameElement4).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", { name: "Bio" });
    expect(bioElement).toBeInTheDocument();

    const lobLocationElement = screen.getByRole("combobox");
    expect(lobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});
