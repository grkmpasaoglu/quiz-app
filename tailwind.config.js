module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
	  extend: {
		fontFamily: {
			'roboto-mono': ['Roboto Mono', 'monospace'],
			'lobster': ['Lobster', 'cursive'],
			'kalam': ['Kalam', 'cursive'],
			'indie-flower': ['Indie Flower', 'cursive'],
			'sacramento': ['Sacramento', 'cursive'],
			'press-start': ['"Press Start 2P"', 'system-ui'],
			'nabla': ['"Nabla"', 'system-ui'],
		},
		animation: {
		  'grow-shrink': 'growShrink 0.5s ease-in-out',
		  'shake': 'shake 0.5s ease-in-out',
		  'fade': 'fadeIn 1s ease-in-out',
		  'fadeOut': 'fadeOut 1s ease-in-out',
		},
		keyframes: {
		  growShrink: {
			'0%': { transform: 'scale(1)' },
			'50%': { transform: 'scale(1.1)' },
			'100%': { transform: 'scale(1)' },
		  },
		  shake: {
			'0%': { transform: 'translateX(0)' },
			'25%': { transform: 'translateX(-5px)' },
			'50%': { transform: 'translateX(5px)' },
			'75%': { transform: 'translateX(-5px)' },
			'100%': { transform: 'translateX(0)' },
		  },
		  fadeIn: {
			from: { opacity: 0 },
			to: { opacity: 1 },
		  },
		  fadeOut: {
			from: { opacity: 1 },
			to: { opacity: 0 },
		  },
		},
	  },
	},
	plugins: [],
  };
  