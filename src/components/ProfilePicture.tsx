import React, { useState } from 'react';
import './ProfilePicture.css';

interface ProfilePictureProps {
  src?: string;
  alt?: string;
  size?: 'small' | 'medium' | 'large';
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ 
  src, 
  alt = "Profile Picture", 
  size = 'medium' 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  if (src) {
    return (
      <div 
        className={`profile-picture-container profile-picture-container--${size}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img 
          src={src} 
          alt={alt} 
          className={`profile-picture profile-picture--${size} ${isHovered ? 'profile-picture--hovered' : ''}`}
        />
        <div className={`profile-overlay ${isHovered ? 'profile-overlay--visible' : ''}`}>
          <span className="overlay-text">View Profile</span>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`profile-picture-container profile-picture-container--${size}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`profile-picture-placeholder profile-picture-placeholder--${size} ${isHovered ? 'profile-picture-placeholder--hovered' : ''}`}>
        <span className="placeholder-text">Add Photo</span>
        {isHovered && <span className="placeholder-hover-text">📷</span>}
      </div>
    </div>
  );
};

export default ProfilePicture; 