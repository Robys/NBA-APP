import Link from "next/link"


export const getStaticPaths = async () =>{
    const response = await fetch('https://www.balldontlie.io/api/v1/games')
    const data = await response.json()

    const paths = data.data.map(p => {
        return {params : {id : p.id.toString()}}
    })

    return {
        paths,fallback:false
    }
}

export const getStaticProps = async (context) =>{

    const id = context.params.id

    const response = await fetch('https://www.balldontlie.io/api/v1/games/'+id)
    const data = await response.json()

    return{
        props: {data:data}
    }
}

const Game = ({data}) =>{
    return (
        <div>
        <h2>{data.home_team.full_name} - {data.home_team_score} vs {data.visitor_team_score} - {data.visitor_team.full_name}</h2>
        <h3>{data.date}</h3>
        <p>{data.season} / {data.period}</p>

    </div>
    )
}

export default Game