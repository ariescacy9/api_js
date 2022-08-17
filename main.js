let c = console.log;
const $box = document.getElementById("container__box"),
      fragmento = document.createDocumentFragment(),
      //url = "https://larnu-dev-upy5mhs63a-rj.a.run.app/api/v1/categories?format=json";
      url = "https://larnu-dev-upy5mhs63a-rj.a.run.app/api/v1/categories";

function cargarFetch(){
  fetch(url)
    .then((response)=> {
      return response.ok? response.json():Promise.reject(response)
    })
    .then((jsonBox) =>{
      c(jsonBox);
      jsonBox.communityCategories.forEach((e) => {
        const li = document.createElement("li");
        li.innerHTML = `<div class="tarjeta">
                            <div class="imagen" style='background-image: url(${e.background})'>
                              <img src=${e.icon} alt="img">
                            </div>
                            <div class="descripcion">
                              <h3>${e.name} </h3>
                              <p>Total Quizzes: ${e.totalQuizzes}</p>
                              <p>Users: ${e.users}</p>
                              <p><a href="#">Go to learnU</a></p>
                            </div>
                          </div> `;
        fragmento.appendChild(li);
      });
      $box.appendChild(fragmento)
    })
    .catch((err)=>{
      let message = err.statusText || "Ocurrio un error"
      $box.innerHTML=`Error ${err.status} : ${message}`
    })
    .finally(()=>{
      c("siempre ejecutandose");
    });
}

document.getElementById("btn").addEventListener("click", ()=>{
  cargarFetch();
})
