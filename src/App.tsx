import { useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<header>
				<h1>Borin Stonefoot</h1>
				<p>A delver heading into the dungeon.</p>
			</header>
			<main>
				<section aria-lable="Portrait">
					<h2>Portrait</h2>
					<img src={heroImg} alt="Portrait of a dwarf delver with a lantern" />
				</section>
				<section aria-label="Stats">
					<h2>Stats</h2>
					<dl>
						<dt>Health</dt>
						<dd>20 / 20</dd>
						<dt>Weapon</dt>
						<dd>None, bare hands</dd>
						<dt>Depth</dt>
						<dd>Room 1</dd>
					</dl>
					<button type="button">Enter the dungeon</button>
				</section>
			</main>
			<footer>
				<p>Scoundrel, a solo dungeon crawl.</p>
			</footer>
		</>
	)
}

export default App
