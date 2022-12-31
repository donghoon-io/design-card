<script>
	import { Row, Col, Container } from "sveltestrap";

	let paper = 0;

	let reference = [
		"Chaudry, B. M., Connelly, K. H., Siek, K. A., & Welch, J. L. (2012, January). Mobile interface design for low-literacy populations. In Proceedings of the 2nd ACM SIGHIT international health informatics symposium (pp. 91-100).",
		"McNally, B., Kumar, P., Hordatt, C., Mauriello, M. L., Naik, S., Norooz, L., ... & Druin, A. (2018, April). Co-designing mobile online safety applications with children. In Proceedings of the 2018 CHI Conference on Human Factors in Computing Systems (pp. 1-9).",
		"Paper 3 reference"
	]

	let paper_infos = [
		"In this study, the authors found that the low-literacy population preferred larger and medium-sized widgets, as well as radio buttons, when using touch screen interfaces on mobile devices. This suggests that designers should create larger widgets with feedback mechanisms to better accommodate this population.",
		"Paper 2 info",
		"Paper 3 info"
	]

	let titles = [
		[
			{
				text: "Designing bigger widgets and visualizing interactions",
				name: "Gerund format",
			},
			{
				text: "Make widgets bigger and visualize interactions",
				name: "Verb format",
			},
			{
				text: "Widgets and interactions",
				name: "Short noun"
			},
			{
				text: "Big widgets and visualized interactions",
				name: "Long noun",
			}
		],
		[
			{
				text: "Paper 2 gerund",
				name: "Gerund format",
			},
			{
				text: "Paper 2 verb",
				name: "Verb format",
			},
			{
				text: "Paper 2 noun",
				name: "Short noun" },
			{
				text: "Paper 2 noun",
				name: "Long noun",
			}
		],
		[
			{
				text: "Paper 3 gerund",
				name: "Gerund format",
			},
			{
				text: "Paper 3 verb",
				name: "Verb format",
			},
			{
				text: "Paper 3 short noun",
				name: "Short noun" },
			{
				text: "Paper 3 long noun",
				name: "Long noun",
			}
		]
	];
	let design_implications = [
		[
			{
				name: "Short",
				text: "When designing for low-literacy population, widgets should be bigger and interactions should be visualized.",
			},
			{
				name: "Mid-length",
				text: "Designers should design widgets that are bigger in size and allow the user to visualize interactions while designing for low-literacy population.",
			},
			{
				name: "Long",
				text: "Given that low-literacy population in this study preferred bigger widgets, such as radio buttons, and visualized interactions, designers should consider including bigger widgets and interaction visualization in their design.",
			},
		],
		[
			{
				name: "Short",
				text: "Paper 2 short design implication",
			},
			{
				name: "Mid-length",
				text: "Paper 2 mid-length design implication",
			},
			{
				name: "Long",
				text: "Paper 2 long design implication",
			},
		],
		[
			{
				name: "Short",
				text: "Paper 3 short design implication",
			},
			{
				name: "Mid-length",
				text: "Paper 3 mid-length design implication",
			},
			{
				name: "Long",
				text: "Paper 3 long design implication",
			},
		]
	];
	let images = [
		{ id: 1, name: "Abstract line drawing" },
		{ id: 2, name: "Detailed B&W drawing" },
		{ id: 3, name: "High-detail photo (#1)" },
		{ id: 4, name: "High-detail photo (#2)" }
	];
	let descriptions = [
		[
			{
				name: "Short",
				text: "Low-literacy users prefer and perform better with larger or medium-sized widgets (e.g., radio buttons), which provide feedback to the user. Designers should consider this when designing widgets for touch screen interfaces of mobile devices.",
			},
			{
				name: "Long",
				text: "Low-literacy population can effectively use GUI widgets and navigation structures on touch screen interfaces. They prefer bigger or medium-sized widgets, and radio buttons work best due to the feedback mechanism. Thus, designers should therefore create widgets that are bigger in size and provide visual feedback to users.",
			},
			{
				name: "Reference",
				text: "Despite the mixed performance, we had a good response from participants on the usefulness of the cross-linked navigation bar. One participant commented, “I would rather use the small pictures on the top to save me from going HOME every time.” Another said, “The tabs were not big enough but they were helpful in giving options.” One more said, “It challenged me to think more about what I was doing.”",
				page: "98"
			},
		],
		[
			{
				name: "Short",
				text: "Paper 2 short description",
			},
			{
				name: "Long",
				text: "Paper 2 long description",
			},
			{
				name: "Reference",
				text: "Paper 2 reference description",
				page: "N"
			},
		],
		[
			{
				name: "Short",
				text: "Paper 3 short description",
			},
			{
				name: "Long",
				text: "Paper 3 long description",
			},
			{
				name: "Reference",
				text: "Paper 3 reference description",
				page: "N"
			},
		]
	];
	$: title_selection = titles[paper][0];
	$: design_implication_selection = design_implications[paper][0];
	$: image_selection = images[0];
	$: description_selection = descriptions[paper][0];
