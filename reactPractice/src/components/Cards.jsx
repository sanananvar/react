import CardComponent from "./Card";
const cardsData = [
    {
      title: 'Card 1',
      text: 'This is the first card.',
      imgSrc: 'https://via.placeholder.com/150',
      buttonLabel: 'Learn More',
      price:30,
    },
    {
      title: 'Card 2',
      text: 'This is the second card.',
      imgSrc: 'https://via.placeholder.com/150',
      buttonLabel: 'Explore',
      price:30,
      discount:20
    },
    {
      title: 'Card 3',
      text: 'This is the third card.',
      imgSrc: 'https://via.placeholder.com/150',
      buttonLabel: 'Buy Now',
      price:30,
    },   {
        title: 'Card 1',
        text: 'This is the first card.',
        imgSrc: 'https://via.placeholder.com/150',
        buttonLabel: 'Learn More',
      },   {
        title: 'Card 1',
        text: 'This is the first card.',
        imgSrc: 'https://via.placeholder.com/150',
        buttonLabel: 'Learn More',
        price:30,
        discount:20
      },   {
        title: 'Card 1',
        text: 'This is the first card.',
        imgSrc: 'https://via.placeholder.com/150',
        buttonLabel: 'Learn More',
        price:30,
      },   {
        title: 'Card 15',
        text: 'This is the first card.',
        imgSrc: 'https://via.placeholder.com/150',
        buttonLabel: 'Learn More',
        price:30,
        discount:20
      },
  ];
function Cards() {
    return (
      <div className="container d-flex flex-wrap gap-3 p-3">
        {cardsData.map((card, index) => (
          <CardComponent
            key={index}
            title={card.title}
            text={card.text}
            imgSrc={card.imgSrc}
            buttonLabel={card.buttonLabel}
            discount={card.discount
            }
            price={card.price}
          />
        ))}
      </div>
    );
  
  }
export default Cards