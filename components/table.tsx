import { useStorage } from "~hooks/storage"

const Table: React.FC = () => {
  const { borderPageColorizerStorage, deleteBorderPageColorizer } = useStorage()

  return (
    <table className="table-auto border-collapse w-full text-base">
      <thead className="text-gray-700 uppercase">
        <tr>
          <th className="table-th">Domain Name</th>
          <th className="table-th">Border Color</th>
          <th className="table-th"></th>
        </tr>
      </thead>
      <tbody className="bg-white text-left">
        {borderPageColorizerStorage.length > 0 ? (
          borderPageColorizerStorage.map((item) => (
            <tr key={item.no} className="tbody-tr">
              <td className="table-td">{item.domainName}</td>
              <td className="table-td">
                <input type="color" value={item.color} disabled />
                <br />
                {item.color}
              </td>
              <td className="table-td">
                <button
                  onClick={() => deleteBorderPageColorizer(item.no)}
                  className="remove-btn">
                  Remove
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr className="tbody-tr">
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
