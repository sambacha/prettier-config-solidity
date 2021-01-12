// Prettier Configuration for Solidity
// Settings based from Solidity Documentation 
module.exports = {
	"arrowParens": "avoid",
	"bracketSpacing": true,
	"endOfLine": "auto",
	"printWidth": 120,
	"singleQuote": false,
	"tabWidth": 2,
	"trailingComma": "all",
	overrides: [{
		files: '*.sol',
		options: {
			printWidth: 145,
			tabWidth: 4,
			useTabs: false,
			singleQuote: false,
			bracketSpacing: false,
			explicitTypes: 'always'
		}
	}]
};
