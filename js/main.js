console.log("talking");

let url = "http://recipepuppyproxy.herokuapp.com/api/?i=";

// fetch('http://recipepuppyproxy.herokuapp.com/api/?i=onions,garlic&q=omelet&p=3')

     let button = document.querySelector("button");
     button.addEventListener("click", submitSearch);

     function submitSearch() {
       let input = document.querySelector("#searchbox").value;
       console.log(input);
       fetch(url + input)

       .then(
         function(response) {
           if (response.status !==200) {
             console.log('Looks like there was a problem. Status Code: ' + response.status);
             return;
           }

        response.json().then(function(data) {
          let results = document.getElementById("results");
          results.innerHTML = '';
          if (data.results.length===0){
            results.innerHTML += `<p>Sorry, your search did not return any results. Try again!</p>`
          }
          else {
            data.results.map((recipe)=>{
              results.innerHTML += `
              <div class="recipeBox"><img class="foodPhoto" src="${recipe.thumbnail}">
              <h2>${recipe.title}</h2>
              <a href="${recipe.href}">View Recipe</a></div>
              `
        });
      }
      })
    }
  )
}
