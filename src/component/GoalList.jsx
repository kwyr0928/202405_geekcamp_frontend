import { useState, useEffect } from "react";
import Goal from "./Goal";
import axios from "axios";

function GoalList() {
  // 目標リスト
  const [goals, setGoals] = useState([]); // SELECT * FROM goal ?
  // useEffect(() => {
  //   axios
  //     .get("goals/")
  //     .then((response) => {
  //       setGoals(response.data);
  //     })
  //     .catch((error) => {
  //       console.log("fetchエラー" + error);
  //     });
  // }, []);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:80/goals") // 修正: simple_goals エンドポイントに変更
      .then((response) => {
        setGoals(response.data);
        console.log("Goals fetched:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching goals:", error);
      });
  }, []);

  return (
    <div>
      <div className={`flex flex-wrap justify-center pt-20 pb-20`}>
        {goals.map((goal) => (
          <div key={goal.goal_id}>
            <Goal
              name={goal.name}
              description={goal.description}
              start_date={goal.start_date}
              end_date={goal.end_date}
            />
          </div>
        ))}
        {/* /* <Goal name="ゆり" description="課題を終わらせる" start_date="1" end_date="2" />
        <Goal name="ゆり" description="課題を終わらせる" start_date="1" end_date="2" />
        <Goal name="ゆり" description="課題を終わらせる" start_date="1" end_date="2" />
        <Goal name="ゆり" description="課題を終わらせる" start_date="1" end_date="2" />
        <Goal name="ゆり" description="課題を終わらせる" start_date="1" end_date="2" />
        <Goal name="ゆり" description="課題を終わらせる" start_date="1" end_date="2" />
        <Goal name="ゆり" description="課題を終わらせる" start_date="1" end_date="2" />
        <Goal name="ゆり" description="課題を終わらせる" start_date="1" end_date="2" /> */}
      </div>
    </div>
  );
}

export default GoalList;
