import Footer from "./Footer";
import Navbar from "./Navbar";

function Wrapper(props) {
    return (
      <div className="App">
       <Navbar/>
         {props.children}
       <Footer/>
      </div>
    );
  }
  
  export default Wrapper;
  