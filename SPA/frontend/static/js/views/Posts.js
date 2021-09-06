import AbstractView from './AbstractView.js';

export default class extends AbstractView {
	constructor() {
		super();
		this.setTitle('Posts');
	}

	async getHtml() {
		return `
            <h1>Posts</h1>
            <p>Hello This is Posts</p>
            <p>
                <a href="/posts" data-link>View recent Posts</a>
            </p>
        `;
	}
}
