
export default function Navbar({ children }) {
    return (
      <>
      
      <div className="flex flex-row w-screen h-14 items-center justify-around font-inter font-medium text-xs lg:text-lg bg-appGreen-900 text-primary px-4">
        <p>Aditya Wiranata</p>
        <span className="flex ">
        <a href="#" className="hover:scale-125 my-5 mr-2"> About</a>
        <a href="#" className="hover:scale-125 my-5 mr-2"> Project</a>
        <a href="#" className="hover:scale-125 my-5 mr-2"> Contact</a>
        </span>        
      </div>
      <div>{ children }</div>
      </>
    );
  }