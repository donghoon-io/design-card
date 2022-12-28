<script>
	let titles = [
		{ id: 1, text: "Designing bigger widgets and visualizing interactions", name: "Gerund format" },
		{ id: 2, text: "Make widgets bigger and visualize interactions", name: "Verb format" },
		{ id: 3, text: "Widgets and interactions", name: "Short noun" },
		{ id: 4, text: "Big widgets and visualized interactions", name: "Long noun" },
	];
	let images = [
		{ id: 1 },
		{ id: 2 },
		{ id: 3 },
		{ id: 4 },
	];
	let descriptions = [
		{ id: 1, name: "Short", text: "This study shows that people prefer and perform better with larger or medium-sized widgets, such as radio buttons, which provide feedback to the user. Designers should take this into account when designing widgets for touch screen interfaces of mobile devices." },
		{ id: 2, name: "Long", text: "This study revealed that the target low-literacy population can effectively use GUI widgets and navigation structures on touch screen interfaces. People prefer bigger or medium-sized widgets, and radio buttons work best due to their feedback mechanism. Designers should therefore create widgets that are bigger in size and provide visual feedback to users." },
		{ id: 3, name: "Reference", text: "Despite the mixed performance, we had a good response from participants on the usefulness of the cross-linked navigation bar. One participant commented, “I would rather use the small pictures on the top to save me from going HOME every time.” Another said, “The tabs were not big enough but they were helpful in giving options.” One more said, “It challenged me to think more about what I was doing.” (p. 98)" }
		
	];
	var title_selection = titles[0];
	var image_selection = images[0];
	var description_selection = descriptions[0];
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<select bind:value={title_selection}>
		{#each titles as title}
			<option value={title}>
				{title.name} title
			</option>
		{/each}
	</select>
	<select bind:value={image_selection}>
		{#each images as image}
			<option value={image}>
				Image {image.id}
			</option>
		{/each}
	</select>
	<select bind:value={description_selection}>
		{#each descriptions as description}
			<option value={description}>
				{description.name} description
			</option>
		{/each}
	</select>
	<div class="card">
	<h3 class="title">
		{title_selection.text}
	</h3>
	<p class="title-detail">
		Designers should design widgets that are bigger in size and allow the user to visualize interactions while designing for low-literacy population.
	</p>
	<div class="paper-info-div">
	<p class="paper-info-heading">
		&#9432; What is this study about?
	</p>
	<p class="paper-info-detail">
		This study found that the target low-literacy population preferred larger and medium-sized widgets, as well as radio buttons, when using touch screen interfaces on mobile devices. This suggests that designers should create larger widgets with feedback mechanisms to better accommodate this population.
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
		<p style="margin: .5rem 0 0 0 !important;"><i>Despite the mixed performance, we had a good response from participants on the usefulness of the cross-linked navigation bar. One participant commented, “I would rather use the small pictures on the top to save me from going HOME every time.” Another said, “The tabs were not big enough but they were helpful in giving options.” One more said, “It challenged me to think more about what I was doing.”</i> (p. 98)</p>
	</div>
	{/if}
	<p class="reference">
		Chaudry, B. M., Connelly, K. H., Siek, K. A., & Welch, J. L. (2012, January). Mobile interface design for low-literacy populations. In Proceedings of the 2nd ACM SIGHIT international health informatics symposium (pp. 91-100).
	</p>
	</div>
</section>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
  
	body {
		
	}
	.card {
	  font-family: 'Roboto', sans-serif;
	  box-shadow: 0 1px 2px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 7%), 0 4px 8px rgb(0 0 0 / 7%), 0 8px 16px rgb(0 0 0 / 7%), 0 16px 32px rgb(0 0 0 / 7%), 0 32px 64px rgb(0 0 0 / 7%);
	  width: 400px;
	  margin-left: auto;
	  margin-right: auto;
	  padding: 10px 20px;
	  background-color: white
	}
  
	.title {
	  margin-bottom: 10px !important;
	  color: #333333;
	  font-size: 1rem;
	}
  
	.title-detail {
	  color: #333333;
	  margin: 0px 0 15px 0;
	  font-size: .75rem
	}
  
	.paper-info-div {
	  background-color: rgb(223, 223, 223);
	  padding: 10px;
	}
  
	.paper-info-heading {
	  color: #333333;
	  margin: 0;
	  font-size: .75rem;
	  font-weight: 800
	}
  
	.paper-info-detail {
	  color: #333333;
	  margin: 5px 0 0 0;
	  font-size: .75rem
	}
  
	.image {
	  margin-top: 10px;
	  width: 100%;
	  height: auto;
	}
  
	.description {
	  color: #333333;
	  font-size: .75rem
	}
	.description_quote {
		border: .5px solid #999;
		padding: .5rem;
		color: #333333;
		font-size: .75rem
	}
  
	.reference {
	  color: #999999;
	  margin-top: 20px;
	  font-size: .65rem;
	  text-align: right;
	  font-style: italic;
	}
  </style>
  