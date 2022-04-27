export const PlayNumber = props => (
    <button className="number" onClick={()=> 
        console.log('clicked')}> 
        {props.number}
    </button>
)

