import React from "react";
import { ProfileContainer } from "./style";
import noimg from "../../assets/images/noUser.webp";

const users = [
  { name: "Davr Leader", gmail: "davr.leader@gmail.com", img: noimg },
];
const Profile = () => {
  const [user] = users;
  return (
    <ProfileContainer>
      <ProfileContainer.Img src={user?.img || noimg} />
      <div>
        <ProfileContainer.Name>
          {user?.name || "Davr Leader"}
        </ProfileContainer.Name>
        <ProfileContainer.Email>
          {user?.email || "davr.leader@gmail.com"}
        </ProfileContainer.Email>
      </div>
    </ProfileContainer>
  );
};

export default Profile;
