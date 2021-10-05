import { instance } from "./ApiConfig";

class Authenticated {
	
	// login = (username, password) => instance.post('/reactApp',{username, password});
	login = async (username, password) => {
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				if (username==='Ehsan'&& password === '1010') {
					let obj = {
						name: 'Ehsan', Family: 'Jaberi', Age: 23,token: 'fake_token'
					}
					resolve(obj);
				}
				reject();
			},1000)
		})
	}

	isAuth() {
		return true;
	}
}
export default new Authenticated();
