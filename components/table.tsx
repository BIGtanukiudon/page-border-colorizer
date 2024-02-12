import { useStorage } from "~hooks/storage"

const Table: React.FC = () => {
  const { borderPageColorizerStorage } = useStorage()

  return (
    <table className="table-auto border-collapse w-full text-lg">
      <thead>
        <tr>
          <th>Domain Name</th>
          <th>Border Color</th>
        </tr>
      </thead>
      <tbody className="bg-white dark:bg-slate-800">
        {borderPageColorizerStorage.length > 0 ? (
          borderPageColorizerStorage.map((item) => (
            <tr key={item.no}>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                {item.domainName}
              </td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                {item.color}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
              N/A
            </td>
            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
              N/A
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default Table
