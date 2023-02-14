import Link from "next/link"


export const getStaticProps = async () =>{

    const response = await fetch('https://www.balldontlie.io/api/v1/games')
    const data = await response.json()

    return{
        props: {data:data}
    }
}

const Matches = ({data}) =>{
    return (
        <div>
            <h2>Matches</h2>
            <div>
                {data.data.map(game => 
                    <div key={game.id}>
                        <Link href={'/matches/'+ game.id}>
                            {game.home_team.full_name} vs {game.visitor_team.full_name}
                        </Link>
                        <p>{game.date}</p>
                    </div>)}
            </div>
        </div>
    )
}

export default Matches