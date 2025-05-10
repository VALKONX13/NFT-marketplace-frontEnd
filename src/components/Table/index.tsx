import { ReactNode } from "react";

type TableProps = {
  columns: string[];
  title: string;
  data: Array<Record<string, React.ReactNode>>;
  icon: ReactNode;
};


export default function Table({ columns, data, title, icon }: TableProps) {
  console.log(data);

  return (
    <div className="w-full overflow-x-auto rounded-lg bg-[#474747]/13 p-4 text-white">
      <div className="flex items-center gap-4 px-4 pb-3 border-b border-gray-600">
        {icon}
        <h2 className="text-xl font-semibold text-white ">{title}</h2>
      </div>
      <table className="w-full text-left text-sm">
        <thead className="border-b border-gray-600 text-gray-400">
          <tr>
            {columns.map((col) => (
              <th
                key={col}
                className="px-4 py-2 uppercase tracking-wide font-azeret"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className="border-b border-gray-700 hover:bg-[#1a1040] text-gray-500 font-azeret"
            >
              {columns.map((col) => (
                <td key={col} className="px-4 py-2">
                  {row[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
