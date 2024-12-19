import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CardComponent({title,text,imgSrc,buttonLabel,discount,price}) {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imgSrc} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
              {text}
          </Card.Text>
          <Button variant="primary">{discount? <><del>{discount}</del> {price}</> : price}</Button>
        </Card.Body>
      </Card>
    );
  }

export default CardComponent;
