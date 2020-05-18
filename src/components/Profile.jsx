import React from 'react';


function Profile(){
  return(
    <div>
      <img id="profilepic" src="./media/profile.png" alt="Tim Jones"/><br/>

      <div className="name-card">
        <h3>Tim Jones</h3>
        <h4>Software Developer</h4>
      </div>

      <div className="social-links">
        <a href="https://www.linkedin.com/in/tim-jones-424555193/" className="fab fa-linkedin fa-3x"><span></span></a>
        &nbsp;
        <a href="https://github.com/timjonez" className="fab fa-github-square fa-3x"><span></span></a>
      </div>
    </div>
  )}

export default Profile;
