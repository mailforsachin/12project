// START OF THE PROJECT FOR PROJECT 2 FEEDBACK UI



// START OF PROJECT FOR PROJECT 1 DAD JOKE GENERATOR

    const btnElement = document.getElementById("btn");
    btnElement.addEventListener("click", getJoke)
    const apiKey ="5Gpr2U9DQnLZaVABCTLwRw==qfBmXoUvQQImI9xI"

    const options =
    {
        method: "GET",
        headers:
        {
            "X-Api-Key": apiKey,
            "Content-Type": "application/json"
        } 
    }

    const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

    async function getJoke()
    {
        try
        {
            document.getElementById("joke").innerText="Sanishcha and Banna have no patience...";
            btnElement.disabled=true;
            btnElement.innerText ="Loading"
            const response   = await(fetch(apiURL,options));
            const data =await response.json();
            btnElement.disabled=false;
            btnElement.innerText ="Tell me a Joke"
            document.getElementById("joke").innerText=data[0].joke;
        }
        catch(err)
        {
            btnElement.disabled=false;
            document.getElementById("joke").innerText="An error happened, try again!"
            btnElement.innerText ="Tell me a Joke"
        }
    }

// END OF PROJECT FOR PROJECT 1 DAD JOKE GENERATOR