</script>

<svelte:head>
	<title>Design card demo</title>
	<meta name="description" content="Design cards" />
</svelte:head>

<Container>
	<Row>
		<Col xs="12" sm="6">
			<table>
				<tr>
					<th>Paper</th>
				</tr>
				<tr>
					<td>
					<Row>
						<label>
							<input type="radio" bind:group={paper} name="paper" value={0}/>
							Mobile interface design for low-literacy populations
						</label>
					</Row>
					<Row>
						<label>
							<input type="radio" bind:group={paper} name="paper" value={1} />
							Co-designing mobile online safety applications with children
						</label>
					</Row>
					<Row>
						<label>
							<input type="radio" bind:group={paper} name="paper" value={2} />
							Paper 3
						</label>
					</Row>
					</td>
				</tr>
			</table>
			<table>
				<tr>
					<th>Title</th>
				</tr>
				<tr>
					<td>
						<select bind:value={title_selection}>
							{#each titles[paper] as title}
								<option value={title}>
									{title.name} title
								</option>
							{/each}
						</select>
					</td>
				</tr>
				<tr>
					<th>Design implication</th>
				</tr>
				<tr>
					<td>
						<select bind:value={design_implication_selection}>
							{#each design_implications[paper] as design_implication}
								<option value={design_implication}>
									{design_implication.name} design implication
								</option>
							{/each}
						</select>
					</td>
				</tr>
				<tr>
					<th>Image</th>
				</tr>
				<tr>
					<td>
						<select bind:value={image_selection}>
							{#each images as image}
								<option value={image}>
									{image.name}
								</option>
							{/each}
						</select>
					</td>
				</tr>
				<tr>
					<th>Description</th>
				</tr>
				<tr>
					<td>
						<select bind:value={description_selection}>
							{#each descriptions[paper] as description}
								<option value={description}>
									{description.name} description
								</option>
							{/each}
						</select>
					</td>
				</tr>
			</table>
		</Col>
		<Col xs="12" sm="6">
			<div class="card">
				<h3 class="title">
					{title_selection.text}
				</h3>
				<p class="title-detail">
					{design_implication_selection.text}
				</p>
				<div class="paper-info-div">
					<p class="paper-info-heading">
						&#9432; What is this study about?
					</p>
					<p class="paper-info-detail">
						{paper_infos[paper]}
					</p>
				</div>
				<img class="image" src="{paper}-{image_selection.id}.png" />
				{#if description_selection.name != "Reference"}
					<p class="description">
						{description_selection.text}
					</p>
				{:else}
					<div class="description_quote">
						<p style="margin: 0 !important; font-weight: 600 !important;">
							&#9432; Where does this come from?
						</p>
						<p style="margin: .5rem 0 0 0 !important; line-height: 1.25 !important;">
							<i>{description_selection.text}</i> (p. {description_selection.page})
						</p>
					</div>
				{/if}
				<p class="reference">
					{reference[paper]}
				</p>
			</div>
		</Col>
	</Row>
</Container>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap");

	.card {
		font-family: "Roboto", sans-serif;
		box-shadow: 0 1px 2px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 7%),
			0 4px 8px rgb(0 0 0 / 7%), 0 8px 16px rgb(0 0 0 / 7%),
			0 16px 32px rgb(0 0 0 / 7%), 0 32px 64px rgb(0 0 0 / 7%);
		width: 400px !important;
		margin-left: auto;
		margin-right: auto;
		padding: 20px 20px;
		background-color: white;
		line-height: 1 !important;
	}

	.title {
		margin-bottom: 10px !important;
		color: #333333;
		font-size: 0.9rem;
		font-weight: 800 !important;
	}

	.title-detail {
		color: #333333;
		margin: 0px 0 15px 0;
		font-size: 0.7rem;
		line-height: 1.25 !important;
	}

	.paper-info-div {
		background-color: rgb(223, 223, 223);
		padding: 10px;
	}

	.paper-info-heading {
		color: #333333;
		margin: 0;
		font-size: 0.7rem;
		font-weight: 800;
	}

	.paper-info-detail {
		color: #333333;
		margin: 5px 0 0 0;
		font-size: 0.7rem;
		line-height: 1.25 !important;
	}

	.image {
		margin-top: 10px;
		width: 100%;
		height: auto;
	}

	.description {
		color: #333333;
		line-height: 1.25 !important;
		font-size: 0.7rem;
		margin-top: 1rem;
	}
	.description_quote {
		border: 0.5px solid #999;
		padding: 0.5rem;
		color: #333333;
		font-size: 0.7rem;
		margin: 1rem 0;
	}

	.reference {
		color: #999999;
		margin: 0;
		font-size: 0.5rem;
		text-align: right;
		font-style: italic;
		line-height: 1.15 !important;
	}
	table {
		text-align: center;
		margin-left: auto;
		margin-right: auto;
	}
	td {
		padding-bottom: 1rem !important;
	}
	select {
		width: 100%;
		text-align: center;
	}
</style>
