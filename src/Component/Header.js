import React from 'react'

const Header = () => {
  return (
    <div>
       <header>
                <h1 class="logo">Traveller</h1>
                <input type="checkbox" id="nav-toggle" class="nav-toggle" />
                <nav>
                    <ul id='a2'>
                        <li><a href="/">Home</a></li>
                        <li><a href="/About">About</a></li>
                        <li><a href="/Content">Content</a></li>
                        <li><a href="/Cform">Contact</a></li>
                    </ul>
                </nav>
                <label for="nav-toggle" class="nav-toggle-label">
                    <span></span>
                </label>
            </header>
    </div>
  )
}

export default Header
