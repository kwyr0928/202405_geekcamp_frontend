// トップ画面 main
import Box from "./Box";
let haikei = "/src/assets/haikei.png";

function TopMain() {
    return (
      <div className = "flex flex-wrap justify-around items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${haikei})` }}>
        <div className="text-center font-bold text-5xl mt-8">
          {<span style={{ color: '#258425' }}>"がんばり"BOXから自分の目標を設定して<br />友達の目標を確認、応援しよう！</span>}
        </div>
        <div className = "flex flex-wrap justify-around items-center">
          <Box name = "自分" url = "personal" color ="#6495ed" description = {<span style={{ color: '#3970c8' }}>自分の"がんばり"を設定できるよ！</span>} />
          <Box name = "友達" url = "group" color = "#9370db" description = {<span style={{ color: '#7a6ac0' }}>友達の"がんばり"を確認、応援できるよ！</span>}/>
        </div>
      </div>
    )
  }
  
  export default TopMain