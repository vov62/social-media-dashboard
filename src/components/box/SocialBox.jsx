import { socialMediaUsers } from "../../dataMock/dataMock";
import DataGrid from "../dataGrid/DataGrid";
import "./socialBox.scss";

const SocialBox = ({ data }) => {
  return (
    // <div className="SocialBox-container">
    //   {socialMediaUsers.map((user, idx) => (
    //     <div key={idx}>
    //       <div className="top">
    //         <div className="left">
    //           <h4>{user.SocialMedia}</h4>
    //           <span className="userHashtagName">@{user.Username}</span>
    //           <span className="userPercent"> &#8593; 2.5</span>
    //         </div>

    //         <div className="right">
    //           <img src={user.ProfileImage} alt="facebook" />
    //         </div>
    //       </div>

    //       <div className="bottom">
    //         <div className="left">
    //           <h3>{user.Followers}K</h3>
    //           <span>Followers</span>
    //         </div>

    //         <div className="right">
    //           <h3>{user.TotalPosts}</h3>
    //           <span>Total Posts</span>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>

    // <>
    //   {data?.map((user) => {
    //     return (
    //       <div key={user.ID} className="SocialBox-container">
    //         <DataGrid key={user.ID} user={user} />;
    //       </div>
    //     );
    //   })}
    // </>
  );
};

export default SocialBox;
