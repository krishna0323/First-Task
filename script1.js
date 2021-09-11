var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function()
{
    var data= JSON.parse(this.response);
    console.log(data);
    for(var i=0; i<250; i++)
    {
        try
        {
        var cname=data[i].name;
        var lang= data[i].latlng;
        if(lang.length===0)
        throw new Error("longitude is not defined");
        weatherdata(cname,...lang);
        }
        catch(e)
        {
            console.log("Error has been handled"+ " "+cname+ " " +e.message);
        }
        //console.log(data[i].name, " ", data[i].capital, " ", data[i].flag);
    }
}
function weatherdata(name,lat,lang)
{
var request1=new XMLHttpRequest();
var url= 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lang+'&appid=0dc2ca7a9a9cc81384e9758ff9cdb41c'
request1.open('GET',url,true);
request1.send();
request1.onload=function()
    {
        var data= JSON.parse(this.response);
        console.log(`${name} : ${data.main.temp} : ${data.timezone} `);
    }
}