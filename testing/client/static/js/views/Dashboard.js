import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('Dashboard');
  }

  async getHtml() {
    return `
        <h1>Welcome Back!</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, totam!</p>
        <p>
          <a href="/posts" data-link>View recent posts</a>
        </p>
    `;
  }
}
