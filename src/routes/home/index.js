import { h } from 'preact';
import style from './style.scss';

const Home = () => (
	<div class={style.home}>
		<div class={style.over}>
			<div class={style.header}>
				<img src="/assets/images/bears-logo.png" class={style.logo} />
				<div>
					<h1>Berkeley EECS and Research Symposium</h1>
					<h2>Tuesday, April 26th 6-8 PM | East Pauley Ballroom</h2>
				</div>
			</div>
			<p>Join SAAS, Machine Learning @ Berkeley, and Berkeley IEEE for a research and project showcase highlighting original, cutting edge, and diverse research projects from all fields of electrical engineering, computer science, and data science!</p>
			<p>Sponsored by Citadel</p>
			<p><b>Register Below</b></p>
		</div>

		<div class={style.under}>
			<img src="/assets/images/bears-planets.png" class={`${style.bears_img} ${style.bears_planets}`} />
			<img src="/assets/images/bears-satellite.png" class={`${style.bears_img} ${style.bears_satellite}`} />
			<img src="/assets/images/bears-stars.png" class={`${style.bears_img} ${style.bears_stars}`} />
		</div>
	</div>
);

export default Home;
