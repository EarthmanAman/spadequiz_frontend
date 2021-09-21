export async function login(username, password) {
	console.log("in login")
	try{
		let rToken = await fetch(`http://127.0.0.1:8000/api/token/`,{
			method: 'POST',
	        headers: {
	            'Accept': 'application/json',
	            'Content-Type': 'application/json',

	        },
	        body: JSON.stringify({
	            username: username,
	            password: password,
	        })
 
		});

		
		let token = await rToken.json();
		rToken = null;
		return token
	}
	catch(error){
		console.log(error)
		throw error;
		
	}
}


export async function register(username, email, dob, password, confirm_password, avatar) {
	let form_data = new FormData()
	form_data.append('username', username)
	form_data.append('email', email)
	form_data.append('dob', dob)
	form_data.append('password', password)
	form_data.append('confirm_password', confirm_password)
	form_data.append('avatar', avatar)
	console.log(username)
	try{
		let rToken = await fetch(`http://127.0.0.1:8000/accounts/user_create`,{
			method: 'POST',

	        body: form_data
		});

		
		let token = await rToken.json();
		rToken = null;
		console.log(token)
		return token
	}
	catch(error){
		console.log(error)
		throw error;
		
	}
}