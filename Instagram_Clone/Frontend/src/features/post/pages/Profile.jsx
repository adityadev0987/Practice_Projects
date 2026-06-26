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
                  <div className="post">
                    <p>1</p>
                    <p>posts</p>
                  </div>
                  <div className="followers">
                    <p>1,121</p>
                    <p>followers</p>
                  </div>
                  <div className="following">
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
          <div className="profile-post"></div>
        </div>
      </main>
    </div>
  );
};

export default Profile
