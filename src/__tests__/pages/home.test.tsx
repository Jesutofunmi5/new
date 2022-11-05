import { render, screen } from "test/test-utils";
import { Home } from "pages";

test("renders home page", async () => {
  render(<Home />);
  expect(screen.getByText(/home page/i)).toBeInTheDocument();
});
