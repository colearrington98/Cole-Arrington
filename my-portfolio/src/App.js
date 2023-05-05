import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Project from './components/Project';
import projects from './project.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <main>
        <section id="about">
          <h2>About Me</h2>
          <img src="https://avatars.githubusercontent.com/u/69416870?v=4" alt="Cole Arrington" />
          <p>

          </p>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <div className="projects">
            {projects.map((project) => (
              <Project key={project.title} project={project} />
            ))}
          </div>
        </section>
        <section id="contact">
          <h2>Contact Me</h2>
          <form>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" id="name" />
            </div>
            <div>
              <label htmlFor="email">Email address:</label>
              <input type="email" name="email" id="email" />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea name="message" id="message" rows="5" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
        <section id="resume">
          <h2>Resume</h2>
          <p>

          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;