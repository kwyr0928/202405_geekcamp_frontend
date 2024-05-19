// import axios from 'axios';
// import { useEffect, useState } from 'react';
import Goal from "./Goal";

function GoalList() { // 目標リスト
  // const [goals, setGoals] = useState([]); // SELECT * FROM goal ?
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


  return (
    <div>
      <div className={`flex flex-wrap justify-center pt-20 pb-20`}>
        <ul>
          {/* {goals.map((goal) => (
          <li key={goal.goal_id}>
          <Goal name = {goal.name} description = {goal.description} start_date = {goal.start_date} deadline_date = {goal.deadline_date} />
          </li>
        ))} */}
      </ul>
        <Goal name="ゆり" description="課題を終わらせる" start_date="2024-08-31" deadline_date="2024-08-31" />
        <Goal name="ゆり" description="課題を終わらせる" start_date="2024-08-31" deadline_date="2024-08-31" />
        <Goal name="ゆり" description="課題を終わらせる" start_date="2024-08-31" deadline_date="2024-08-31" />
        <Goal name="ゆり" description="課題を終わらせる" start_date="2024-08-31" deadline_date="2024-08-31" />
        <Goal name="ゆり" description="課題を終わらせる" start_date="2024-08-31" deadline_date="2024-08-31" />
        <Goal name="ゆり" description="課題を終わらせる" start_date="2024-08-31" deadline_date="2024-08-31" />
        <Goal name="ゆり" description="課題を終わらせる" start_date="2024-08-31" deadline_date="2024-08-31" />
        <Goal name="ゆり" description="課題を終わらせる" start_date="2024-08-31" deadline_date="2024-08-31" />
      </div>
    </div>
  )
}



export default GoalList