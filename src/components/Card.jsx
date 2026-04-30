import "./Card.css"

export default function Card({ title, description, image, alt, address }) {
   const directionUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
    return (
        <div className="card">
            <img src={image} alt={alt} className="card-image" />

            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>

        {address && (
        <a
          href={directionUrl}
          target="_blank"
          rel="noreferrer"
          className="direction-btn"
        >
          Get Directions
        </a>
      )}  
            </div>
        </div>
    )
}