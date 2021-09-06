import AbstractView from './AbstractView.js';

export default class extends AbstractView {
	constructor() {
		this.setTitle('Dashboard');
	}

	async getHtml() {
		return `
            <h1>Welcome back, Dom</h1>
            <p>Hello This is Dashboard</p>
            <p>
                <a href="/posts" data-link>View recent Posts</a>
            </p>
        `;
	}
}
