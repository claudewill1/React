import React, {useState,useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Shop() {
    
    useEffect(()=> {
        fetchItems();
    },[])

    const fetchItems = async () =>{
        const data = await fetch('https://fortnite-api.theapinetwork.com/store/get')
        const items = await data.json();
        console.log(items);
    }
    
    return(
        <div>

        </div>
    )
}

export default Shop;