const serverUrl = process.env.SERVERURL || 'localhost:3001';
// config used by dashboard client side only
module.exports = {
	// dashboard UI language
	language: 'en',
	apiBaseUrl: `http://${serverUrl}/api/v1`,
	apiWebSocketUrl: `ws://${serverUrl}`,
	developerMode: true
};
