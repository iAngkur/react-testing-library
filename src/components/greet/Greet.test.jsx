import { render, screen } from "@testing-library/react";
import Greet from "./Greet";


/**
 * Greet should render the text hello and if a name is passed into the component
 * It should render hello followed by the name
 */
test("should check if Hello present in the screen", () => {
  render(<Greet />)

  const textElement = screen.getByText(/hello/i);

  expect(textElement).toBeInTheDocument();
});

test("should render hello followed by the given name", () => {
  render(<Greet name="Angkur Mondal" />)

  const textElement = screen.getByText(/hello Angkur Mondal/i);

  expect(textElement).toBeInTheDocument();
})