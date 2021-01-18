import './Loading.css';

function Loading({ isFadingOut }) {
	return (
		<div className={`loading ${isFadingOut ? 'fadeOut' : ''}`}>
			<p>telex</p>
		</div>
	);
}

export default Loading;
