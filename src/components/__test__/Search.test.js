import { fireEvent, render,screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mock/ResListMock.json"
import { BrowserRouter } from "react-router-dom";
import { act } from "react";
import "@testing-library/jest-dom"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
});

test("should Search ResList for burger text input",async ()=>{
    await act(async()=>render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter>)
    );

    const searchInput = screen.getByLabelText("Search");
    expect(searchInput).toBeInTheDocument();
     
    const cardBeforeSearch = screen.getAllByTestId("res-card");

    expect(cardBeforeSearch.length).toBe(20);
    
    fireEvent.change(searchInput,{target:{value:"burger"}});

    const cards = screen.getAllByTestId("res-card");

    expect(cards.length).toBe(1); 
});

test("should check TopRatedRestaurant button works", async()=>{
    await act(async()=>render(
        <BrowserRouter>
        <Body/>
        </BrowserRouter>)
        );

    const TopRatedRestaurant = screen.getByRole("button",{name:"Top Rated Restaurant"});

    fireEvent.click(TopRatedRestaurant);

    const TopRatedResList = screen.getAllByTestId("res-card");
    expect(TopRatedResList.length).toBe(13);
});
