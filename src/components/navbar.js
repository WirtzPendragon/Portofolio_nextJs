import "@/styles/globals.css";
import HamburgerMenu from "./hamburgerMenu";

export default function Navbar({ children }) {
    return (
      <>
      
      <div className="flex flex-row w-screen h-14 items-center justify-around font-inter font-medium text-lg bg-appGreen-900 text-primary px-4">
        <p>ThePixelWebsmith</p>
        <span className="flex ">
        <a href="#" className="hover:scale-125 m-5"> About</a>
        <a href="#" className="hover:scale-125 m-5"> Project</a>
        <a href="#" className="hover:scale-125 m-5"> Contact</a>
        </span>        
      </div>
      <div>{ children }</div>
      </>
    );
  }