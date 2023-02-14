import Link from "next/link"

export const getStaticPaths = async () =>{
    const response = await fetch('https://www.balldontlie.io/api/v1/players')
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

    const response = await fetch('https://www.balldontlie.io/api/v1/players/'+id)
    const data = await response.json()

    return{
        props: {data:data}
    }
}

const TeamInfo = ({data}) =>{
    return (<div>
        <Link href={'/teams/'+ data.id}>team :  {data.full_name}</Link>
        <p>abbreviation : {data.abbreviation}</p>
        <p>city : {data.city}</p>
        <p>conference : {data.conference}</p>
        <p>division: {data.division}</p>
    </div>)
}


const Player = ({data}) =>{
    return (
        <div>
            <h3>nome : {data.first_name}</h3>
            <h4>sobrenome : {data.last_name}</h4>
            <p>posição: {data.position}</p>
            <TeamInfo data={data.team}/>
            <hr/>

        </div>
    )
}

export default Player