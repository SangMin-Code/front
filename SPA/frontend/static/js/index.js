const navigateTo = (url) => {
	history.pushState(null, null, url);
	router();
};

const router = async () => {
	const routes = [
		{ path: '/', view: () => console.log('Viewing DashBoard') },
		{ path: '/posts', view: () => console.log('Viewing Posts') },
		{ path: '/settings', view: () => console.log('Viewing settings') },
	];

	//Test each route for potiential match
	const potentialMatches = routes.map((route) => {
		return {
			route: route,
			isMatch: location.pathname === route.path,
		};
	});

	let match = potentialMatches.find(
		(potentialMatch) => potentialMatch.isMatch
	);

	if (!match) {
		match = {
			route: routes[0],
			isMatch: true,
		};
	}
	console.log(potentialMatches);
	console.log(match.route.view);
};

window.addEventListener('popstate', router);

window.onload = () => {
	document.body.addEventListener('click', (e) => {
		if (e.target.matches('[data-link]')) {
			e.preventDefault();
			navigateTo(e.target.href);
		}
	});
	router();
};
