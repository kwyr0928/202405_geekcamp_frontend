import { AlphaSlider } from "@yamada-ui/react";
import { useState } from 'react';
import Goal from "./Goal";

function GoalList() { // 目標リスト
  const [goals, setGoals] = useState([]); // SELECT * FROM goal ?
  const [sliderValue, setSliderValue] = useState(1);
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

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

    return (
      <div>
        <div className="pt-10 w-1/12 ml-auto mr-20">
        <AlphaSlider value={sliderValue} step={0.25} onChange={handleSliderChange} />
      </div>
<div className={`flex flex-wrap justify-center pt-20 opacity-${sliderValue}`}>
        {/* <ul>
          {goals.map((goal) => (
          <li key={goal.goal_id}>
          <Goal name = {goal.name} description = {goal.description} start_date = {goal.start_date} end_date = {goal.end_date} />
          </li>
        ))}
      </ul> */}
      <Goal name = "ゆり" description = "課題を終わらせる" start_date = "1" end_date = "2" opacity = {sliderValue} />
      <Goal name = "ゆり" description = "課題を終わらせる" start_date = "1" end_date = "2" opacity = {sliderValue} />
      <Goal name = "ゆり" description = "課題を終わらせる" start_date = "1" end_date = "2" opacity = {sliderValue}/>
      <Goal name = "ゆり" description = "課題を終わらせる" start_date = "1" end_date = "2" opacity = {sliderValue}/>
      <Goal name = "ゆり" description = "課題を終わらせる" start_date = "1" end_date = "2" opacity = {sliderValue}/>
      <Goal name = "ゆり" description = "課題を終わらせる" start_date = "1" end_date = "2" opacity = {sliderValue}/>
      <Goal name = "ゆり" description = "課題を終わらせる" start_date = "1" end_date = "2" opacity = {sliderValue}/>
      <Goal name = "ゆり" description = "課題を終わらせる" start_date = "1" end_date = "2" opacity = {sliderValue}/>
      </div>
      </div>
    )
  }
  
  
  
  export default GoalList