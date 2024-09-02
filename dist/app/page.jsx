import Button from '@/components/Button';
import Modal from '@/components/Modal';
import Popover from '@/components/Popover';
import React from 'react';
var page = function () {
    return (<div>
			<Button>button</Button>
			<Modal>
				<h3>Hello</h3>
			</Modal>
			<Popover />
		</div>);
};
export default page;
