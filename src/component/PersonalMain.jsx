// 個人画面 main
let haikei = "/src/assets/haikei.png";
import GoalList from "./GoalList";

function PersonalMain() {
    return (
      <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${haikei})` }}>
        <GoalList />
      </div>
    )
  }
  
  export default PersonalMain