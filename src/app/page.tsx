import styles from "./page.module.scss";
import typography from "./../styles/typography.module.scss";
import List from "./components/list/list";

async function getData() {
	const res = await fetch(process.env.BASE_URL!, {
		headers: new Headers({
			'Authorization': process.env.API_KEY!
		})
	});

	if(!res.ok) {
		throw new Error("Fail to fetch data");
	}

	return res.json();
}

export default async function Home() {
	const data = await getData();
  return (
		<div className={styles.page}>
			<header className={styles.header}>
				<h1 className={typography.heading1}>The perfect team!</h1>
			</header>
			<main id="main" className={styles.main} role="main">
				<List data={data} />
			</main>
			<footer className={styles.footer}>
				<p>&copy; 2024 Therese Sangö</p>
			</footer>
		</div>
  );
}
