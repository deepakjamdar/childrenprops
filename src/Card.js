
function Card(props) {

    const cardStyle = {
        width: '50%',
        margin: '10px auto 30px auto',
        boxShadow: '0 5px 10px 2px rgba(0,0,0,0.25)',
        padding: '20px'
    }

    return (
        <div style={cardStyle}>
            {props.children}
        </div>
    )

}

export default Card;