import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class ApplicationRoute extends Route {
  async model() {

    //let auth = await fetch('https://api.onepeloton.com/auth/login', {
      //method: 'POST',
      //body: JSON.stringify({
        //'username_or_email': 'user',
        //'password': 'password'
      //})
    //});
    let resp = await fetch('https://api.onepeloton.com/api/me');
    let user = resp.json();

  }
}
