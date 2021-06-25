let newRow = document.querySelectorAll(".tableRowtoHover");
for (let i = 0; i < newRow.length; i++) {
  let currentRow = newRow[i];
  currentRow.addEventListener("click", function () {
    currentRow.style.color = "greenyellow";
  });
}



    const loadArtist = function(){
            fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/75621062`, {
            "method": "GET",
            "headers": {
            }
          })
          .then(response => {
        
            return response.json();
           
          })
          .then(data => {
            console.log(data.tracks.data)
          //displayHtml(data)
          })
          .catch(err => {
            console.error(err);
          });
        }
        loadArtist();

let trackList = []

const displayHtml = (trackRow) => {
    trackRow.forEach(data => {
 
    
let trackListArtist = `<tr
class="
  tableRowtoHover
  d-flex
  justify-content-start
  align-items-center
  src="${data.tracks.data.link}"
"
>
<th
  class="
    SongNumber
    text-muted
    pl-4
    d-flex
    justify-content-center
    align-items-center
    mr-2
  "
  scope="row"
>
  1
  <div
    class="
      play-hidden-tracklist
      d-flex
      justify-content-center
      align-items-center
    "
  >
    <svg
      class="play-icon-tracklist"
      height="22"
      role="img"
      width="22"
      viewBox="0 0 24 24"
    >
      <polygon
        points="21.57 12 5.98 3 5.98 21 21.57 12"
        fill="currentColor"
      ></polygon>
    </svg>
  </div>
</th>
<td
  class="
    songCover
    d-flex
    justify-content-center
    align-items-center
  "
>
  <a href="./album.html">
    <img
      src="${data.tracks.data.md5_image}"
      width="42"
      alt=""
    />
  </a>
</td>
<td
  class="songTitle d-flex text-nowrap fix-table-first-row"
>
  ${data.tracks.data.title}
</td>
<td
  class="
    numberOfPlays
    d-flex
    justify-content-center
    align-items-center
  "
>
  1.034.423.542
</td>
<td
  class="
    songDuration
    w-100
    d-flex
    justify-content-flex-end
    align-items-center
  "
>
  ${data.tracks.data.duration}
</td>
</tr>`

        trackListArtist.insertAdjacentHTML("afterbegin", trackListArtist);

        trackListArtist.addEventListener("click", function(event){
            buttonClicked = event.target
            buttonClicked = "data.tracks.data.link"
        })
    });
}