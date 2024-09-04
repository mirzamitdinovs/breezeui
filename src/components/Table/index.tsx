const Table = () => {
	return (
		<table className='is-hoverable w-full text-left'>
			<thead>
				<tr>
					<th className='whitespace-nowrap rounded-tl-lg bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
						#
					</th>
					<th className='whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
						Avatar
					</th>
					<th className='whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
						Name
					</th>
					<th className='whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
						Age
					</th>
					<th className='whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
						Phone
					</th>
					<th className='whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
						Role
					</th>
					<th className='whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
						Status
					</th>
					<th className='whitespace-nowrap rounded-tr-lg bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
						Action
					</th>
				</tr>
			</thead>
			<tbody>
				<template x-for='user in usersData' />
				<tr className='border-y border-transparent border-b-slate-200 dark:border-b-navy-500'>
					<td className='whitespace-nowrap px-4 py-3 sm:px-5' x-text='user.id'>
						1
					</td>
					<td className='whitespace-nowrap px-4 py-3 sm:px-5'>
						<div className='avatar flex size-10'>
							<img
								className='mask is-squircle'
								alt='avatar'
								src='images/avatar/avatar-3.jpg'
							/>
						</div>
					</td>
					<td
						x-text='user.name'
						className='whitespace-nowrap px-3 py-3 font-medium text-slate-700 dark:text-navy-100 lg:px-5'
					>
						John Doe
					</td>
					<td x-text='user.age' className='whitespace-nowrap px-4 py-3 sm:px-5'>
						24
					</td>
					<td
						x-text='user.phone'
						className='whitespace-nowrap px-4 py-3 sm:px-5'
					>
						443-893-2318
					</td>
					<td className='whitespace-nowrap px-4 py-3 sm:px-5'>
						<div
							x-text='user.role'
							className='badge rounded-full bg-secondary/10 text-secondary dark:bg-secondary-light/15 dark:text-secondary-light'
						>
							Superadmin
						</div>
					</td>
					<td className='whitespace-nowrap px-4 py-3 sm:px-5'>
						<label className='inline-flex items-center'>
							<input
								className='form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white'
								type='checkbox'
							/>
						</label>
					</td>
					<td className='whitespace-nowrap px-4 py-3 sm:px-5'>
						<div
							x-data="usePopper({placement:'bottom-end',offset:4})"
							className='inline-flex'
						>
							<button
								x-ref='popperRef'
								className='btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='size-5'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									strokeWidth={2}
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
									/>
								</svg>
							</button>
							<div
								x-ref='popperRoot'
								className='popper-root'
								style={{
									position: 'fixed',
									inset: '0px 0px auto auto',
									margin: '0px',
									transform: 'translate3d(-105.5px, 21px, 0px)',
								}}
								data-popper-placement='bottom-end'
							>
								<div className='popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700'>
									<ul>
										<li>
											<a
												href='#'
												className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100'
											>
												Action
											</a>
										</li>
										<li>
											<a
												href='#'
												className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100'
											>
												Another Action
											</a>
										</li>
										<li>
											<a
												href='#'
												className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100'
											>
												Something else
											</a>
										</li>
									</ul>
									<div className='my-1 h-px bg-slate-150 dark:bg-navy-500' />
									<ul>
										<li>
											<a
												href='#'
												className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100'
											>
												Separated Link
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</td>
				</tr>
				<tr className='border-y border-transparent border-b-slate-200 dark:border-b-navy-500'>
					<td className='whitespace-nowrap px-4 py-3 sm:px-5' x-text='user.id'>
						2
					</td>
					<td className='whitespace-nowrap px-4 py-3 sm:px-5'>
						<div className='avatar flex size-10'>
							<img
								className='mask is-squircle'
								alt='avatar'
								src='images/avatar/avatar-4.jpg'
							/>
						</div>
					</td>
					<td
						x-text='user.name'
						className='whitespace-nowrap px-3 py-3 font-medium text-slate-700 dark:text-navy-100 lg:px-5'
					>
						Sabina Mores
					</td>
					<td x-text='user.age' className='whitespace-nowrap px-4 py-3 sm:px-5'>
						26
					</td>
					<td
						x-text='user.phone'
						className='whitespace-nowrap px-4 py-3 sm:px-5'
					>
						442-893-2318
					</td>
					<td className='whitespace-nowrap px-4 py-3 sm:px-5'>
						<div
							x-text='user.role'
							className='badge rounded-full bg-info/10 text-info dark:bg-info/15'
						>
							Author
						</div>
					</td>
					<td className='whitespace-nowrap px-4 py-3 sm:px-5'>
						<label className='inline-flex items-center'>
							<input
								className='form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white'
								type='checkbox'
							/>
						</label>
					</td>
					<td className='whitespace-nowrap px-4 py-3 sm:px-5'>
						<div
							x-data="usePopper({placement:'bottom-end',offset:4})"
							className='inline-flex'
						>
							<button
								x-ref='popperRef'
								className='btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='size-5'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									strokeWidth={2}
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
									/>
								</svg>
							</button>
							<div
								x-ref='popperRoot'
								className='popper-root'
								style={{
									position: 'fixed',
									inset: '0px 0px auto auto',
									margin: '0px',
									transform: 'translate3d(-105.5px, 86px, 0px)',
								}}
								data-popper-placement='bottom-end'
							>
								<div className='popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700'>
									<ul>
										<li>
											<a
												href='#'
												className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100'
											>
												Action
											</a>
										</li>
										<li>
											<a
												href='#'
												className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100'
											>
												Another Action
											</a>
										</li>
										<li>
											<a
												href='#'
												className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100'
											>
												Something else
											</a>
										</li>
									</ul>
									<div className='my-1 h-px bg-slate-150 dark:bg-navy-500' />
									<ul>
										<li>
											<a
												href='#'
												className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100'
											>
												Separated Link
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</td>
				</tr>
				<tr className='border-y border-transparent border-b-slate-200 dark:border-b-navy-500'>
					<td className='whitespace-nowrap px-4 py-3 sm:px-5' x-text='user.id'>
						3
					</td>
					<td className='whitespace-nowrap px-4 py-3 sm:px-5'>
						<div className='avatar flex size-10'>
							<img
								className='mask is-squircle'
								alt='avatar'
								src='images/avatar/avatar-20.jpg'
							/>
						</div>
					</td>
					<td
						x-text='user.name'
						className='whitespace-nowrap px-3 py-3 font-medium text-slate-700 dark:text-navy-100 lg:px-5'
					>
						Tom Robert
					</td>
					<td x-text='user.age' className='whitespace-nowrap px-4 py-3 sm:px-5'>
						34
					</td>
					<td
						x-text='user.phone'
						className='whitespace-nowrap px-4 py-3 sm:px-5'
					>
						443-893-2318
					</td>
					<td className='whitespace-nowrap px-4 py-3 sm:px-5'>
						<div
							x-text='user.role'
							className='badge rounded-full bg-secondary/10 text-secondary dark:bg-secondary-light/15 dark:text-secondary-light'
						>
							Admin
						</div>
					</td>
					<td className='whitespace-nowrap px-4 py-3 sm:px-5'>
						<label className='inline-flex items-center'>
							<input
								className='form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white'
								type='checkbox'
							/>
						</label>
					</td>
					<td className='whitespace-nowrap px-4 py-3 sm:px-5'>
						<div
							x-data="usePopper({placement:'bottom-end',offset:4})"
							className='inline-flex'
						>
							<button
								x-ref='popperRef'
								className='btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='size-5'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									strokeWidth={2}
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
									/>
								</svg>
							</button>
							<div
								x-ref='popperRoot'
								className='popper-root'
								style={{
									position: 'fixed',
									inset: '0px 0px auto auto',
									margin: '0px',
									transform: 'translate3d(-105.5px, 151px, 0px)',
								}}
								data-popper-placement='bottom-end'
							>
								<div className='popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700'>
									<ul>
										<li>
											<a
												href='#'
												className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100'
											>
												Action
											</a>
										</li>
										<li>
											<a
												href='#'
												className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100'
											>
												Another Action
											</a>
										</li>
										<li>
											<a
												href='#'
												className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100'
											>
												Something else
											</a>
										</li>
									</ul>
									<div className='my-1 h-px bg-slate-150 dark:bg-navy-500' />
									<ul>
										<li>
											<a
												href='#'
												className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100'
											>
												Separated Link
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</td>
				</tr>
				<tr className='border-y border-transparent border-b-slate-200 dark:border-b-navy-500'>
					<td className='whitespace-nowrap px-4 py-3 sm:px-5' x-text='user.id'>
						4
					</td>
					<td className='whitespace-nowrap px-4 py-3 sm:px-5'>
						<div className='avatar flex size-10'>
							<img
								className='mask is-squircle'
								alt='avatar'
								src='images/avatar/avatar-2.jpg'
							/>
						</div>
					</td>
					<td
						x-text='user.name'
						className='whitespace-nowrap px-3 py-3 font-medium text-slate-700 dark:text-navy-100 lg:px-5'
					>
						Nolan Doe
					</td>
					<td x-text='user.age' className='whitespace-nowrap px-4 py-3 sm:px-5'>
						28
					</td>
					<td
						x-text='user.phone'
						className='whitespace-nowrap px-4 py-3 sm:px-5'
					>
						443-893-2318
					</td>
					<td className='whitespace-nowrap px-4 py-3 sm:px-5'>
						<div
							x-text='user.role'
							className='badge rounded-full bg-info/10 text-info dark:bg-info/15'
						>
							Author
						</div>
					</td>
					<td className='whitespace-nowrap px-4 py-3 sm:px-5'>
						<label className='inline-flex items-center'>
							<input
								className='form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white'
								type='checkbox'
							/>
						</label>
					</td>
					<td className='whitespace-nowrap px-4 py-3 sm:px-5'>
						<div
							x-data="usePopper({placement:'bottom-end',offset:4})"
							className='inline-flex'
						>
							<button
								x-ref='popperRef'
								className='btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='size-5'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									strokeWidth={2}
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
									/>
								</svg>
							</button>
							<div
								x-ref='popperRoot'
								className='popper-root'
								style={{
									position: 'fixed',
									inset: '0px 0px auto auto',
									margin: '0px',
									transform: 'translate3d(-105.5px, 216px, 0px)',
								}}
								data-popper-placement='bottom-end'
							>
								<div className='popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700'>
									<ul>
										<li>
											<a
												href='#'
												className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100'
											>
												Action
											</a>
										</li>
										<li>
											<a
												href='#'
												className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100'
											>
												Another Action
											</a>
										</li>
										<li>
											<a
												href='#'
												className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100'
											>
												Something else
											</a>
										</li>
									</ul>
									<div className='my-1 h-px bg-slate-150 dark:bg-navy-500' />
									<ul>
										<li>
											<a
												href='#'
												className='flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100'
											>
												Separated Link
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default Table;
