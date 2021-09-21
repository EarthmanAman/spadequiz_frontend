export async function my_league(slug) {
	
	try{
		let raw_data = await fetch(`http://127.0.0.1:8000/${slug}`,{
			method: 'GET',
	        headers: {
	            'Accept': 'application/json',
	            'Content-Type': 'application/json',

	        },
 
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


export async function my_league_announcements(slug) {
	
	try{
		let raw_data = await fetch(`http://127.0.0.1:8000/${slug}/announcements.json`,{
			method: 'GET',
	        headers: {
	            'Accept': 'application/json',
	            'Content-Type': 'application/json',

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