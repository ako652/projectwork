

const loadArtist = function(){
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/75621062`, {
    "method": "GET",
    "headers": {
    }
  })
  .then(response => {
     console.log(response);
    return response.json();
   
  })
  .then(data => {
    console.log(data)

    let mainSection = document.querySelector('.media')
    mainSection.innerHTML = ""
    mainSection.innerHTML = mainSection.innerHTML + `<div class="${data.id}  p-3 ">
    <img src=${data.cover_xl}   class="mr-3"  height="170px" width="200px" style="object-fit: cover;" alt="...">
    <div class="media-body align-self-end ">
      <h5 style="font-size: 12px;" class="mt-0">Album</h5>
      <p class="textwrapper">${data.title}</p>
      <div>
        <img src=${data.cover_big} style="height:30px; width:30px; border-radius: 50px; object-fit: cover;">
        <span> <a class="text-white" href="artist.html">Queen</a> </span><span class="text-muted">. 2018 . 22 songs, 1 hr 19 min</span>
      </div>
    </div>
  </div>`
    console.log(data)
    console.log(data.tracks.data)

    displayHtml(data.tracks.data)
  })
  .catch(err => {
    console.error(err);
  });
}

const displayHtml = (datas) => {
datas.forEach( data => {
let trackListArtist = `    
      <tr class="justify-content-center align-items-center">
<th class=" justify-content-center" scope="row">1</th>
<td>
  <span>${data.title}</span>

  <span>${data.title_short}</span>
  <br>

  <a class="text-muted " href=artist.html >${data.artist.name}</a>

</td>

<td>${data.duration}</td>`
let Table = document.getElementsByClassName("albumTracks ")
Table[0].insertAdjacentHTML("beforeend", trackListArtist);
});


 
}
loadArtist();

     
     
     

