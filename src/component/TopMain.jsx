// トップ画面 main
import Box from "./Box";
let haikei = "/src/assets/haikei.png";

function TopMain() {
    return (
      <div className = "flex flex-wrap justify-around items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${haikei})` }}>
        <Box name = "自分の目標" url = "personal" />
        <Box name = "みんなの目標" url = "group" />
      </div>
    )
  }
  
  export default TopMain