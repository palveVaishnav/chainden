export async function GET(request){
	return new Response(JSON.stringify({message : "Hello from routes"}),{
		status:200,		
	});

}
