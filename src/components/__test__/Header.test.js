import { render, screen,fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../uttils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
test ("should load header Component with a login button",()=>{
    render(
    <BrowserRouter>
    <Provider store = {appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
        );
    const logInButton = screen.getByText("Login");

    expect(logInButton).toBeInTheDocument();

});
test("should load cart component with a cart (0 items)", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Use a regex matcher to find "Cart (0 items)" regardless of potential spacing or other variations
  const cartText = screen.getByText("Cart(0 items)"); 
  expect(cartText).toBeInTheDocument(); // Assert that the cart text is in the document
});
test ("should change Login to Logout on click",()=>{
    render(
    <BrowserRouter>
    <Provider store = {appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
        );
    const logInButton = screen.getByRole("button",{name: "Login"});
    
    fireEvent.click(logInButton);

    const logoutButton = screen.getByRole("button",{name: "Logout"});
    expect(logoutButton).toBeInTheDocument();

});