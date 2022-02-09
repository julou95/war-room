import { init } from 'next-firebase-auth'

const initAuth = () => {
	init({
		authPageURL: '/user',
		appPageURL: '/',
		loginAPIEndpoint: '/api/login', // required
		logoutAPIEndpoint: '/api/logout', // required
		// Required in most cases.
		firebaseAdminInitConfig: {
			credential: {
				projectId: 'war-room-e7e69',
				clientEmail: 'firebase-adminsdk-64p3v@war-room-e7e69.iam.gserviceaccount.com',
				// The private key must not be accesssible on the client side.
				privateKey: process.env.FIREBASE_PRIVATE_KEY,
			},
			databaseURL: 'https://war-room-e7e69-default-rtdb.europe-west1.firebasedatabase.app',
		},
		firebaseClientInitConfig: {
			apiKey: 'AIzaSyAkTZgXXuNdzeVHp2JGdOulWnTnOC31lSY', // required
			authDomain: 'war-room-e7e69.firebaseapp.com',
			databaseURL: 'https://war-room-e7e69-default-rtdb.europe-west1.firebasedatabase.app',
			projectId: 'war-room-e7e69',
		},
		cookies: {
			name: 'war-room-e7e69', // required
			// Keys are required unless you set `signed` to `false`.
			// The keys cannot be accessible on the client side.
			keys: [
				process.env.COOKIE_SECRET_CURRENT,
				process.env.COOKIE_SECRET_PREVIOUS
			],
			httpOnly: true,
			maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
			overwrite: true,
			path: '/',
			sameSite: 'strict',
			secure: true, // set this to false in local (non-HTTPS) development
			signed: true,
		},
	})
}

export default initAuth