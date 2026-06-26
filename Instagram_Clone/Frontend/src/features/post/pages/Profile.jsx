import React from "react";
import '../style/profile.scss';

const Profile = () => {
  return (
    <div>
      <main>
        <div className="profile-container">
          <div className="information">
            <div className="top">
              <img className='profilePic' src="https://images.pexels.com/photos/14789916/pexels-photo-14789916.png" alt="profileImage" />
              <div className="profile-info">
                <div className="name">
                  <h1>Aditya kumar </h1>
                </div>
                <div className="info">
                  <div className="post infoBox">
                    <p>1</p>
                    <p>posts</p>
                  </div>
                  <div className="followers infoBox">
                    <p>1,121</p>
                    <p>followers</p>
                  </div>
                  <div className="following infoBox">
                    <p>563</p>
                    <p>following</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom">
              <p>Bio</p>
              <div className="button">
                <button>Edit profile</button>
                <button>Share profile</button>
              </div>
              <div className="memories">
                <div className="add-memory">+</div>
                <p>New</p>
              </div>
            </div>
          </div>
          <div className="profile-post">
            <div className="post-box">
              <img src='https://i.pinimg.com/webp/736x/93/1d/1a/931d1ab629a6cbe0ed9edf37c7fbf9da.webp'></img>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile
