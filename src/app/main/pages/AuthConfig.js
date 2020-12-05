import React from 'react';

const AuthConfig = {
	settings: {
		layout: {
			config: {
				toolbar: false,
				navbar: false,
				footer:false,
				settings:false,
			}
		}
	},
	routes: [
		{
			path: '/login',
			component: React.lazy(() => import('./LoginPage'))
		},
		{
			path: '/register',
			component: React.lazy(() => import('./RegisterPage'))
		},
		{
			path: '/forgotpassword',
			component: React.lazy(() => import('./ForgotPasswordPage'))
		}
	]
};

export default AuthConfig;
