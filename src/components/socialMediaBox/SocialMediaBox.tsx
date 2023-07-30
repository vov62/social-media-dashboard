import "./SocialMediaBox.scss";
import upArrow from "/up-arrow.svg";
import downArrow from "../../../public/down-arrow-.svg";

type Props = {
  SocialMedia: string;
  Username: string;
  ProfileImage: string;
  Followers: number;
  TotalPosts: number;
  Percentage: number;
};

const DataGrid: React.FC<{ user: Props }> = ({ user }) => {
  const {
    SocialMedia,
    Username,
    ProfileImage,
    Followers,
    TotalPosts,
    Percentage,
  } = user;

  return (
    <div className="user-social-box">
      <div className="top">
        <div className="left">
          <h4>{SocialMedia}</h4>

          <div className="user-Statics-details">
            <span className="userHashtagName">@{Username}</span>

            <div
              className="userStatics"
              style={{
                backgroundColor: Percentage < 0 ? "tomato" : "limegreen",
              }}
            >
              <img
                src={Percentage < 0 ? "/down-arrow-.svg" : "/up-arrow.svg/"}
                alt="arrow"
                width={12}
                height={12}
              />
              <span className="userPercent">{Percentage}</span>
            </div>
          </div>
        </div>

        <div className="right">
          <img src={ProfileImage} alt="social media" />
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <h3>{Followers}K</h3>
          <span>Followers</span>
        </div>

        <div className="right">
          <h3>{TotalPosts}</h3>
          <span>Total Posts</span>
        </div>
      </div>
    </div>
  );
};

export default DataGrid;
