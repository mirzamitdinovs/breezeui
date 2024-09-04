import React from 'react';
import Table from '../components/Table';

const App = () => {
	const headers = ['Avatar', 'Name', 'Age', 'Phone', 'Role', 'Status'];
	const rows = [
		{
			id: 1,
			avatar: 'images/avatar/avatar-3.jpg',
			name: 'John Doe',
			age: 24,
			phone: '443-893-2318',
			role: 'Superadmin',
			status: true,
		},
		{
			id: 2,
			avatar: 'images/avatar/avatar-4.jpg',
			name: 'Sabina Mores',
			age: 26,
			phone: '442-893-2318',
			role: 'Author',
			status: false,
		},
	];

	return (
		<Table
			headers={headers}
			rows={rows}
			renderCell={(row, header) => {
				switch (header) {
					case 'Avatar':
						return (
							<div className='avatar flex size-10'>
								<img
									className='mask is-squircle'
									alt='avatar'
									src={row.avatar}
								/>
							</div>
						);
					case 'Status':
						return (
							<label className='inline-flex items-center'>
								<input
									className='form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white'
									type='checkbox'
									defaultChecked={row.status}
								/>
							</label>
						);
					default:
						return row[header.toLowerCase()]; // Fallback to default text render for the rest
				}
			}}
			renderActionCell={(row) => (
				<button className='btn bg-blue-500 text-white'>Action</button>
			)}
		/>
	);
};

export default App;
