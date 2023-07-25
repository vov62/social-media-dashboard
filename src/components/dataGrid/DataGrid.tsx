import "./datagrid.scss";

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
          <span className="userHashtagName">@{Username}</span>
          <span
            className="userPercent"
            style={{ color: Percentage < 0 ? "tomato" : "limegreen" }}
          >
            &#8593; {Percentage}
          </span>
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
