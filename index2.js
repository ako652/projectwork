

 window.onload = function(){
   let id =new URLSearchParams(window.location.search).get("picID")
   console.log(id)
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/` + id, {
    "method": "GET",
    "headers": {
    }
  })
  .then(response => {
     console.log(response);
    return response.json();
   
  })
  .then(details=> {
    console.log(details)

    let mainSection = document.querySelector('.media')
    mainSection.innerHTML = ""
    mainSection.innerHTML = mainSection.innerHTML + `<div class="media"  p-3 ">
    <img src=${details.cover_xl}   class="mr-3"  height="170px" width="200px" style="object-fit: cover;" alt="...">
    <div class="media-body align-self-end ">
      <h5 style="font-size: 12px;" class="mt-0">Album</h5>
      <p class="textwrapper">${details.title}</p>
      <div>
        <img src=${details.cover_big} style="height:30px; width:30px; border-radius: 50px; object-fit: cover;">
        <span> <a class="text-white" href="artist.html">${details.label}</a> </span><span class="text-muted">. 2018 . 22 songs, 1 hr 19 min</span>
      </div>
    </div>
  </div>`
    console.log(details)
    console.log("locate me pls",details.tracks.data)

    displaytext(details.tracks.data)
  })
  .catch(err => {
    console.error(err);
  });


const displaytext = (datas) => {
  lg=document.querySelector(".albumTracks")
  lg.innerHTML=""
datas.forEach( data => {
lg.innerHTML= lg.innerHTML + `    
      <tr class="justify-content-center align-items-center">
<th class=" justify-content-center" scope="row">1</th>
<td>
  <span>${data.title}</span>

  <span>${data.title}</span>
  <br>

  <a class="text-muted " href=artist.html >${data.artist.name}</a>

</td>

<td>${data.duration}</td>`
console.log("i need here", data.title)

});


 
}

 }
 const search =function(event){
   if(event.key==="Enter")
   newfxn(event.target.value)
   
 }


const newfxn =function( query){
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q="  + query, {
        "method": "GET",
        "headers": {  Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDYzMWYwNDQyNGY0NzAwMTUzZGVmY2MiLCJpYXQiOjE2MTkxNjYyNTMsImV4cCI6MTYyMDM3NTg1M30.qqMlSKGggXQ_6F_5dyAsIxEFzCFsQZUF6LHGbFMz3Is",
        }
      })
      
      .then (response=>{
        console.log(response);
        return response.json();

      })
 .then (response =>{
    console.log("I am here", response)
    let mainelement=document.querySelectorAll(".card")
for (let i=0; i<mainelement.length; i++){
 

    mainelement[i].innerHTML=""
}
    for (let c=0;c<response.data.length; c++){
        console.log(response.data[c].title)
        console.log(response.data[c].artist.name)
        mainelement[c].onclick=()=>{
          window.location.assign("./album.html?picID=" + response.data[c].album.id)
        }
        mainelement[c].innerHTML+= `<div class="${response.data[c].album.id}" m-0 myMod-card p-3 cardhoverbtn">
                <div class="playbtn">
                  <img src="${response.data[c].album.cover_big} " class="myMod-medium-sq-img" alt="...">
                  <svg height="40" role="img" width="40" viewBox="0 0 24 24" aria-hidden="true"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor"></polygon></svg>
                </div>
                <div class="card-body px-0">
                  <h5 class="card-title"> ${response.data[c].title}</h5>
                  <p class="card-text">${response.data[c].artist.name}</p>
                </div>
              </div>
              `
}
})
.catch (err => {
    console.log(err);
})

}
newfxn()
  
     
     

