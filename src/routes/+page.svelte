
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<button  on:click={async ()=>{			
  

    const response = await fetch('/api/endpoint1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify('xapi')
    });
    const responseJSON = await response.json();
    if (responseJSON.error) {
        throw error(responseJSON.error.status, responseJSON.error.message);
    }

    console.log(responseJSON)
    return responseJSON;

 }}>EXEMPLO 1</button>