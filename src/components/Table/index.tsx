interface TableProps {
	headers: string[];
	rows: any[];
	renderCell?: (row: any, header: string) => React.ReactNode;
	renderActionCell?: (row: any) => React.ReactNode;
}

const Table: React.FC<TableProps> = ({
	headers,
	rows,
	renderCell = (row, header) => row[header], // Default cell rendering (data from row based on header key)
	renderActionCell, // Optional custom renderer for the action cell
}) => {
	return (
		<table className='is-hoverable w-full text-left'>
			<thead>
				<tr>
					{headers.map((header, index) => (
						<th
							key={index}
							className={`whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5 ${
								index === 0 ? 'rounded-tl-lg' : ''
							} ${index === headers.length - 1 ? 'rounded-tr-lg' : ''}`}
						>
							{header}
						</th>
					))}
					{renderActionCell && (
						<th className='whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5 rounded-tr-lg'>
							Action
						</th>
					)}
				</tr>
			</thead>
			<tbody>
				{rows.map((row, rowIndex) => (
					<tr
						key={rowIndex}
						className='border-y border-transparent border-b-slate-200 dark:border-b-navy-500'
					>
						{headers.map((header, cellIndex) => (
							<td
								key={cellIndex}
								className='whitespace-nowrap px-4 py-3 sm:px-5'
							>
								{renderCell(row, header)}
							</td>
						))}
						{renderActionCell && (
							<td className='whitespace-nowrap px-4 py-3 sm:px-5'>
								{renderActionCell(row)}
							</td>
						)}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
