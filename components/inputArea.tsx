import { useForm } from "~hooks/form"

const InputArea = () => {
  const { handleSubmit, deleteAllBorderPageColorizers } = useForm()
  return (
    <div className="w-full flex flex-row gap-5 items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-row items-center gap-5">
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="domain-name">
            Domain Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="domain-name"
            name="domain-name"
            type="text"
            placeholder="example.com"
            defaultValue=""
          />
        </div>

        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="colorPicker">
            Border Color
          </label>

          <input id="color-picker" name="color" type="color" defaultValue="" />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add
        </button>
      </form>

      <button
        onClick={deleteAllBorderPageColorizers}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Remove All
      </button>
    </div>
  )
}

export default InputArea
