<script>
	import { Row, Col, Container } from "sveltestrap";

	let paper = 0;

	let reference = [
		"Chaudry, B. M., Connelly, K. H., Siek, K. A., & Welch, J. L. (2012, January). Mobile interface design for low-literacy populations. In Proceedings of the 2nd ACM SIGHIT international health informatics symposium (pp. 91-100).",
		"McNally, B., Kumar, P., Hordatt, C., Mauriello, M. L., Naik, S., Norooz, L., ... & Druin, A. (2018, April). Co-designing mobile online safety applications with children. In Proceedings of the 2018 CHI Conference on Human Factors in Computing Systems (pp. 1-9).",
		"Schneider, T., Hois, J., Rosenstein, A., Ghellal, S., Theofanou-Fülbier, D., & Gerlicher, A. R. (2021, May). Explain yourself! transparency for positive ux in autonomous driving. In Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems (pp. 1-12)."
	]

	let paper_infos = [
		"In this study, the authors found that the low-literacy population preferred larger and medium-sized widgets, as well as radio buttons, when using touch screen interfaces on mobile devices. This suggests that designers should create larger widgets with feedback mechanisms to better accommodate this population.",
		"The authors conducted two co-design sessions with 12 children to investigate their perceptions of parental mobile monitoring technologies and explore their interaction preferences. The results showed that children accepted certain parental controls, and preferred controls that emphasized restriction, taught risk coping, and automated interactions.",
		"The authors evaluated the effects of transparency on the UX of autonomous driving, and found that explanations during/after the ride can help mitigate negative user experience. They contribute an initial guideline for autonomous driving experience design, combining the areas of UX, explainable AI, and autonomous driving."
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
				text: "Balancing parental mobile monitoring",
				name: "Gerund format",
			},
			{
				text: "Balance monitoring and child's privacy",
				name: "Verb format",
			},
			{
				text: "Parental mobile monitoring",
				name: "Short noun" },
			{
				text: "Balance between monitoring and the privacy of children",
				name: "Long noun",
			}
		],
		[
			{
				text: "Explaining ride to improve UX",
				name: "Gerund format",
			},
			{
				text: "Explain driving environment real-time to improve UX",
				name: "Verb format",
			},
			{
				text: "Live explanation of rides",
				name: "Short noun" },
			{
				text: "Explanation of rides in a real-time which can improve UX",
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
				text: "Parental mobile monitoring apps should restrict monitoring or actively incorporate (semi-)automated monitoring",
			},
			{
				name: "Mid-length",
				text: "Parental mobile monitoring applications should restrict monitoring or actively incorporate semi-automated/automated monitoring to help protect children's privacy.",
			},
			{
				name: "Long",
				text: "Parental mobile monitoring applications should emphasize the use of restriction over monitoring features and incorporate automated or semi-automated monitoring approaches to help protect children while maintaining a layer of privacy.",
			},
		],
		[
			{
				name: "Short",
				text: "Live explanations should be provided to help neutralize the negative effects on the UX.",
			},
			{
				name: "Mid-length",
				text: "Live explanations should be provided to neutralise the possible negative effects of autonomous driving on the user experience.",
			},
			{
				name: "Long",
				text: "Live explanations of the driving should be provided to passengers in order to neutralise the possible negative effects autonomous driving has on the user experience.",
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
				text: "Parental mobile monitoring applications should emphasize the use of restriction over monitoring features and incorporate automated or semi-automated approaches in order to protect children while maintaining a layer of privacy and offering time savings for parents.",
			},
			{
				name: "Long",
				text: "Children's designs for parental mobile monitoring applications emphasize the use of restriction over monitoring features, as well as automated or semi-automated monitoring approaches to help protect children while maintaining a layer of privacy. These approaches could create congruence between mobile monitoring activities and the highly varied ways families manage technology use.",
			},
			{
				name: "Reference",
				text: "Children’s designs incorporated automatic interventions across features focused on both self-regulation and parental control. For instance, children designed features for the automatic restriction of contacts when a threat was encountered, a task usually designated to parents: “So, if somebody says a bad word [the app] will automatically say, ‘This person said a bad word. He or she will be blocked so that person can’t talk with you anymore’” (P9).",
				page: "523"
			},
		],
		[
			{
				name: "Short",
				text: "Providing live explanations during an autonomous driving scenario had a positive effect on the user experience, while the mobile application afterwards had a different effect depending on whether the passengers had received the live explanations or not.",
			},
			{
				name: "Long",
				text: "The effects of system explanations on the user experience in an autonomous driving scenario was investigated, suggesting that live explanations were sufficient to neutralise the negative effects on the UX. Additionally, the mobile application after the drive was found to be beneficial for those with no live explanations.",
			},
			{
				name: "Reference",
				text: "Participants rated the drive without live explanations (Adrive) with a neutral PQ (M=-0.59, α=0.67), a negative HQ (M=-1.41, α=0.88) leading to a negative overall score (M=-1.00). They rated the mobile application after the drive without live explanations (Aapp) with a neutral PQ (M=0.06, α=0.55) and a neutral HQ (M=- 0.26, α=0.86) leading to a neutral overall score (M=-0.08). For the drive with live explanations (Bdrive) participants evaluated the PQ (M=0.18, α=0.89) and the HQ as neutral (M=-0.51, α=0.71) which resulted in a neutral overall score (M=-0.17). The mobile application after the drive with explanations (Bapp) was rated with a neutral PQ (M=0.30, α=0.90), a neutral HQ (M=-0.50, (α=0.89) and a neutral overallscore (M=-0.10) by the participants.",
				page: "7"
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
		<Col xs="12" sm="4" md="6">
			<table>
				<tr>
					<th>Paper</th>
				</tr>
				<tr>
					<td>
					<Row>
						<label>
							<input type="radio" bind:group={paper} name="paper" value={0}/>
							Mobile interface design for low-literacy populations <a href="https://dl.acm.org/doi/abs/10.1145/2110363.2110377">[Link]</a>
						</label>
					</Row>
					<Row>
						<label>
							<input type="radio" bind:group={paper} name="paper" value={1} />
							Co-designing mobile online safety applications with children <a href="https://dl.acm.org/doi/abs/10.1145/3173574.3174097">[Link]</a>
						</label>
					</Row>
					<Row>
						<label>
							<input type="radio" bind:group={paper} name="paper" value={2} />
							Transparency for positive UX in autonomous driving <a href="https://dl.acm.org/doi/abs/10.1145/3411764.3446647">[Link]</a>
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
		<Col xs="12" sm="8" md="6">
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
