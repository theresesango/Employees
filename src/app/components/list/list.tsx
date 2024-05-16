"use client"
import React, { useState } from 'react';
import styles from "./list.module.scss";
import forms from "./../../../styles/forms.module.scss";
import Card from "../card/card";

interface Employee {
	name: string, 
	office: string,
	linkedIn?: string,
	gitHub?: string,
	twitter?: string,
	ImageUrl?: string
}

interface Props {
	data: Employee[],
}

export default function List({ data = [] }: Props) {
	const [searchByOffice, setsearchByOffice] = useState('');
	const [searchByName, setsearchByName] = useState('');

	// Filter employees if a search criteria is set (office and/or name) 
	const filteredItems = data.filter((item: Employee) => {
		const officeMatch = !searchByOffice || item.office === searchByOffice;
		const nameMatch = !searchByName || item.name.toLocaleLowerCase().includes(searchByName.toLocaleLowerCase());
		return officeMatch && nameMatch;
	});

	return (
		<>
			<section className={styles.toolsArea} aria-label="filter area">
				<form className={forms.form}>
					<label className={forms.label}>Filter by</label>
					<div className={forms.formGroup}>
						<label id="office" className={forms.label}>Office</label>
						<select
							aria-labelledby="office"
							className={forms.select}
							value={searchByOffice}
							onChange={e => setsearchByOffice(e.target.value)}
						>
							<option value="">All</option>
							<option value="Lund">Malmö</option>
							<option value="Helsingborg">Lund</option>
							<option value="Stockholm">Helsingborg</option>
							<option value="Borlänge">Ystad</option>
							<option value="Ljubljana">Kristianstad</option>
						</select>
					</div>
					<div className={forms.formGroup}>
						<label id="name" className={forms.label}>Name</label>
						<input 
							type="text" 
							className={forms.input}
							aria-labelledby='name'
							value={searchByName}
							onChange={e => setsearchByName(e.target.value)}/>
					</div>
				</form>
			</section>
			<section aria-label="List of employees">
				<nav className={styles.grid} role="navigation" aria-label="employee navigation">
					<ul className={styles.gridList}>
						{filteredItems?.map((obj: Employee, i: number) => (
							<li className={styles.gridListItem} key={i} aria-label={`Employee ${obj.name}`}>
								<Card
									key={i}
									name={obj.name}
									office={obj.office}
									linkedIn={obj.linkedIn}
									gitHub={obj.gitHub}
									twitter={obj.twitter}
									ImageUrl={obj.ImageUrl}
								/>
							</li>
						))}
					</ul>
				</nav>
			</section>
		</>
	);
}