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
			<p>Join SAAS, Machine Learning @ Berkeley, and Berkeley IEEE for a research and project showcase highlighting original, cutting edge, and diverse independent research projects from all fields of electrical engineering, computer science, and data science!</p>
			<div class={style.logos_box}>
				<a href="https://ieee.berkeley.edu" target="_blank" rel="noreferrer">
					<img src="/assets/logos/ieee.png" />
				</a>
				<a href="https://saas.berkeley.edu" target="_blank" rel="noreferrer">
					<img src="/assets/logos/saas.png" />
				</a>
				<a href="https://ml.berkeley.edu" target="_blank" rel="noreferrer">
					<img src="/assets/logos/ml.png" />
				</a>
			</div>
			<p>Sponsored by</p>
			<a href="https://www.citadel.com" target="_blank" rel="noreferrer">
				<img src="/assets/logos/citadel.png" class={style.citadel} />
			</a>
			<p><b>Register Below</b></p>

			<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScv0Qy1MfjOk6XoFsklywT0xb9WEJK97KFwgbq6qHsZdzG-rw/viewform?embedded=true" width="300" height="2000" frameborder="0" marginheight="0" marginwidth="0" class={style.reg_form}>Loading…</iframe>

		</div>

		<div class={style.under}>
			<img src="/assets/images/bears-planets.png" class={`${style.bears_img} ${style.bears_planets}`} />
			<img src="/assets/images/bears-satellite.png" class={`${style.bears_img} ${style.bears_satellite}`} />
			<img src="/assets/images/bears-stars.png" class={`${style.bears_img} ${style.bears_stars}`} />
		</div>
	</div>
);

export default Home;
