const serverUrl = process.env.SERVERURL || 'localhost:3001';
// config used by dashboard client side only
module.exports = {
	// dashboard UI language
	language: 'en',
	apiBaseUrl: `https://${serverUrl}/api/v1`,
	apiWebSocketUrl: `wss://${serverUrl}`,
	developerMode: true
};
