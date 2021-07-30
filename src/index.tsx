import React from 'react';
import ReactDOM from 'react-dom';
import 'virtual:windi.css';

ReactDOM.render(
  <React.StrictMode>
    <section className="flex justify-center items-center h-screen dark:(bg-gray-900 text-white)">
      <div>
        <p className="text-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl">
          Hi there 👋
        </p>
        <p className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-10xl">
          I&apos;m Benjamin Minarski
        </p>
      </div>
    </section>
  </React.StrictMode>,
  document.getElementById('root')
);
