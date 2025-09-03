// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	markdown: {
		shikiConfig: {
			themes: { light: 'github-light', dark: 'github-dark' },
		},
	},
	integrations: [
		starlight({
			title: 'Aethel Documentation',
			logo: { src: '/src/assets/aethel dark.png', alt: 'Aethel' },
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/aethel-labs/aethel' }],
			customCss: ['/src/styles/custom.css'],
			editLink: { baseUrl: 'https://github.com/aethel-labs/aethel-docs/edit/main/' },
			lastUpdated: true,
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', link: '/' },
					]
				},
				{
					label: 'Development',
					items: [
						{ label: 'Environment Variables', link: 'environment-variables' },
						{ label: 'Development Guide', link: 'developing' }
					]
				},
				{
					label: 'Deployment',
					items: [
						{ label: 'Production Deployment', link: 'deploying-to-production' }
					]
				}
			],
		}),
	],
	
	server: {
		allowedHosts: ['docs.aethel.xyz']
	},
});
