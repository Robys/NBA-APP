import NavBar from "./NavBar"

const Layout = ({children}) =>{
    return(
        <div className="component">
        <NavBar/>
        {children}
        </div>
    )
}

export default Layout