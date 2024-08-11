// src/App.js

import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';

const App = () => {
  const firstName = "dear"; 
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <Image />
        <Name />
        <Price />
        <Description />
      </div>
      <div className="mt-4 text-center">
        <p className="text-xl">
          {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
        </p>
        {firstName && (
          <img
            src="https://images.unsplash.com/photo-1682364853446-db043f643207?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGd1Y2NpJTIwYmFnfGVufDB8fDB8fHww"
            alt="Greeting"
            className="mt-4 w-20 h-20 rounded-full"
          />
        )}
      </div>
    </div>
  );
};

export default App;


