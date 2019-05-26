const serverUrl = process.env.SERVERURL || 'localhost:3001';
// config used by store client side only
module.exports = {
	// store UI language
	language: 'en',
	ajaxBaseUrl: `https://${serverUrl}/ajax`
};
