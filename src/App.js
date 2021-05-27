import React from 'react'
import './App.css';
import About from './components/About.js'
import Resume from './components/Resume.js'
import Header from './components/Header.js'
import Projects from './components/Projects.js'
import Skills from './components/Skills.js'

export default function App() {

  return (
    <div class="app">
      <div class="sidebar">
        <Header></Header>
      </div>
      <div class="page-content">
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Resume></Resume>
      </div>
    </div>

  )
}