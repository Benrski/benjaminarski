import React from 'react';
import ReactDOM from 'react-dom';
import 'virtual:windi.css';

ReactDOM.render(
  <React.StrictMode>
    <section className="flex items-center justify-center h-screen dark:(bg-gray-900 text-white)">
      <div>
        <p className="text-[4vw] leading-[5vw] xl:(text-[3vw] leading-[4vw])">
          Hi there 👋
        </p>
        <p className="text-[8vw] leading-[10vw] xl:(text-[6vw] leading-[8vw])">
          I&apos;m Benjamin Minarski
        </p>
      </div>
    </section>
  </React.StrictMode>,
  document.getElementById('root')
);
