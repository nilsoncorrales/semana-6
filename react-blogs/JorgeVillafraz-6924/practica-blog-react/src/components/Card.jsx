const Tag = ({ children, link = '#' }) => {
	return (
		<span className='tag'>
			<a href={link}>{children}</a>
		</span>
	);
};

const Card = ({
	unsplashId,
	unsplashAlt,
	tags,
	title,
	date,
	extract,
	author,
	readTime,
}) => {
	return (
		<article className='card'>
			<section>
				<header>
					<img
						src={`https://source.unsplash.com/${unsplashId}`}
						alt={unsplashAlt}
					/>
					<div className='tags'>
						<Tag>Web</Tag>
						<Tag>CSS</Tag>
					</div>
					<h2 className='heading-sm font-poppins-regular font-bold'>{title}</h2>
					<time
						className='heplp-text paragraph font-poppins-regular'
						dateTime={date}
					>
						{date}
					</time>
				</header>

				<p className='paragraph font-poppins-regular'>{extract}</p>
			</section>
			<footer>
				<div className='author'>
					<img src='https://i.pravatar.cc/300' alt='avatar de autor' />
					<span className='paragraph font-poppins-regular font-bold'>
						{author}
					</span>
				</div>
				<span className='reading-time paragraph font-poppins-regular'>
					{readTime}
				</span>
			</footer>
		</article>
	);
};

export default Card;
