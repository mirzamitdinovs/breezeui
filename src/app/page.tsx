import Button from '@/components/Button';
import Modal from '@/components/Modal';
import Image from 'next/image';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<Modal>
				<h2>Hello</h2>
			</Modal>
		</main>
	);
}
