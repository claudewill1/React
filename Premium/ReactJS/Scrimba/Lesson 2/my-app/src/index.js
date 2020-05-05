// Objectives:
// 1. Set up the basic React code from scratch
// 2. Create a functional component called MyInfo that returns the following UI:
    // a. An h1 with your name
    // b. A paragraph with a little blurb about yourself
    // c. An ordered or unordered list of the top 3 vacation spots you'd like to visit
// 3. Render an instance of that functional component to the browser
// Extra challenge: learn on your own (Google!) how you can add some style to your page.
// (We will also cover this in an upcoming lesson).
import React from 'react'
import ReactDOM from 'react-dom'

function MyInfo() {
  return(
    <div>
      <h1>Claude J Will</h1>
      <p>I am a veteran of the United States Navy. I enjoy learning how to code and want to become a software engineer. I also enjoy playing various games such as World of Warcraft, Runescape, The Division, Final Fantasy, and Pokemon GO.</p>
      <ol>
        <li>Dallas, TX</li>
        <li>Austin, TX</li>
        <li>Florida</li>
      </ol>
    </div>
  )
}

ReactDOM.render(<MyInfo />,document.getElementById('root'))