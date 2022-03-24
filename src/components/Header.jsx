import React from 'react'
import styled from 'styled-components'
import {Users} from '../data'


const Container = styled.div`
    height: 80px;
    width:95%;
    background-color:white;
    margin:auto;
    
`
const Wrapper = styled.div`
    padding: 10px  20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Icon = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`
const Image = styled.img`
    width: auto;
    height: 50px;
    marginLeft:50px;
`
const Left = styled.div`
    flex: 1;
    display:flex;
   
    align-items: center;
`

const Right = styled.div`
    flex:1;
    display:flex;
    align-items: center;
    justify-content: flex-end;

`
const Name = styled.h2`
    font-size: 25px;
    font-weight:400;

`
const Header= ()=>{
    
    return(
        <Container>
            <Wrapper>
                <Left>
                    <Image style={{marginLeft:"80px"}} src="data:image/png;base64,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" />
                   
                </Left>
                <Right>
                    <Icon style={{marginRight:"7px"}}src={Users[3].profilePicture}/>
                    <Name style={{marginRight:"80px"}}>{Users[3].username}</Name>

                </Right>
            
            </Wrapper>
            
        </Container>
    )
}
export default Header