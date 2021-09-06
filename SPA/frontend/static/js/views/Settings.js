import AbstractView from './AbstractView.js';

export default class extends AbstractView {
	constructor() {
		super();
		this.setTitle('Settings');
	}

	async getHtml() {
		return `
            <h1>Settings</h1>
            <p>Hello This is Settings</p>
            <p>
                <a href="/posts" data-link>View recent Posts</a>
            </p>
        `;
	}
}
