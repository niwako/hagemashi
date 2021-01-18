import { render, screen } from "@testing-library/react";
import AvatarHeader from "./AvatarHeader";

jest.mock("reactfire", () => ({
  useUser: () => ({
    data: {
      displayName: "Shad Sharma",
      photoURL: "https://shads.photo.url/avatar.png",
    },
  }),
}));

describe("AvatarHeader", () => {
  it("renders the name of the logged in user", () => {
    render(<AvatarHeader />);
    const greetingElement = screen.getByText("Hi Shad Sharma");
    expect(greetingElement).toBeInTheDocument();
  });

  it("renders the avatar of the logged in user", () => {
    render(<AvatarHeader />);
    const avatarElement = screen.getByRole("img");
    expect(avatarElement).toHaveAttribute(
      "src",
      "https://shads.photo.url/avatar.png"
    );
  });

  it("renders the current date", () => {
    const mockDate = new Date(2020, 2, 3);
    const spy = jest.spyOn(global, "Date").mockImplementation(() => mockDate);
    render(<AvatarHeader />);
    const dateElement = screen.getByText("Tuesday, March 3, 2020");
    expect(dateElement).toBeInTheDocument();
    spy.mockRestore();
  });
});
