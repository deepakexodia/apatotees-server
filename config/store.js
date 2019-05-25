const domain = process.env.URL || 'localhost';
// config used by store client side only
module.exports = {
	// store UI language
	language: 'en',
	ajaxBaseUrl: `http://${domain}:${process.env.PORT || 3001}/ajax`
};
