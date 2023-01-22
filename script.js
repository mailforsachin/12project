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
    
    
    document.getElementById("joke").innerText="Sanishcha and Banna have no patience...";
    const response   = await(fetch(apiURL,options));
    const data =await response.json();
    document.getElementById("joke").innerText=data[0].joke;
}