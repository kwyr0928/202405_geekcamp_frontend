import Goal from "./Goal"

function GoalList() { // 目標リスト
    return (
      <div className="flex flex-wrap justify-center">
        <Goal name = "ゆり" description = "課題を終わらせる" start_date = "1" end_date = "2" />
        <Goal name = "ゆり" description = "課題を終わらせる" start_date = "1" end_date = "2" />
        <Goal name = "ゆり" description = "課題を終わらせる" start_date = "1" end_date = "2" />
      </div>
    )
  }
  
  export default GoalList