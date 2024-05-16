import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.scss";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons'
 
export interface CardProps {
	name: string,
	office: string,
	linkedIn?: string,
	gitHub?: string,
	twitter?: string,
	ImageUrl?: string
}

 const Card: React.FC<CardProps> = ({ name, office, linkedIn, gitHub, twitter, ImageUrl}) => {

	if (!ImageUrl) {
		ImageUrl = "assets/employee.png"
	}

	return (
		<article className={styles.card} tabIndex={0}>
			<Image
				src={ImageUrl}
				alt={`Portrait of ${name}`}
				sizes="100vw"
				className={styles.image}
				width={348}
				height={482}
				priority
			/>
			
			<div className={styles.info}>
				
				<header className={styles.details}>
					<h2 className={styles.text} aria-label="name">{name}</h2>
					<p className={styles.text}>Office: {office}</p>
				</header>

				{(linkedIn || gitHub || twitter) && (
					<nav role="navigation" aria-label={`${name}'s social media navigation`}>
						<ul className={styles.links}>
							{linkedIn && (
								<li>
									<Link href={`http://linkedIn.com/${linkedIn}`} title={`${name}'s LinkedIn`}>
										<FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
									</Link>
								</li>
							)}
							{gitHub && (
								<li>
									<Link href={`http://github.com/${gitHub}`} title={`${name}'s GitHub`}>
										<FontAwesomeIcon className={styles.icon} icon={faSquareGithub} />
									</Link>
								</li>
							)}
							{twitter && (
								<li>
									<Link href={`http://twitter.com/${twitter}`} title={`${name}'s X`}>
										<FontAwesomeIcon className={styles.icon} icon={faSquareXTwitter} />
									</Link>
								</li>
							)}
						</ul>
					</nav>
				)}

			</div>		
		</article>
  );
}

export default Card;
