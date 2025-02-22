import { render , screen} from "@testing-library/react";
import Contact from "../Contacts";
import "@testing-library/jest-dom";

describe("contact us page Test case",()=>{
    test("Should load contact us component",()=>{

        render(<Contact/>);
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    });
    test("Should load button inside contact us component",()=>{
    
        render(<Contact/>);
    
        const button = screen.getByRole("button");
    
        expect(button).toBeInTheDocument();
    });
    test("Should load input name inside contact us component",()=>{
    
        render(<Contact/>);
    
        const inputName = screen.getByPlaceholderText("name");
    
        expect(inputName).toBeInTheDocument();
    });
    test("should loaded 2 input boxes on the contact component",()=>{
        render(<Contact/>)
        const inputBoxes = screen.getAllByRole("textbox");
        expect(inputBoxes.length).toBe(2);
        inputBoxes.forEach(input => {
            expect(input).toBeInTheDocument();
        });
    });
});
