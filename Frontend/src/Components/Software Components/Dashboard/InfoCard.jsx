import {useState} from "react";

function InfoCard(){
  const [infocard] = useState([
    {
      title: 'Personal Information',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit ducimus fuga itaque, ex natus quaerat deserunt asperiores dolore eligendi doloremque?Name: John Doe'
    },
    {
      title: 'Emergency Contact',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit ducimus fuga itaque, ex natus quaerat deserunt asperiores dolore eligendi doloremque?Name: John Doe'
    },
    {
      title: 'Bank Information',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit ducimus fuga itaque, ex natus quaerat deserunt asperiores dolore eligendi doloremque?Name: John Doe'
    },
    {
      title: 'Family Information',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit ducimus fuga itaque, ex natus quaerat deserunt asperiores dolore eligendi doloremque?Name: John Doe'
    },
    {
      title: 'Qualification',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit ducimus fuga itaque, ex natus quaerat deserunt asperiores dolore eligendi doloremque?Name: John Doe'
    },
    {
      title: 'Experience',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit ducimus fuga itaque, ex natus quaerat deserunt asperiores dolore eligendi doloremque?Name: John Doe'
    }
  ])
  return(
    <div>
      <section>
    <div className="container-card">
      <div className="infocard">
        {
          infocard.map((card, i) => (

            <div key={i}className="card">
          <h3>
            { card.title}
          </h3>
          <p>
            {card.text}
          </p>
        </div>
          ))
        }
        </div>
      </div>
      </section>
    </div>

  );
}
export default InfoCard