import Card from 'react-bootstrap/Card';

function CategoryCard({fileName, categoryName}) {
  return (
    <div>
        <Card className="bg-dark text-white" style={{height: "200px", width:"200px"}}>
      <Card.Img src={`${fileName}`} alt="Card image" height={"200px"} width={"200px"} />
      <Card.ImgOverlay>
      </Card.ImgOverlay>
      
    </Card>
    <h6 className='mt-2'>{categoryName}</h6>
    
    </div>
    
    
  );
}

export default CategoryCard;