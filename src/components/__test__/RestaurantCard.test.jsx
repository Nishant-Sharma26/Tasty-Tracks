import MOCK_DATA from "../mock/RestaurantCardMock.json"
import { render,screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import "@testing-library/jest-dom"
test("should render Restaurant component with props Data",()=>{
    render(<RestaurantCard resData = {MOCK_DATA}/>);

    const name = screen.getByText("Theobroma");
    expect(name).toBeInTheDocument();
});