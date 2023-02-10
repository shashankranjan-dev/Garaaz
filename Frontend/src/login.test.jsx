// /* eslint-disable testing-library/no-unnecessary-act */
// import { fireEvent, render, screen } from "@testing-library/react";
// import { act } from "react-dom/test-utils";
// import AddProduct from "./Components/AddProduct";

// test("renders learn react link", () => {
//   render(<AddProduct />);
//   //   to check the rendering of the login page, I have used the following code:
//   describe("AddProduct render Page", () => {
//     it("renders the Login page", () => {
//       const { getByText } = render(<AddProduct />);
//       expect(screen.getByText(/AddProduct/i)).toBeInTheDocument();
//     });

//     it("render 2 input components", () => {
//       // eslint-disable-next-line no-unused-vars
//       const { getByLabelText } = render(<AddProduct />);
//       expect(screen.getByLabelText(/brand/i)).toBeInTheDocument();
//       expect(screen.getByLabelText(/Transaction Type/i)).toBeInTheDocument();
//       expect(screen.getByLabelText(/Total Orders/i)).toBeInTheDocument();
//       expect(screen.getByLabelText(/Total Order Value/i)).toBeInTheDocument();
//       expect(screen.getByLabelText(/Gross Margin/i)).toBeInTheDocument();
//     });

//     it("renders a submit button", () => {
//       const { getByText } = render(<AddProduct />);
//       expect(screen.getByText("Submit")).toBeInTheDocument();
//     });
//   });

//   //   to check the validation of the form, I have used the following code:
//   describe("Form behaviour", () => {
//     it("validate user inputs, and provides error messages", async () => {
//       const { getByTestId, getByText } = render(<validate />);

//       await act(async () => {
//         fireEvent.change(screen.getByLabelText(/brand/i), {
//           target: { value: "" },
//         });

//         fireEvent.change(screen.getByLabelText(/Transaction Type/i), {
//           target: { value: "" },
//         });
//         fireEvent.change(screen.getByLabelText(/Total Orders /i), {
//           target: { value: "" },
//         });
//         fireEvent.change(screen.getByLabelText(/Total Order Value /i), {
//           target: { value: "" },
//         });
//         fireEvent.change(screen.getByLabelText(/Gross Margin /i), {
//           target: { value: "" },
//         });
//       });

//       await act(async () => {
//         fireEvent.submit(screen.getByTestId("form"));
//       });

//       expect(screen.getByText("Brand is Reuired")).toBeInTheDocument();
//       expect(screen.getByText("Transaction is Required")).toBeInTheDocument();
//       expect(screen.getByText("Total Order is Required")).toBeInTheDocument();
//       expect(
//         screen.getByText("Total Order Value is Required")
//       ).toBeInTheDocument();
//       expect(screen.getByText("Gross Margin is Required")).toBeInTheDocument();
//     });

//     it("should submit when form inputs contain text", async () => {
//       const { getByTestId, queryByText } = render(<AddProduct />);

//       await act(async () => {
//         fireEvent.change(screen.getByLabelText(/brand/i), {
//           target: { value: "" },
//         });

//         fireEvent.change(screen.getByLabelText(/Transaction Type/i), {
//           target: { value: "" },
//         });
//         fireEvent.change(screen.getByLabelText(/Total Orders /i), {
//           target: { value: "" },
//         });
//         fireEvent.change(screen.getByLabelText(/Total Order Value/i), {
//           target: { value: "" },
//         });
//         fireEvent.change(screen.getByLabelText(/Gross Margin/i), {
//           target: { value: "" },
//         });
//       });

//       await act(async () => {
//         fireEvent.submit(screen.getByTestId("form"));
//       });

//       expect(screen.getByText("Brand is Reuired")).toBeInTheDocument();
//       expect(screen.getByText("Transaction is Required")).toBeInTheDocument();
//       expect(screen.getByText("Total Order is Required")).toBeInTheDocument();
//       expect(
//         screen.getByText("Total Order Value is Required")
//       ).toBeInTheDocument();
//       expect(screen.getByText("Gross Margin is Required")).toBeInTheDocument();
//     });
//   });

//   //   submittimg the form works succesfully or not, I have used the following code:

//   describe("user logs in successfully and token added to localstorage", () => {
//     it("allows the user to login successfully", async () => {
//       // mock window.fetch for the test
//       const UserResponse = { token: "user_token" };

//       jest.spyOn(window, "fetch").mockImplementationOnce(() => {
//         return Promise.resolve({
//           json: () => Promise.resolve(UserResponse),
//         });
//       });

//       // Render the Login component
//       const { getByTestId } = render(<AddProduct />);

//       // fill out the form
//       await act(async () => {
//         fireEvent.change(screen.getByLabelText(/brand/i), {
//           target: { value: "" },
//         });

//         fireEvent.change(screen.getByLabelText(/Transaction Type/i), {
//           target: { value: "" },
//         });
//         fireEvent.change(screen.getByLabelText(/Total Orders /i), {
//           target: { value: "" },
//         });
//         fireEvent.change(screen.getByLabelText(/Total Order Value/i), {
//           target: { value: "" },
//         });
//         fireEvent.change(screen.getByLabelText(/Gross Margin/i), {
//           target: { value: "" },
//         });
//       });

//       //Submit the form
//       await act(async () => {
//         fireEvent.submit(screen.getByTestId("form"));
//       });

//       // alert to show up before continuing with our assertions.
//       // Expect alert to be success
//       const alert = await screen.findByRole("alert");
//       expect(alert).toHaveTextContent(/congrats/i);

//       // Expect local token to be set
//       expect(window.localStorage.getItem("token")).toEqual(UserResponse.token);
//     });
//   });
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
