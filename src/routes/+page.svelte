<script>
	let titles = [
		{ id: 1, text: "Designing bigger widgets and visualizing interactions", name: "Gerund format" },
		{ id: 2, text: "Make widgets bigger and visualize interactions", name: "Verb format" },
		{ id: 3, text: "Widgets and interactions", name: "Short noun" },
		{ id: 4, text: "Big widgets and visualized interactions", name: "Long noun" },
	];
	let design_implications = [
		{ id: 1, name: "Short", text: "When designing for low-literacy population, widgets should be bigger and interactions should be visualized." },
		{ id: 2, name: "Mid-length", text: "Designers should design widgets that are bigger in size and allow the user to visualize interactions while designing for low-literacy population." },
		{ id: 3, name: "Long", text: "Given that low-literacy population in this study preferred bigger widgets, such as radio buttons, and visualized interactions, designers should consider including bigger widgets and interaction visualization in their design." }
		
	];
	let images = [
		{ id: 1, name: "Abstract line drawing" },
		{ id: 2, name: "Detailed B&W drawing" },
		{ id: 3, name: "High-detail photo (#1)" },
		{ id: 4, name: "High-detail photo (#2)" },
	];
	let descriptions = [
		{ id: 1, name: "Short", text: "Low-literacy users prefer and perform better with larger or medium-sized widgets (e.g., radio buttons), which provide feedback to the user. Designers should consider this when designing widgets for touch screen interfaces of mobile devices." },
		{ id: 2, name: "Long", text: "Low-literacy population can effectively use GUI widgets and navigation structures on touch screen interfaces. They prefer bigger or medium-sized widgets, and radio buttons work best due to the feedback mechanism. Thus, designers should therefore create widgets that are bigger in size and provide visual feedback to users." },
		{ id: 3, name: "Reference", text: "Despite the mixed performance, we had a good response from participants on the usefulness of the cross-linked navigation bar. One participant commented, “I would rather use the small pictures on the top to save me from going HOME every time.” Another said, “The tabs were not big enough but they were helpful in giving options.” One more said, “It challenged me to think more about what I was doing.” (p. 98)" }
		
	];
	var title_selection = titles[0];
	var design_implication_selection = design_implications[0];
	var image_selection = images[0];
	var description_selection = descriptions[0];
</script>

<svelte:head>
	<title>Design card demo</title>
	<meta name="description" content="Design cards" />
</svelte:head>

<section>
	<table>
		<tr>
		  <th>Title</th>
		  <th>Design implication</th>
		  <th>Image</th>
		  <th>Description</th>
		</tr>
		<tr>
		  <td>
			<select bind:value={title_selection}>
				{#each titles as title}
					<option value={title}>
						{title.name} title
					</option>
				{/each}
			</select>
		  </td>
		  <td>
			<select bind:value={design_implication_selection}>
				{#each design_implications as design_implication}
					<option value={design_implication}>
						{design_implication.name} design implication
					</option>
				{/each}
			</select>
		  </td>
		  <td>
			<select bind:value={image_selection}>
				{#each images as image}
					<option value={image}>
						{image.name}
					</option>
				{/each}
			</select>
		  </td>
		  <td>
			<select bind:value={description_selection}>
				{#each descriptions as description}
					<option value={description}>
						{description.name} description
					</option>
				{/each}
			</select>
		  </td>
		</tr>
	</table>
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
			In this study, the authors found that the low-literacy population preferred larger and medium-sized widgets, as well as radio buttons, when using touch screen interfaces on mobile devices. This suggests that designers should create larger widgets with feedback mechanisms to better accommodate this population.
		</p>
		</div>
		<img class="image" src="{image_selection.id}.png">
		{#if description_selection.id != 3}
		<p class="description">
			{description_selection.text}
		</p>
		{:else}
		<div class="description_quote">
			<p style="margin: 0 !important; font-weight: 600 !important;">&#9432; Where does this come from?</p>
			<p style="margin: .5rem 0 0 0 !important; line-height: 1.25 !important;"><i>Despite the mixed performance, we had a good response from participants on the usefulness of the cross-linked navigation bar. One participant commented, “I would rather use the small pictures on the top to save me from going HOME every time.” Another said, “The tabs were not big enough but they were helpful in giving options.” One more said, “It challenged me to think more about what I was doing.”</i> (p. 98)</p>
		</div>
		{/if}
		<p class="reference">
			Chaudry, B. M., Connelly, K. H., Siek, K. A., & Welch, J. L. (2012, January). Mobile interface design for low-literacy populations. In Proceedings of the 2nd ACM SIGHIT international health informatics symposium (pp. 91-100).
		</p>
	</div>
</section>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
	
	.card {
	  font-family: 'Roboto', sans-serif;
	  box-shadow: 0 1px 2px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 7%), 0 4px 8px rgb(0 0 0 / 7%), 0 8px 16px rgb(0 0 0 / 7%), 0 16px 32px rgb(0 0 0 / 7%), 0 32px 64px rgb(0 0 0 / 7%);
	  width: 350px;
	  margin-left: auto;
	  margin-right: auto;
	  padding: 10px 20px;
	  background-color: white;
	  line-height: 1 !important;
	}
  
	.title {
	  margin-bottom: 10px !important;
	  color: #333333;
	  font-size: .9rem;
	}
  
	.title-detail {
	  color: #333333;
	  margin: 0px 0 15px 0;
	  font-size: .7rem;
	  	line-height: 1.25 !important;
	}
  
	.paper-info-div {
	  background-color: rgb(223, 223, 223);
	  padding: 10px;
	}
  
	.paper-info-heading {
	  color: #333333;
	  margin: 0;
	  font-size: .7rem;
	  font-weight: 800;
	}
  
	.paper-info-detail {
	  color: #333333;
	  margin: 5px 0 0 0;
	  font-size: .7rem;
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
	  font-size: .7rem
	}
	.description_quote {
		border: .5px solid #999;
		padding: .5rem;
		color: #333333;
		font-size: .7rem
	}
  
	.reference {
	  color: #999999;
	  margin-top: 20px;
	  font-size: .5rem;
	  text-align: right;
	  font-style: italic;
	  line-height: 1.15 !important;
	}
	table, th, td {
		border: 1px solid black;
		text-align: center;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 1rem;
	}
  </style>
  