import "~style.css"

import InputArea from "~components/inputArea"
import Table from "~components/table"

const OptionsIndex = () => {
  return (
    <div className="p-10">
      <h1 className="text-2xl">Page Border Colorizer</h1>

      <InputArea />

      <Table />
    </div>
  )
}

export default OptionsIndex
