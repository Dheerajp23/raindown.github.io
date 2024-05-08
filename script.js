/* document.exams.addEventListener("submit" , function(e){
    e.preventDefault();

    var A= this.A.value;
    var B= this.B.value;

  if(A>=75 && B>=45){
    this.out.innerHTML=("You have  Passed");
  }
  else if(A<45){
    this.out.innerHTML=("Sorry, You have failed as you scored less in paper A");
  }
  else if(A<55 && B>=55){
      this.out.innerHTML=("You have  Passed")
    }
  else if(B<45 && A>=65){
    this.out.innerHTML=("You are allowed to reappear in an examination in paper B to qualify")
  }
  else{this.out.innerHTML=("Sorry, You have not met the criteria to pass the examination")}

 }) */


   /*  let d=data.currentConditions.temp
    if(d<=25){
        document.querySelector(".main-container").classList.add("cool");
        document.querySelector(".main-container").classList.remove("heat");
    }
    else{
        document.querySelector(".main-container").classList.add("heat");
        document.querySelector(".main-container").classList.remove("cool");
    }
 */


    const apikey="LBTQCY7SUSMLAE76W9QHRDPVJ";
    const apiurl="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"
    const pai ="?unitGroup=metric&contentType=json"

    const weatherIcon = document.querySelector(".imgrel")
    
    document.rain.addEventListener("submit" , function(e){
        e.preventDefault();
        const t=this.rains.value;
        checkweather(t)
    })
    
    
     async function checkweather(c){
    const response= await fetch(apiurl + c + pai + `&key=${apikey}`);
    var data = await response.json();

    document.querySelector(".city").innerHTML=data.address;
    document.querySelector(".temparature").innerHTML=Math.round(data.currentConditions.temp)+`°C`;
    document.querySelector(".preci").innerHTML=Math.round(data.currentConditions.precipprob) + `%`;
    document.querySelector(".humids").innerHTML=Math.round(data.currentConditions.humidity) + `%`;
    document.querySelector(".Windy").innerHTML=Math.round(data.currentConditions.windspeed) + `Km/Hr`;
    document.querySelector(".sunrise").innerHTML=data.currentConditions.sunrise ;



    const d = data.currentConditions.temp;
    if(d<=25){
        document.querySelector(".main-container").classList.add("cool");
        document.querySelector(".main-container").classList.remove("heat");
    }
    else{
        document.querySelector(".main-container").classList.add("heat");
        document.querySelector(".main-container").classList.remove("cool");
    }

    if(data.currentConditions.conditions == "Clear"){
        weatherIcon.src = "IMAGES/clear.webp"
    }
    else if(data.currentConditions.conditions == "Partially cloudy"){
        weatherIcon.src = "IMAGES/cloudy.webp"
    }
    else if(data.currentConditions.conditions == "Snowy"){
        weatherIcon.src = "IMAGES/snow.webp"
    }
    else if(data.currentConditions.conditions == "Overcast"){
        weatherIcon.src = "IMAGES/fullcloudy.webp"
    }
    else if(data.currentConditions.conditions == "thunderstorm"){
        weatherIcon.src = "IMAGES/thunderstorm.webp"
    }
    else if(data.currentConditions.conditions == "Rain"){
        weatherIcon.src = "IMAGES/rainy.webp"
    }


    //console.log(data);
 } 
 



 


