import "~style.css"

import InputArea from "~components/inputArea"
import Table from "~components/table"

const OptionsIndex = () => {
  return (
    <div className="flex flex-col gap-10 p-10">
      <h1 className="text-2xl">Page Border Colorizer</h1>

      <div>
        <InputArea />
      </div>

      <div>
        <Table />
      </div>
    </div>
  )
}

export default OptionsIndex
