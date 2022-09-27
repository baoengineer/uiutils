module.exports = ({ env }) => {
	const PROD = env === 'production';
	return {
		plugins: [
			require('postcss-import'),
			require('tailwindcss'),
			require('postcss-flexbugs-fixes'),
			require('autoprefixer'),
			...(PROD
				? [
						require('cssnano')({
							preset: [
								'default',
								{
									cssDeclarationSorter: false,
									discardComments: {
										removeAll: true,
									},
								},
							],
						}),
				  ]
				: []),
		],
	};
};
