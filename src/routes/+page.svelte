<script>
	import { Row, Col, Container } from "sveltestrap";
  	import { Select, Label, Radio } from 'flowbite-svelte';
  	import { reference, paper_infos, titles, design_implications, images, descriptions } from './data'
  
	let paper = 0;
	
	$: title_selection = titles[paper][0].value;
	$: design_implication_selection = design_implications[paper][0].value;
	$: image_selection = images[0].value;
	$: description_selection = descriptions[paper][0].value;
</script>

<svelte:head>
	<title>Design card demo</title>
	<meta name="description" content="Design cards" />
</svelte:head>

<Container>
	<Row class="d-flex align-items-center">
		<Col xs="12" sm="4" md="6">
			<table>
				<tr>
					<td>
						<Label>Select paper
							<Row class="mt-1 gx-2 gy-1 text-center">
								<Col xs="12" md="4" class="inline-flex">
									<Col xs="12" class="inline-flex px-3 py-2 cursor-pointer rounded-lg border border-gray-200 peer-checked:border-blue-200 hover:bg-gray-100">
										<Radio name="paper" bind:group={paper} custom value={0}>
											<div class="block cursor-pointer peer-checked:text-blue-600 text-gray-500 hover:text-gray-800">
												<p class="mb-0 lh-sm">Mobile interface design for low-literacy populations</p>
											</div>
										</Radio>
									</Col>
								</Col>
								<Col xs="12" md="4" class="inline-flex">
									<Col xs="12" class="inline-flex px-3 py-2 cursor-pointer rounded-lg border border-gray-200 peer-checked:border-blue-200 hover:bg-gray-100">
										<Radio name="paper" bind:group={paper} custom value={1}>
											<div class="block cursor-pointer peer-checked:text-blue-600 text-gray-500 hover:text-gray-800">
												<p class="mb-0 lh-sm">Co-designing mobile online safety applications with children</p>
											</div>
										</Radio>
									</Col>
								</Col>
								<Col xs="12" md="4" class="inline-flex">
									<Col xs="12" class="inline-flex px-3 py-2 cursor-pointer rounded-lg border border-gray-200 peer-checked:border-blue-200 hover:bg-gray-100">
										<Radio name="paper" bind:group={paper} custom value={2}>
											<div class="block cursor-pointer peer-checked:text-blue-600 text-gray-500 hover:text-gray-800">
												<p class="mb-0 lh-sm">Transparency for positive UX in autonomous driving</p>
											</div>
										</Radio>
									</Col>
								</Col>
							</Row>
						</Label>
					</td>
				</tr>
				<tr>
					<td>
						<Label>Select title style
							<Select class="mt-2" items={titles[paper]} bind:value={title_selection} />
						</Label>
					</td>
				</tr>
				<tr>
					<td>
						<Label>Select design implication style
							<Select class="mt-2" items={design_implications[paper]} bind:value={design_implication_selection} />
						</Label>
					</td>
				</tr>
				<tr>
					<td>
						<Label>Select image style
							<Select class="mt-2" items={images} bind:value={image_selection} />
						</Label>
					</td>
				</tr>
				<tr>
					<td>
						<Label>Select description style
							<Select class="mt-2" items={descriptions[paper]} bind:value={description_selection} />
						</Label>
					</td>
				</tr>
			</table>
		</Col>
		<Col xs="12" sm="8" md="6" class="mt-3 mt-sm-0">
			<div class="card">
				<h3 class="title">
					{title_selection}
				</h3>
				<p class="title-detail">
					{design_implication_selection}
				</p>
				<div class="paper-info-div">
					<p class="paper-info-heading">
						&#9432; What is this study about?
					</p>
					<p class="paper-info-detail">
						{paper_infos[paper]}
					</p>
				</div>
				<img class="image" src="{paper}-{image_selection}.png" />
				{#if description_selection != 1}
					<p class="description">
						{descriptions[paper][description_selection-1].text}
					</p>
				{:else}
					<div class="description_quote">
						<p style="margin: 0 !important; font-weight: 600 !important;">
							&#9432; Where does this come from?
						</p>
						<p style="margin: .5rem 0 0 0 !important; line-height: 1.25 !important;">
							<i>{descriptions[paper][description_selection-1].text}</i> (p. {descriptions[paper][description_selection-1].page})
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
		padding: 20px;
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
