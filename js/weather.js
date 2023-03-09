var desc = document.querySelector('#desc');
var temp = document.querySelector('#temp');
    
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Seoul&APPID=8c76844251e55e907970363bc3d13c0a&units=metric')
    .then(response=>response.json())
    .then(data => {
        var tempValue= data['main']['temp'];
        var mainValue= data['weather'][0]['main'];
        temp.innerHTML = Math.round(tempValue)+'°';
        if(mainValue=='Clear'){
            desc.innerHTML = '맑음';
        }
        if(mainValue=='Clouds'){
            desc.innerHTML = '흐림';
        }
        if(mainValue=='Rain'){
            desc.innerHTML = '비';
        }
        if(mainValue=='Drizzle'){
            desc.innerHTML = '이슬비';
        }
        if(mainValue=='Thunderstorm'){
            desc.innerHTML = '뇌우';
        }
        if(mainValue=='Snow'){
            desc.innerHTML = '눈';
        }
        if(mainValue=='Mist'){
            desc.innerHTML = '안개';
        }
        if(mainValue=='Smoke'){
            desc.innerHTML = '연기';
        }
        if(mainValue=='Haze'){
            desc.innerHTML = '안개';
        }
        if(mainValue=='Dust'){
            desc.innerHTML = '미세먼지';
        }
        if(mainValue=='Fog'){
            desc.innerHTML = '안개';
        }
        if(mainValue=='Sand'){
            desc.innerHTML = '황사';
        }
        if(mainValue=='Ash'){
            desc.innerHTML = '먼지';
        }
        if(mainValue=='Squall'){
            desc.innerHTML = '화산재';
        }
        if(mainValue=='Tornado'){
            desc.innerHTML = '폭풍';
        }
        
    })
    .catch(err => alert("Error"))