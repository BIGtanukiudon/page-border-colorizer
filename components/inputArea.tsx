import { useForm } from "~hooks/form"

const InputArea = () => {
  const {
    handleSubmit,
    domainNameErrorMessages,
    setDomainNameErrorMessages,
    colorErrorMessages,
    setColorErrorMessages
  } = useForm()

  return (
    <div className="w-full flex flex-row gap-10 items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-row items-center gap-10">
        <div>
          <label
            className="block text-gray-700 text-base font-bold mb-2"
            htmlFor="domain-name">
            Domain Name
          </label>
          <input
            className="shadow appearance-none border rounded py-2 px-3 text-base text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-96"
            id="domain-name"
            name="domain-name"
            type="text"
            placeholder="example.com"
            defaultValue=""
            onChange={() => {
              setDomainNameErrorMessages("")
            }}
          />
          {domainNameErrorMessages && (
            <p className="text-red-500 text-base italic">
              {domainNameErrorMessages}
            </p>
          )}
        </div>

        <div>
          <label
            className="block text-gray-700 text-base font-bold mb-2"
            htmlFor="colorPicker">
            Border Color
          </label>

          <input
            id="color-picker"
            name="color"
            type="color"
            defaultValue=""
            onChange={() => {
              setColorErrorMessages("")
            }}
          />

          {colorErrorMessages && (
            <p className="text-red-500 text-base italic">
              {colorErrorMessages}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-500"
          disabled={!!domainNameErrorMessages || !!colorErrorMessages}>
          Add
        </button>
      </form>

      {/* <button
        onClick={deleteAllBorderPageColorizers}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Remove All
      </button> */}
    </div>
  )
}

export default InputArea
