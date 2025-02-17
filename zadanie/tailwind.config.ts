import type { Config } from 'tailwindcss';

export default {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',

				surface: {
					'x-high': '#8C8C9A',
					'x-low': '#FFFFFF',
					brand: '#0050FF',
					danger: '#DC2828',
					'danger-variant': '#FFCDCD',
					warning: '#A56315',
					'warning-variant': '#FAF1B6',
				},

				content: {
					'on-neutral': {
						'xx-high': '#2C2C31',
						medium: '#8C8C9A',
						low: '#C9C9CE',
						danger: '#DC2828',
						warning: '#A56315',
					},
				},

				state: {
					default: {
						hover: 'rgba(26, 26, 26, 0.06)', // #1A1A1A0F, 6%
						focus: 'rgba(26, 26, 26, 0.80)', // #1A1A1ACC, 80%
					},
				},
			},

			fontFamily: {
				label: ['On Air Var', 'sans-serif'],
				body: ['On Air Var', 'sans-serif'],
			},

			fontSize: {
				'label-m': '16px',
				'label-s': '14px',
				'body-m': '16px',
			},

			fontWeight: {
				'label-m': '500',
				'label-s': '550',
				'body-m': '400',
			},

			lineHeight: {
				'label-m': '22px',
				'label-s': '17px',
				'body-m': '22px',
			},

			letterSpacing: {
				'label-m': '0.16px',
				'label-s': '0.16px',
				'body-m': '0.01px',
			},

			spacing: {
				xs: '8px',
				s: '12px',
				m: '16px',
				l: '20px',
			},

			borderRadius: {
				input: '12px',
			},
		},
	},
	plugins: [],
} satisfies Config;
