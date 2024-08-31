# BreezeUI

BreezeUI is a customizable and reusable component library built with NextJS and Tailwind CSS. It provides a set of UI components that can be easily integrated into your projects, helping you build modern and responsive web applications with ease.

## Features

- **Customizable**: Easily customize the components using Tailwind CSS.
- **Reusable**: Use the components across multiple projects for a consistent UI.
- **Responsive**: Components are designed to work well on all screen sizes.
- **TypeScript Support**: Written in TypeScript for type safety and better developer experience.

## Installation

You can install BreezeUI via npm:

```bash
npm install breezeui
```

Or if you prefer yarn:

```bash
yarn add breezeui
```

## Usage

Here's an example of how to use BreezeUI components in your project:

```jsx
import React from 'react';
import { Button, Modal } from 'breezeui';

const App = () => {
	const modalRef = React.useRef(null);

	const handleOpenModal = () => {
		modalRef.current.open();
	};

	const handleSave = async () => {
		console.log('Saving...');
		// Your save logic here
	};

	const handleCancel = async () => {
		console.log('Cancelling...');
		// Your cancel logic here
	};

	return (
		<div className='app'>
			<Button type='primary' onClick={handleOpenModal}>
				Open Modal
			</Button>
			<Modal
				ref={modalRef}
				title='My Modal'
				save={handleSave}
				cancel={handleCancel}
				size='md'
				showPadding={true}
			>
				<p>Your modal content goes here.</p>
			</Modal>
		</div>
	);
};

export default App;
```

### Available Components

#### Button

A customizable button component with various styles and states.

```jsx
<Button
	type='primary'
	variant='solid'
	buttonType='button'
	onClick={handleClick}
	disabled={false}
>
	Click Me
</Button>
```

- `type`: The style variant of the button. Options: `'default' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error'`. Default is `'default'`.
- `variant`: The style of the button. Options: `'solid' | 'outline'`. Default is `'solid'`.
- `buttonType`: The type of the button element. Options: `'button' | 'submit'`. Default is `'button'`.
- `onClick`: The function to call when the button is clicked.
- `disabled`: Boolean to disable the button. Default is `false`.

#### Modal

A customizable modal component for displaying content in a pop-up dialog.

```jsx
<Modal
	ref={modalRef}
	title='My Modal'
	save={handleSave}
	cancel={handleCancel}
	size='md'
	showPadding={true}
>
	<p>Your modal content goes here.</p>
</Modal>
```

- `ref`: A reference to control the modal externally (open/close).
- `children`: The content to be displayed inside the modal.
- `save`: A function to be called when the "Save" button is clicked. Should return a promise.
- `cancel`: A function to be called when the "Cancel" button is clicked. Should return a promise.
- `title`: The title of the modal.
- `size`: The size of the modal. Options: `'sm' | 'md' | 'lg' | 'xl'`. Default is `'md'`.
- `showPadding`: Boolean to toggle padding around the modal content. Default is `true`.
- `header`: Custom header content. Overrides the title if provided.
- `hideButtons`: Boolean to hide the Save/Cancel buttons. Default is `false`.
- `hideHeader`: Boolean to hide the header. Default is `false`.

### Contributing

We welcome contributions to BreezeUI! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## Issues

If you encounter any issues or have questions, feel free to open an issue on GitHub.

## License

BreezeUI is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.

## Contact

For any inquiries, please contact [mirzamitdinovsayyod@gmail.com](mailto:mirzamitdinovsayyod@gmail.com).

---

Happy coding!
