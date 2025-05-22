import { ReactNode } from "react";
import OverlappingAvatars from '@/components/OverlappingAvatars';
import { motion } from 'framer-motion';

type TableProps = {
  columns: string[];
  title: string;
  data: Array<Record<string, React.ReactNode>>;
  icon: ReactNode;
  className?: string;
};


export default function Table({ columns, data, title, icon, className }: TableProps) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className={`w-full overflow-x-auto rounded-lg bg-[#474747]/13 p-4 text-white ${className}`}>
      <div className="flex items-center gap-4 px-4 pb-3 border-b border-gray-600">
        {icon}
        <h2 className="lg:text-xl text-sm font-semibold text-white overflow-auto">{title}</h2>
      </div>
      <table className="w-full text-left text-sm">
        <thead className="border-b border-gray-600 text-gray-400">
          <tr>
            {columns.map((col) => (
              <th
                key={col}
                className={`px-4 py-2 uppercase tracking-wide font-azeret ${col === "Items" ? 'min-w-[170px]' : ''}`}
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
                <td key={col} className="py-3 aspect-square">
                  {col === "Items" && Array.isArray(row[col]) ? (
                    <OverlappingAvatars images={row[col]} />
                  ) : (
                    row[col]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}
