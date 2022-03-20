import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <section className="flex h-screen items-center justify-center dark:bg-neutral-900 dark:text-white">
      <div>
        <p className="text-3xl">Hi there 👋</p>
        <p className="text-6xl">I&apos;m Benjamin Minarski</p>
      </div>
    </section>
  </React.StrictMode>,
  document.getElementById('root')
);
