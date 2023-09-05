const URL = 'https://api.thecatapi.com/v1/images/search';
// Fetching Cats from the Server
const fetchCats = async () => {
    try {
        return await axios.get(URL);
    }
    catch (e) {
        alert ("Sorry there was an error:", e);
    }
}

const catGenerator = async () => {
    const dataCats = await fetchCats ();
    source=dataCats.data[0].url;
    appendIMG(source);
    
}

const appendIMG = (link) => {
   
    // console.log (photo.src);
    catPicture = document.querySelector('#catimg');
    catPicture.src = link;
  
}




const btn = document.querySelector('#btn');
btn.addEventListener ('click', catGenerator);

