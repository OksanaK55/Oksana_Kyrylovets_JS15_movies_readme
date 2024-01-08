const movies = document.getElementById("movies");
const getDataButton = document.getElementById("button");
const go = document.getElementById("go");
let filmy = [
   "The Shawshank Redemption",
   "The Godfather",
   "The Dark Knight",
   "12 Angry Men" 
 ]  

go.addEventListener('input', () => {
   let search = document.getElementById('go').value;
   let ul = document.getElementById('elastic');
   ul.innerHTML = "";
    console.log(search);

 let result = [];

 for(let i = 0; i < filmy.length; i++){
if (filmy[i].startsWith(search) ) {
    result.push(filmy[i]); 
 }
}

for(let i = 0; i < result.length; i++){
   let li = document.createElement('li');
   li.className = "elementList";
   li.innerHTML = result[i];
   ul.appendChild(li);
   li.addEventListener('click', titleName, false);
 }

 });


let titleName = function(event) {
console.log(event)
document.getElementById('go').value = event.srcElement.firstChild.data;
};


getDataButton.addEventListener('click', () => {
   fetch('movies.json')
   .then(response => 
    response.json())
   .then(data=> {
   for (let i = 0; i < data.length; i++ ){
      if(document.getElementById('go').value === data[i].title){
         document.getElementById('title').value = data[i].title;
          document.getElementById("director").value  = data[i].director;
           document.getElementById("releaseDate").value  = data[i].release_date;

      }
   }
})
.catch(err => {
   console.log(err);
  });

});