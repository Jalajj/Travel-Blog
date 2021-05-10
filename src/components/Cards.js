import React from 'react';
import './Cards.css';
import CardItem from './CardItem';



function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src= "Home1.jpg"
              text='Explore Yourself while Travelling the World And know who you really are. '
              label='Adventure'
              path='/services'
              className= "card1"
            />
            <CardItem
              src='Home.jpg'
              text='Travel through the hidden gems and giagantic waterfalls'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='Home2.jpg'
              text='Unpack the natural beauty of world and discover yourself '
              label='Mystery'
              path='/services'
            />
            <CardItem
              
              src=' img-9.jpg'
              text='Stand on the top of the largest peaks of the world in Himalayas'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='img-home.jpg'
              text='Lets go on a bike trip from Manali to ladakh '
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;