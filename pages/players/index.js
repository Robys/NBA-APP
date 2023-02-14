import Link from "next/link"

export const getStaticProps = async () =>{

    const response = await fetch('https://www.balldontlie.io/api/v1/players')
    const data = await response.json()

    return{
        props: {data:data}
    }
}

const Players = ({data}) =>{
    return (
        <div>
            <h2>All Players</h2>
            <ul>
            {data.data.map(player => 
            <li key={player.id}>
                <Link href={'/players/'+ player.id}>
                        {player.first_name} {player.last_name}
                </Link>

            </li>
                )}

            </ul>

        </div>
    )
}

export default Players