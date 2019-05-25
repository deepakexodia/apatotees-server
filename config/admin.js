const domain = process.env.URL || 'localhost';
// config used by dashboard client side only
module.exports = {
	// dashboard UI language
	language: 'en',
	apiBaseUrl: `http://${domain}:${process.env.API_PORT || 3001}/api/v1`,
	apiWebSocketUrl: `ws://${domain}:${process.env.API_PORT || 3001}`,
	developerMode: true
};
