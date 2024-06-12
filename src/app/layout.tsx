

import { Provider } from 'react-redux';
import store from '../redux/store';
import "../styles/globals.css"
// import '../styles/tailwind.css';

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
          {children}
  
      </body>
    </html>
  );
}

export default RootLayout;
