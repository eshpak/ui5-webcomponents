#!/usr/bin/env node

const fs = require('fs-extra');
const api = require('./packages/main/dist/api.json');
const njk = require('nunjucks');
const htmlToJson = require('html-to-json');
const path = require('path');
const sourcePath = path.join(process.cwd());
const features = fs.readdirSync('./packages/main/dist/features/');
const samples = fs.readdirSync('./packages/main/test/samples/');

const storiesDir = 'stories_generated'

njk.configure({ autoescape: false });

const getComponentProps = (symbolProps) => {
	let props = symbolProps || [];

	return props.filter(prop => prop.hasOwnProperty('defaultValue'))
		.map(prop => {
			return {
				...prop,
				...{ kebab: kebabize(prop.name) },
				...{ propValues: getPropValues(prop.type) },
				...{ description: prop.description.replace(/(\r\n|\n|\r)/gm, "") }
			};
		});
}

const writeStory = (symbol, dependencies, stories, content) => {
	const pathToTemplate = path.join(sourcePath, '', `story.njk`);
	const targetPath = path.join(process.cwd(), storiesDir);

	const data = {
		component: {
			...symbol,
			dependencies,
			props: getComponentProps(symbol.properties),
		},
		stories,
		content
	}

	fs.writeFileSync(path.join(targetPath, `${data.component.basename}.stories.js`), njk.render(pathToTemplate, data));
};

const getDependencies = (symbol) => {
	let res = [];

	if (!symbol.hasOwnProperty('slots')) return res;

	const tmp = symbol.slots
		.filter(slot => slot.type.includes('sap.ui.webcomponents.main'))
		.map(slot => slot.type)
		.forEach(type => {
			let dep = type.replace('[]', '').replace('sap.ui.webcomponents.main.I', '');
			const extraFeature = features
				.filter(feature => feature.includes(dep.replace('Item', '')));

			dep = dep === 'SelectOption' ? 'Option' : dep;
			dep = extraFeature.length > 0 ? `features/${extraFeature[0].replace('.js', '')}` : dep;
			res.push(dep);
		});

	return res;
};

const kebabize = str => {
	return str.split('').map((letter, idx) => {
		return letter.toUpperCase() === letter
			? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
			: letter;
	}).join('');
}

const getPropValues = (type) => {
	const item = api.symbols.filter(symbol => symbol.name === `sap.ui.webcomponents.main.types.${type}`);
	let res = [];

	if (item.length > 0) {
		const values =  item[0].properties || [];
		const names = values.map(value => value.name);

		res = names;
	}

	return res;
};

const getSamples = (symbol, target, asHtml) => {
	const name = symbol.basename;
	const pathToSamples = path.join(sourcePath, 'packages', 'main', 'test', 'samples', `${name}.sample.html`);
	let html = '';

	if (fs.existsSync(pathToSamples)) {
		html = fs.readFileSync(pathToSamples, 'utf-8') ;

		if ((name === "Avatar" || name === "AvatarGroup") && target === 'section h3') {
			target = 'section h4'
		}
	}

	return htmlToJson.parse(html,
		function () {
			return this.map(target, (item) => {
				const hasAttributes = (target.includes('snippet') && item && item.length > 0 && item[0].attribs.hasOwnProperty("class"));
				const attributes = (hasAttributes) ? item[0].attribs.class : '';

				return {
					text: asHtml ? item.html() : item.text(),
					attributes
				}
			})
		}
	);
}

const copyAssets = () => { 
	const destDir = path.join(process.cwd(), storiesDir, 'assets', 'images')
   const srcDir = path.join(process.cwd(), 'packages', 'playground', 'assets', 'images')

	fs.copy(srcDir, destDir, function (err) {
		if (err) {
			console.error(err);
		}
	});
}

(async () => {
	console.log('Writing stories...');

	fs.ensureDir(path.join(process.cwd(), storiesDir));
	copyAssets();

	const sampleNames = samples.map(s => s.replace('.sample.html', ''));
	const symbols = api.symbols
		.filter(symbol => symbol.hasOwnProperty('tagname'))
		.filter(symbol => sampleNames.indexOf(symbol.basename) > 0);

	for (const symbol of symbols) {
		const dependencies = getDependencies(symbol);

		const headers = await getSamples(symbol, 'section h3', false);
		const snippets = await getSamples(symbol, `section .snippet`, true);
		const scripts = await getSamples(symbol, 'section script', true);
		const components = await getSamples(symbol, `section .snippet > ${symbol.tagname}`, true);

		const stories = [];

		headers
			.forEach((header, i) => {
				const snippetAttributes = snippets[i] ? snippets[i].attributes : '';
				const snippetText = snippets[i].text.replace(/(\r\n|\n|\r)/gm, "").replace(/(<script)(.+?)(script>)/, "")
				const snippet = !!snippetAttributes ? `<div class="${snippetAttributes}">${snippetText}</div>` : snippetText;

				stories.push({
					storyName: header.text,
					header: header.text.match(/[a-zA-Z]+/g).join('').replace(" ", ""),
					snippet,
					script: (scripts[i]) ? scripts[i].text : '',
				});
			})

		writeStory(symbol, dependencies, stories, components[0] || { text: '' });
	}

	console.log('Done!');
})();
