import { useStorage } from "~hooks/storage"

const Table: React.FC = () => {
  const { borderPageColorizerStorage, deleteBorderPageColorizer } = useStorage()

  return (
    <table className="table-auto border-collapse w-full text-base">
      <thead className="flex text-gray-700 uppercase border-t bg-slate-200 w-full">
        <tr className="tr-flex">
          <th className="table-th w-2/4">Domain Name</th>
          <th className="table-th w-1/4">Border Color</th>
          <th className="table-th w-1/4"></th>
        </tr>
      </thead>
      <tbody
        className="bg-white text-left flex flex-col items-center justify-between overflow-y-scroll w-full "
        style={{ maxHeight: "70vh" }}>
        {borderPageColorizerStorage.length > 0 ? (
          borderPageColorizerStorage.map((item) => (
            <tr key={item.no} className="tbody-tr tr-flex">
              <td className="table-td w-2/4">{item.domainName}</td>
              <td className="table-td w-1/4">
                <input type="color" value={item.color} disabled />
                <br />
                {item.color}
              </td>
              <td className="table-td w-1/4">
                <button
                  onClick={() => deleteBorderPageColorizer(item.no)}
                  className="remove-btn">
                  Remove
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr className="tbody-tr tr-flex">
            <td className="table-td" colSpan={3}>
              N/A
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default Table
