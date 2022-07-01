window.onload = function(){
const City_name = document.getElementById("City_name");
const submitBtn = document.getElementById("submitBtn");
const City_Name = document.getElementById("City_Name");
const temp_real=document.getElementById("temp_real");
const temp_status = document.getElementById("temp_status");
const data_h = document.querySelector(".middle_layer")

const getInfo = async(event)=>{
  event.preventDefault();
 let cityVal = City_name.value;
  if(cityVal == ''){
           City_Name.innerText ='Please Write Name Before Search !';
           data_h.classList.add('data_hide');
  }
  else{
    try{
         let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=58ac11afa40a35d9218a1bb3c5a76fc5`;
         const response = await fetch(url);
         const data = await response.json();

         const arrData = [data]
         City_Name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
         temp_real.innerText=arrData[0].main.temp;
         const temps = arrData[0].weather[0].main;
         if(temps=="Sunny"){
         temp_status.innerHTML = "<i class='fa-solid fa-sun' style='color:yellow'></i>";
         }else if(temps=="Clouds"){
          temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6'></i>";
        }
        else if(temps=="Rainy"){
          temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color:#a4b0be'></i>";
       }else{
          
        temp_status.innerHTML = "<i class='fa-solid fa-cloud' style='color:#44c3de'></i>";
       }
        
      data_h.classList.remove("data_hide");
        console.log(response)
    }
    catch{
        City_Name.innerText ='Please Write Name Before Search !';
        data_h.classList.add('data_hide');
    }
  }
}
submitBtn.addEventListener('click' , getInfo);

}