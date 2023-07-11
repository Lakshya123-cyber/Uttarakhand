import "./Destination.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>The Char Dhams of Uttarakhand</h1>
      <p>Do explore them once, they are worth!</p>

      <DestinationData
        className="first-des"
        heading="Kedarnath"
        text="Kedarnath Temple is a Hindu temple, one of the twelve jyotirlinga of Shiva. The temple is located on the Garhwal Himalayan range near the Mandakini river, in the state of Uttarakhand, India."
        img1="src/assets/images/kedarnath.jpg"
        img2="src/assets/images/k3.jpg"
      />
      <DestinationData
        className="first-des-reverse"
        heading="Gangotri"
        text="Gangotri is one of the four sites in the Chota Char Dham pilgrimage circuit. It is also the origin of the Ganges river and seat of the goddess Ganga. The river is called Bhagirathi at the source and acquires the name Ganga (the Ganges) from Devprayag onwards where it meets the Alaknanda."
        img1="src/assets/images/gangotri.jpg"
        img2="src/assets/images/gang.jpg"
      />
      <DestinationData
        className="first-des"
        heading="Yamunotri"
        text="Yamunotri, also Jamnotri, is the source of the Yamuna River and the seat of the Goddess Yamuna in Hinduism. It is situated at an altitude of 3,293 metres (10,804 ft) in the Garhwal Himalayas and located approximately 150 kilometers (93 mi) North of Uttarkashi, the headquarters of the Uttarkashi district in the Garhwal Division of Uttarakhand, India."
        img1="src/assets/images/yamunotri.jpg"
        img2="src/assets/images/yam.jpg"
      />
      <DestinationData
        className="first-des-reverse"
        heading="Badrinath"
        text="Badrinath is a town and nagar panchayat in Chamoli district in the state of Uttarakhand, India. It is a Hindu holy place, and is one of the four sites in India's Char Dham pilgrimage. It is also part of India's Chota Char Dham pilgrimage circuit and gets its name from the Badrinath Temple."
        img1="src/assets/images/badrinath.jpg"
        img2="src/assets/images/bad.jpg"
      />
    </div>
  );
};

export default Destination;
