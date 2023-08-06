import "./home.scss";
import { useState } from "react";

import {
  socialMediaUsers,
  dailyVisitorsData,
  MonthlyVisitors,
} from "../../dataMock/dataMock";
import SocialMediaBox from "../../components/socialMediaBox/SocialMediaBox";
import ChartsData from "../../components/chartData/ChartsData";
import PaiChartBox from "../../components/PaiChartBox/PaiChartBox";

const Home = () => {
  // const [userData, setUserData] = useState({
  //   labels: dailyVisitorsData?.map((data) => data.Date),
  //   dataSets: [
  //     {
  //       label: "Users Gained",
  //       data: dailyVisitorsData?.map((data) => data.Visitors),
  //     },
  //   ],
  // });

  return (
    <div className="home">
      {socialMediaUsers?.map((user) => {
        return (
          <div className="box" key={user.ID}>
            <SocialMediaBox user={user} />
          </div>
        );
      })}
      <div className="box box5">
        <ChartsData userData={dailyVisitorsData} />
      </div>
      <div className="box box6">
        <PaiChartBox monthlyVisitors={MonthlyVisitors} />
      </div>
    </div>
  );
};

export default Home;
