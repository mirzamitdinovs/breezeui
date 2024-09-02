import Button from '@/components/Button';
import Modal from '@/components/Modal';
import Popover from '@/components/Popover';
import React from 'react';
const page = () => {
	return (
		<div>
			<Button>button</Button>
			<Modal>
				<h3>Hello</h3>
			</Modal>
			<Popover />
		</div>
	);
};

export default page;
