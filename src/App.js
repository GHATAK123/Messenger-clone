import React, { useState, useEffect } from 'react';
import './App.css';
import {FormControl,InputLabel,Input } from "@material-ui/core";
import Message from './Message';
import db from './firebase';
import firebase from "firebase";
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
function App() {
  const [input,setInput]=useState('');
  const [messages,setMessages]=useState([]);
  const [username,setUsername]=useState('');

  useEffect(()=>{
    db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot => {setMessages(snapshot.docs.map(doc => ({id:doc.id,message:doc.data()})))})
  },[])

  useEffect(()=>{
    setUsername(prompt("Please enter your name"));
  },[])
  
  const sendMessage = (event) => {
        event.preventDefault();

        db.collection("messages").add({
          message:input,
          username:username,
          timestamp:firebase.firestore.FieldValue.serverTimestamp()
        })
  
        setInput('');   
  }
  return (
    <div className="App">
    <img alt="logo" src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" />
    <h2>Welcome {username}</h2>
    <form>
    <FormControl id="app__form">
  <InputLabel >Enter a messages...</InputLabel>
  <Input value={input} onChange={event => setInput(event.target.value)} />
  <IconButton disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>

    <SendIcon />
  </IconButton>

</FormControl>
    

    </form>
    <FlipMove>
    {
      messages.map(({id,message}) => (
        <Message key={id} username={username} message={message} />
      ))
    }
    </FlipMove>
    
    
    </div>
  );
}

export default App;
