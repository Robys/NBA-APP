
export const getStaticPaths = async () =>{
    const response = await fetch('https://www.balldontlie.io/api/v1/teams')
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

    const response = await fetch('https://www.balldontlie.io/api/v1/teams/'+id)
    const data = await response.json()

    return{
        props: {data:data}
    }
}

const Team = ({data}) =>{
    return (
        <div>
        <h2>{data.full_name}</h2>
        <p>abbreviation : {data.abbreviation}</p>
        <p>city : {data.city}</p>
        <p>conference : {data.conference}</p>
        <p>division: {data.division}</p>
    </div>
    )
}

export default Team