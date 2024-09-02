import { Inter } from 'next/font/google';
import React from 'react';
import './globals.css';
var inter = Inter({ subsets: ['latin'] });
export default function RootLayout(_a) {
    var children = _a.children;
    return (<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>);
}
