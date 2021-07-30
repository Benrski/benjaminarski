import React from 'react';
import ReactDOM from 'react-dom';
import 'virtual:windi.css';

ReactDOM.render(
  <React.StrictMode>
    <section className="flex justify-center items-center h-screen dark:(bg-gray-900 text-white)">
      <div>
        <p className="text-[3vw]">Hi there 👋</p>
        <p className="text-[6vw]">I&apos;m Benjamin Minarski</p>
      </div>
    </section>
  </React.StrictMode>,
  document.getElementById('root')
);
