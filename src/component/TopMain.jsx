// トップ画面 main
import Box from "./Box";
let haikei = "/src/assets/haikei2.png";

function TopMain() {
  return (
    <div className="flex flex-wrap justify-around items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${haikei})` }}>
      <div className="text-center font-bold text-5xl mt-8">
        <span className="animate-tracking-in-expand" style={{ color: '#258425' }}>&quot;がんばり&quot;BOXから自分の目標を設定して<br />友達の目標を確認、応援しよう！</span>
      </div>
      <div className="flex flex-wrap justify-around items-center">
        <Box name="自分" url="personal" color="#6495ed" description={<span style={{ color: '#4980d8' }}>自分の&quot;がんばり&quot;を設定できるよ！</span>} />
        <Box name="友達" url="group" color="#9370db" description={<span style={{ color: '#8676c5' }}>友達の&quot;がんばり&quot;を確認、応援できるよ！</span>} />
      </div>
    </div>
  )
}
export default TopMain