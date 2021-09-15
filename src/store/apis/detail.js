import {store} from "../store"

export async function user_detail(username) {
	var token = store.getState().auth_reducer.token
	try{
		let raw_data = await fetch(`http://localhost:8000/accounts/users/${username}.json`,{
			method: 'GET',
	        headers: {
	            'Accept': 'application/json',
	            'Content-Type': 'application/json',
	            "Authorization": `Token ${token}`

	        },
 
		});

		
		let data = await raw_data.json();
		raw_data = null;
		return data
	}
	catch(error){
		console.log(error)
		throw error;
		
	}
}


export async function update_user(user, username, email, dob, gender, avatar) {
	var token = store.getState().auth_reducer.token
	let form_data = new FormData()
	form_data.append('username', username)
	form_data.append('email', email)
	form_data.append('dob', dob)
	form_data.append('gender', gender)
	if(avatar !== null){
		form_data.append('avatar', avatar)
	}else{
		console.log("no avatt")
	}
	
	
	try{
		let raw_data = await fetch(`http://localhost:8000/accounts/update/${user}.json`,{
			method: 'PUT',

	        body: form_data
		});

		
		let data = await raw_data.json();
		raw_data = null;
		console.log(data)
		return data
	}
	catch(error){
		console.log(error)
		throw error;
		
	}
}


export async function update_password(username, new_password, old_password) {
	
	try{
		let rToken = await fetch(`http://localhost:8000/accounts/change_password/${username}`,{
			method: 'PUT',
	        headers: {
	            'Accept': 'application/json',
	            'Content-Type': 'application/json',

	        },
	        body: JSON.stringify({
	            new_password: new_password,
	            old_password: old_password,
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