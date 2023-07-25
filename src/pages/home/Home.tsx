import "./home.scss";

import { socialMediaUsers } from "../../dataMock/dataMock";
import DataGrid from "./../../components/dataGrid/DataGrid";

const Home = () => {
  return (
    <div className="home">
      {/* <div className="box box1">
        <SocialBox />
      </div>
      <div className="box box2">Box2</div>
      <div className="box box3">Box3</div>
      <div className="box box4">Box4</div>
      <div className="box box5">Box5</div>
      <div className="box box6">Box6</div> */}
      {/* <SocialBox data={socialMediaUsers} /> */}
      {socialMediaUsers?.map((user) => {
        return (
          <div className="box">
            <DataGrid key={user.ID} user={user} />
          </div>
        );
      })}
      <div className="box box5">Box5</div>
      <div className="box box6">Box6</div>
    </div>
  );
};

export default Home;
