import RestaurantMenu from "../RestaurantMenu"; // Ensure the correct path
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react"; // Correct import for act() in React 18
import "@testing-library/jest-dom"; // Add jest-dom for matchers like 'toBeInTheDocument'
import MOCK_DATA from "../mock/ResMenuMock.json"; // Ensure the correct mock data path
import { Provider } from "react-redux";
import appStore from "../../uttils/appStore";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

test("should load restaurant menu", async () => {
  
  await act(async () => {
    render(
    <BrowserRouter>
    <Provider store = {appStore}>
    <Header/>
    <RestaurantMenu />
    <Cart/>
    </Provider>
    </BrowserRouter>);

});

    const accordianHeader =  screen.getByText("Recommended (11)");

    fireEvent.click(accordianHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(11);

    const addBtns = screen.getAllByRole("button",{name:"Add +"})
    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart(1 items)")).toBeInTheDocument();
    
    fireEvent.click(addBtns[1]);

    expect(screen.getByText("Cart(2 items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(13);

    fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}));

    expect(screen.getByText("Cart is empty. Add Items to cart"));

});
