import React from 'react';
import { object } from 'prop-types';

const EmailLink = ({ email }) => {
  // Split the email into user and domain parts
  const [user, domain] = email.split('@');
  
  return (
    <li>
      <i className="fa fa-envelope"></i>
      <a 
        href={`mailto:${user}@${domain}`}
        onClick={(e) => {
          e.preventDefault();
          window.location.href = `mailto:${user}@${domain}`;
        }}
      >
        {`${user}@${domain}`}
      </a>
    </li>
  );
};


const Profile = props => {
  const { profileData} = props
  return (
    <div>
      <div className="profileImg"><img role="presentation" className="img-circle center-block" src={profileData.picture} width="200" alt="profile pic" /></div>
      <h1 className="text-center">{profileData.name}</h1>
      <h2 className="text-center">{profileData.label}</h2>
      <div className="divider"></div>
      <ul className="contact-links text-center">
        <li><i className="fa fa-location-arrow"></i>{profileData.location.city}, {profileData.location.countryCode}</li>
        <EmailLink email={profileData.email} />
      </ul>
      <div className="divider"></div>
      <ul className="profileLinks text-center">
        <li><a className="fa fa-linkedin-square fa-2x" href={'https://linkedin.com/in/'+profileData.profiles[0].username}><span className="sr-only">twitter</span></a></li>
        <li><a className="fa fa-github fa-2x" href={'https://github.com/'+profileData.profiles[1].username}><span className="sr-only">github</span></a></li>
      </ul>
      <div className="divider"></div>
      <p className="small-text">Built using <a href="https://facebook.github.io/react/">React</a> components and a <a href="https://jsonresume.org/schema/">JSON Resume Schema</a>. Based on the personal resume website by <a href="https://github.com/freaksauce/jonbloomer.com.au">Jonathan Bloomer</a>.</p>
    </div>
  )
};

Profile.propTypes = {
  profileData: object.isRequired
}

export default Profile;
