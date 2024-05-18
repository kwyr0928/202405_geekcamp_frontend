import Goal from "./Goal"
import { useEffect, useState } from 'react';
import axios from 'axios';

function GoalList() { // 目標リスト
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

    return (
      <div>
        {/* <ul>
          {goals.map((goal) => (
          <li key={goal.goal_id}>
          <Goal name = {goal.name} description = {goal.description} start_date = {goal.start_date} end_date = {goal.end_date} />
          </li>
        ))}
      </ul> */} 
      <Goal name = "ゆり" description = "課題を終わらせる" start_date = "1" end_date = "2" />
      </div>
    )
  }
  
  
  
  export default GoalList