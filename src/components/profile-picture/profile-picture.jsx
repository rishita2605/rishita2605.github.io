import '../components.css';
import { useState, useEffect } from 'react';
function ProfilePicture() {
  return(  
  <div className="profile">
    <div className='profile__picture'>
      <img src='https://user-images.githubusercontent.com/64982040/197331589-4f01400f-4ecf-4cad-923b-1b5cdd2fa453.jpg' alt='profile'></img>
      <div className="profile__picture__text"></div>
    </div>
  </div>
  );
}
export default ProfilePicture;
