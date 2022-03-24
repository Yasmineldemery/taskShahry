import React from 'react'
import styled from 'styled-components'
import {Users, Reviews} from '../data'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp , faStar, faThumbsDown} from "@fortawesome/free-solid-svg-icons";
import {faStar as starR} from "@fortawesome/free-regular-svg-icons";
import { TextField } from '@material-ui/core';
import { useState, useEffect } from 'react';


const Container = styled.div`

    margin: 5px;
    border:1px;
    width: 800px;
    background-color: white;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    margin-bottom:50px;
    border-radius:2%
    
`

const Icon = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom:10px;
    margin-top:5px;
`
const IconComment = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom:10px;
`


const Name = styled.h2`
    font-size: 20px;
    font-weight:400;
    color:#0F52BA;
    text-align: center;
    margin-bottom:5px;

`
const Date = styled.div`
    font-size: 11px;
    color:grey;
    text-align: center;
    margin-bottom:5px;

`
const Your = styled.div`
    font-size: 13px;
    color:black;
    font-weight:100;
    text-align: left;
    margin-bottom:5px;
    margin-bottom:10px;
`

const Title = styled.h1`
    font-size: 30px;
    font-weight:400;
    color:black;
    text-align: center;
    margin-bottom:15px;

`
const Desc = styled.div`
    font-size: 11px;
    color:black;
    margin-left:60px;
    margin-right:60px;
    text-align: left;
    margin-bottom:10px;

`
const CommentBox = styled.form`
    width:650px;
    background-color:#D3D3D3;
    margin-bottom:10px;

`


const Box = styled.div`
    border:1px solid grey;
    display:flex;
    width:180px;
    height:30px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom:15px;

`
const Thumbs = styled.div`
    border:1px;
    flex:1;
    display: flex;
    align-items: left;
    justify-content: left;
  

`
const Stars = styled.div`
    flex:3;
    display: flex;
    align-items: center;
    justify-content: center;

`
const Rating = styled.div`
   margin-left:5px;

`
const Button = styled.button`
   margin:auto;
   margin-bottom:10px;
   background-color:#3CB371;
   color:white;
   border:none;
   width:150px;
   height:35px;
   border-radius:2%;
   cursor:pointer;
   



`

const Comment = styled.div`
    font-size: 11px;
    color:black;
    width:650px;
    margin-left:60px;
    margin-right:60px;
    text-align: left;
    margin-bottom:10px;
    background-color:#D3D3D3;
    padding:15px;

`

const Review= ({item})=>{
    const [comment, setCommment] = useState('')
    useEffect(()=>{
       console.log('hi ')

    },[item.comment])
    const handleComment = (e)=>{
        setCommment(e.target.value)
        console.log(comment)
    }
    const addComment=()=>{
        item.comment = comment
        item.commentUser = 1
        console.log('byeeeee')
        console.log(item.comment)
    }
    
    return(
        <Container>
            <Icon src={Users.filter((u) => u.id === item?.userId)[0].profilePicture}/>
            <Name>{Users.filter((u) => u.id === item?.userId)[0].username}</Name>
            <Date>{item.date}</Date>
            <Title>{item.title}</Title>
            <Box>
                {item.stars>=4 ?
                <Thumbs style={{backgroundColor:"#7CFC00"}}>
                    <FontAwesomeIcon style={{marginLeft:"9px", marginTop:'5px'}}icon={faThumbsUp}/>
                </Thumbs> :  
                <Thumbs style={{backgroundColor:"red"}}>
                    <FontAwesomeIcon style={{marginLeft:"9px", marginTop:'5px'}}icon={faThumbsDown}/>
                </Thumbs>}
             
                <Stars>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={starR} />
                <Rating>{item.stars}/5</Rating>
                </Stars>
            
            

            </Box>
            <Desc>{item.desc}</Desc>
            <div>
            
            </div>
            
            {item.comment !=='' ? 
            <><Comment>{item.comment}</Comment>
             <IconComment src={Users.filter((u) => u.id === item?.commentuser)[0].profilePicture}/> 
             </>: 
             <>
             
            <Your>Your comment</Your>
            <CommentBox  >
                    <TextField
                    style={{width:'100%'}}
                        size="small"
                        variant="outlined"
                        className="post__input"
                        onChange={handleComment}
                    />
                   
            </CommentBox>
            
            <Button onClick={addComment}>Add Comment</Button>
            </>
             }  
        </Container>
    )
}
export default Review