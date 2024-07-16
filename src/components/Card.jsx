const Card = ({card})=>{
    const {tagline, description, buttonText } = card
    return (
        <article className="card">
            <div className="card-main-section">
                <h1>{tagline}</h1>
                <p>{description}</p>
            </div>
            <div className="card-button-section">
                <button>{buttonText}</button>
            </div>
        </article>
    )
}

    
    export default Card;