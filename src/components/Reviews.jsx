import React from 'react'
import styled from 'styled-components'
import {Reviews as reviews} from '../data'
import Review from './Review'

const Container = styled.div`
    display:flex;
    flex-direction:column;
    padding:20px;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    
`

const Reviews = ()=>{
    
    return(
        <Container>
        {reviews.map((item)=>(
            <Review item={item} key={item.id}/>
        ))}

    </Container>
    )
}
export default Reviews