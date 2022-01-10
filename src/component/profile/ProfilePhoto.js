import React from "react";
import myProfilePhoto from "./srcImage.png";
function ProfilePhoto() {
  return (
    <div>
      <img src={myProfilePhoto} width={171} height={180} />
    </div>
  );
}

export default ProfilePhoto;
