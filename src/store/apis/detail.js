import {store} from "../store"

export async function user_detail(username) {
	var token = store.getState().auth_reducer.token
	try{
		let raw_data = await fetch(`https://spadequizapi.herokuapp.com/accounts/users/${username}.json`,{
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
		let raw_data = await fetch(`https://spadequizapi.herokuapp.com/accounts/update/${user}.json`,{
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
		let rToken = await fetch(`https://spadequizapi.herokuapp.com/accounts/change_password/${username}`,{
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

export async function my_tournaments(username) {
	
	try{
		let raw_data = await fetch(`https://spadequizapi.herokuapp.com/tournament/${username}`,{
			method: 'GET',
	        headers: {
	            'Accept': 'application/json',
	            'Content-Type': 'application/json',

	        }
 
		});

		
		let data = await raw_data.json();
		console.log(data)
		raw_data = null;
		return data
	}
	catch(error){
		console.log(error)
		throw error;
		
	}
}

export async function confirm_partnership(id, confirmed) {
	console.log("confirm api")
	try{
		let raw_data = await fetch(`https://spadequizapi.herokuapp.com/tournament/confirm_partnership/${id}`,{
			method: 'PUT',
	        headers: {
	            'Accept': 'application/json',
	            'Content-Type': 'application/json',

	        },
	        body: JSON.stringify({
	            confirmed: confirmed,
	           
	        })
 
		});

		
		let data = await raw_data.json();
		console.log(data)
		raw_data = null;
		return data
	}
	catch(error){
		console.log(error)
		throw error;
		
	}
}