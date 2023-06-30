import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Dream Homes!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/property-6.jpg'
              text='Find your dream home with us'
              label='Luxurious'
              path='/services'
            />
            <CardItem
              src='images/property-6.jpg'
              text='Find your dream home with us'
              label='Luxurious'
              path='/services'
            />
            <CardItem
              src='images/property-3.jpg'
              text='Unlock the door to your new home'
              label='Spacious'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/property-1.jpg'
              text='Experience luxury living'
              label='Modern'
              path='/services'
            />
            <CardItem
              src='images/property-7.jpg'
              text='Discover your perfect property'
              label='Scenic'
              path='/products'
            />
            <CardItem
              src='images/property-8.jpg'
              text='Building better communities, one home at a time'
              label='Classic'
              path='/sign-up'
            />
            <CardItem
              src='images/property-8.jpg'
              text='Building better communities, one home at a time'
              label='Classic'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
