import React from 'react'
import './clientReview.css';
import { BiIcons, IoIcons } from '../../icon';
import myImage from '../../assets/myImage03.png';


const clientData = [
  {
    client_img:"https://i.ibb.co/N625Fqr/avatar-2.jpg",
    client_name: "Cindy Ashley",
    client_role: "Strategist",
    client_say: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ullam sunt natus voluptatum animi distinctio cum quia magni ducimus eligendi libero, corporis repellendus? Ad, quidem tenetur quasi, officiis itaque expedita qui maxime hic quod obcaecati libero",
    quote: <BiIcons.QuoteLeft />,
    IconFilled: <IoIcons.FilledStar />,
    IconOutline: <IoIcons.OutlineStar />,
  },
  {
    client_img:"https://i.ibb.co/d7MxYn5/avatar-1.jpg",
    client_name: "Clara Morgan",
    client_role: "Marketer",
    client_say: " Quae, blanditiis! Est minima necessitatibus hic? Excepturi, eligendi quam. Corporis vitae delectus quae rerum nihil dignissimos deserunt, fuga consequuntur?",
    quote: <BiIcons.QuoteLeft />,
    IconFilled: <IoIcons.FilledStar />,
    IconOutline: <IoIcons.OutlineStar />,
  },
  {
    client_img:"https://i.ibb.co/7QpPLYg/avatar-3.jpg",
    client_name: "Adam Smith",
    client_role: "Business Executive",
    client_say: "Tenetur id, ipsa possimus aliquam quis unde excepturi delectus distinctio, sit, facilis fuga repellendus. Magni, laudantium. Soluta ab adipisci iure, cumque repellat porro temporibus at. Quam voluptatibus, autem neque mollitia repudiandae asperiores voluptatem error explicabo earum placeat odit. Fuga nesciunt eum eaque repellendus, excepturi modi!",
    quote: <BiIcons.QuoteLeft className="icon_quote"/>,
    IconFilled: <IoIcons.FilledStar />,
    IconOutline: <IoIcons.OutlineStar />,
  },
]


function ClientReview() {

  const trunct_word = (words, n) => {
      if(words.length > n){
        const trunc = words.substring(0, n).concat("...");
        return trunc;
      }
      return words;
  }
  return (
    <div className="client__review__container">
        <div className="client__review__heading">
            <h2>What our client says</h2>
        </div>
        <div className="client__review__wrapper">
            {clientData.map((client, index)=>(
            <div className="client__review__sm__cont" key={index}>
                <div className="client__info">
                  <div className="client__info__item">
                    <div className="client__img">
                      <img src={client.client_img} alt="my__Image" />
                      <span className="quote">{client.quote}</span>
                    </div>
                    <div className="client__cred">
                      <p>{client.client_name}</p>
                      <span>{client.client_role}</span>
                    </div>
                  </div>
                  <div className="client__ratings">
                    <span className="rating">{client.IconFilled}</span>
                    <span className="rating">{client.IconFilled}</span>
                    <span className="rating">{client.IconFilled}</span>
                    <span className="rating">{client.IconFilled}</span>
                    <span className="n_rating">{client.IconOutline}</span>
                  </div>
                </div>
                <div className="client__says">
                  <p>{trunct_word(client.client_say,80)}</p>
                </div>
              </div>
            ))}
        </div>
    </div>
  )
}

export default ClientReview