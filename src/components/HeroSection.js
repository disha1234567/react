import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>Nest Nirvana</h1>
      <p>Find your place in the world with us</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={<video src='/videos/video-3.mp4' autoPlay loop muted />}
        >
          WATCH TRAILER <i className='btns' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
