import Button  from "@mui/material/Button";
const Contact = () =>{
    return (
        <div>
        <h1 className="font-bold text-3xl p-4 m-4">Contact us Page</h1>
        <form>
            <input type ="text" className="border border-black p-2 m-2" placeholder="name"/>
            <input type ="text" className="border border-black p-2 m-2" placeholder="contact"/>
            <Button
          variant="contained"
          sx={{ borderRadius: '20px' }}
          
        >
         Submit
        </Button>
        </form>
        </div>
    );
};

export default Contact