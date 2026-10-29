import heroImg from './assets/hero.png'

function App() {
	return (
		<>
			<header>
				<h1 className="hero-name">Borin Stonefoot</h1>
				<p>A delver heading into the dungeon.</p>
			</header>
			<main className="hero-sheet">
				<section aria-label="Portrait">
					<h2>Portrait</h2>
					<img className="hero-portrait" src={heroImg} alt="Portrait of a dwarf delver with a lantern" />
				</section>
				<section aria-label="Stats">
					<h2>Stats</h2>
					<dl className="hero-stats">
						<dt>Health</dt>
						<dd>20 / 20</dd>
						<dt>Weapon</dt>
						<dd>None, bare hands</dd>
						<dt>Depth</dt>
						<dd>Room 1</dd>
					</dl>
				</section>
				<button type="button" className="btn-primary">Enter the dungeon</button>
				<section aria-label="Room">
					<h2>Room</h2>
					<div className="room">
						<div id="card1" className="card">
							<p>Ace</p>
							<p>of</p>
							<p>Spades</p>
							<p>Type: Monster</p>
						</div>
						<div id="card2" className="card">
							<p>Ace</p>
							<p>of</p>
							<p>Hearts</p>
							<p>Type: Potion</p>
						</div>
						<div id="card3" className="card">
							<p>Ace</p>
							<p>of</p>
							<p>Diamonds</p>
							<p>Type: Weapon</p>
						</div>
						<div id="card4" className="card">
							<p>Ace</p>
							<p>of</p>
							<p>Clubs</p>
							<p>Type: Monster</p>
						</div>
					</div>
				</section>
			</main>
			<footer>
				<p>Scoundrel, a solo dungeon crawl.</p>
			</footer>
		</>
	)
}

export default App
