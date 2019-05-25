// config used by server side only
// const dbHost = process.env.DB_HOST || '127.0.0.1';
// const dbPort = process.env.DB_PORT || 27017;
// const dbName = process.env.DB_NAME || 'shop';
// const dbUser = process.env.DB_USER || '';
// const dbPass = process.env.DB_PASS || '';
// const dbCred =
// 	dbUser.length > 0 || dbPass.length > 0 ? `${dbUser}:${dbPass}@` : '';

// const dbUrl =
// 	process.env.DB_URL || `mongodb://${dbCred}${dbHost}:${dbPort}/${dbName}`;
const dbUrl =
	process.env.DB_URL ||
	// 'mongodb://shashank:g9971441252@ds139341.mlab.com:39341/cart';
	// 'mongodb://shashank:g9971441252@ds155396.mlab.com:55396/tobaniware';
	'mongodb://shashank:g9971441252@ds155606.mlab.com:55606/apatotees';

const domain = process.env.URL || 'apatotees.herokuapp.com';

module.exports = {
	apiListenPort: process.env.API_PORT || 3001,
	storeListenPort: process.env.STORE_PORT || 3000,
	// used by Store (server side)
	apiBaseUrl: `${domain}:${process.env.API_PORT || 3001}/api/v1`,

	// used by Store (server and client side)
	ajaxBaseUrl: `${domain}:${process.env.API_PORT || 3001}/ajax`,

	// Access-Control-Allow-Origin
	storeBaseUrl: `${domain}:${process.env.STORE_PORT || 3000}`,

	// used by API
	adminLoginUrl: '/admin/login',
	// used by API
	mongodbServerUrl: dbUrl,

	smtpServer: {
		host: '',
		port: 0,
		secure: true,
		user: '',
		pass: '',
		fromName: '',
		fromAddress: ''
	},

	// key to sign tokens
	jwtSecretKey: '-',

	// key to sign store cookies
	cookieSecretKey: '-',

	// path to uploads
	categoriesUploadPath: 'public/content/images/categories',
	productsUploadPath: 'public/content/images/products',
	filesUploadPath: 'public/content',
	themeAssetsUploadPath: 'theme/assets/images',

	// url to uploads
	categoriesUploadUrl: '/images/categories',
	productsUploadUrl: '/images/products',
	filesUploadUrl: '',
	themeAssetsUploadUrl: '/assets/images',

	// store UI language
	language: 'en',

	// used by API
	orderStartNumber: 1000,

	developerMode: true
};
