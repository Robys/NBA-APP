export const getStaticProps = async () =>{

    const response = await fetch('https://www.balldontlie.io/api/v1/teams')
    const data = await response.json()

    return{
        props: {data:data}
    }
}

const Teams = ({data}) =>{
    return (
        <div>
            <h2>All Teams</h2>

                {data.data.map(team => 
                <div>
                    <h3>{team.full_name}</h3>
                    <p>abbreviation : {team.abbreviation}</p>
                    <p>city : {team.city}</p>
                    <p>conference : {team.conference}</p>
                    <p>division: {team.division}</p>
                </div>
                    )}
        </div>
    )
}

export default Teams