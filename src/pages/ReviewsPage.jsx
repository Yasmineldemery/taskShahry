import Header from '../components/Header'
import Reviews from '../components/Reviews'
import styled from 'styled-components'
import { useState } from "react"
import Modal from 'react-modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
`

const Title = styled.h1`
  font-size: 50px;
  font-weight: 900;
  color: white;
  margin: auto;
  padding: 90px;
  padding-bottom:40px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Head = styled.div`
display: flex;
  
`
const Button = styled.button`
  margin: auto;
  margin-bottom: 10px;
  color: #3cb371;
  background-color: white;
  border: none;
  width: 150px;
  height: 35px;
  border-radius: 2%;
  cursor:pointer;
`
const Button2 = styled.button`
  margin: auto;
  margin-bottom: 10px;
  background-color: #3cb371;
  color: white;
  border: none;
  width: 150px;
  height: 35px;
  border-radius: 2%;
  cursor:pointer;
`
const Bdiv = styled.div`

display: flex;
align-items: center;
justify-content: center;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;
const ReviewsPage= ()=>{
  const [isOpen, setIsOpen]= useState(false)
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [stars, setStars] = useState();
  const handleClick = ()=>{
    setIsOpen(!isOpen)
  }
  const handleReview = ()=>{
    setIsOpen(!isOpen)
  }
    return(
        <Container>
             <Header />
      <div
        style={{
          backgroundImage:
            'url(' +
            'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' +
            ')',
          backgroundPosition: 'top',
          backgroundSize: '95% 30%',
          backgroundRepeat: 'no-repeat',
        
        }}
      >
        <Title>WHAT OUR USERS SAY ABOUT SHAHRY? </Title>
        <Bdiv>
        <Button onClick={handleClick}>ADD A REVIEW</Button>
        </Bdiv>
        <Modal
          isOpen={isOpen}
          onRequestClose={handleClick}
          style={{maxWidth:'200px',inlineSize:'fit-content'}}
        >
          <Head>
          <h2>Add A Review</h2>
          <div onClick={handleClick} style={{marginLeft:'700px'}}>
            <FontAwesomeIcon icon={faXmark} />
            </div>
            </Head>
            <Form>
          <Input
            placeholder="Rating"
            onChange={(e) => setStars(e.target.value)}
          />
          <Input
            placeholder="Review Title"
            onChange={(e) => setTitle(e.target.value)}
          />
           <Input
            placeholder="Review Details"
            onChange={(e) => setDetails(e.target.value)}
          />
          <Button2 onClick={handleReview} >
            Add a Review
          </Button2>
          
        </Form>
         
        </Modal>
        
        <Reviews />
      </div>
            
        </Container>
    )
}
export default ReviewsPage