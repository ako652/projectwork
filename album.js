const loadArtist = function(){
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/75621062`, {
    "method": "GET",

  })
  .then(response => {

    return response.json();
   
  })
  .then(data => {

     displayHtml(data.tracks.data)
  })
  .catch(err => {
    console.error(err);
  });0
}

const displayHtml = (datas) => {
datas.forEach( data => {
let trackListArtist = `    
      <tr class="justify-content-center align-items-center">
<th class=" justify-content-center" scope="row">1</th>
<td>
  <span>${data.title}</span>
  <span>--</span> <br>
  <a class="text-muted" href="artist.html">Queen</a>
</td>

<td>${data.duration}</td>`
let albumTracksRow = document.getElementsByClassName("albumTracks")
albumTracksRow[0].insertAdjacentHTML("beforeend", trackListArtist);
});
} 
loadArtist();