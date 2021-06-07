/**
 * Web API
 */
export class WebAPI {
  static localInstance: WebAPI;

  static get instance(): WebAPI {
    return this.localInstance || (this.localInstance = new WebAPI());
  }

  getAuth() {
    return {
      auth: '',
      key: '',
      password: ''
    }
  }
}
