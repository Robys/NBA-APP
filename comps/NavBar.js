import Link from 'next/link'

const NavBar = () =>{
    return (
        <nav>
            <div className='logo'>LOGO</div>
            <ul>
                <li style={{textDecoration:"none",display:"inline-block", marginLeft:"10px"}}>
                    <Link href="/">Home</Link>
                </li>
                <li style={{textDecoration:"none",display:"inline-block" , marginLeft:"10px"}}>
                    <Link href="/players">Players</Link>
                </li>

                <li style={{textDecoration:"none",display:"inline-block", marginLeft:"10px"}}>
                    <Link href="/teams">Teams</Link>
                </li>

                <li style={{textDecoration:"none",display:"inline-block", marginLeft:"10px"}}>
                    <Link href="/matches">Matchs</Link>
                </li>


            </ul>

        </nav>
    )
}

export default NavBar