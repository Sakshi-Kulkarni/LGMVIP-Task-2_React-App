import './Card.css'

const Card = ({ userid, first_name, last_name, email, image }) => {
    return (
        <div classname="body"> 
              <div className="card">
                <img className="card-img-top" src={image} alt="user card" />
               
                        <h5 className="card-title">{first_name+" "+last_name}</h5>
                        <p className="email">{email}</p>
                        <h6 className="card-id">{userid}</h6>
                    
            </div>
            
        </div>
        )
}
export default Card;
