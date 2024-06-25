let inp=document.getElementsByTagName("input")[0]
let fetchButton=document.getElementsByTagName("button")[0]
let show_data=document.querySelector(".repositries")

fetchButton.onclick=function(){
    getRepositries()
}
function getRepositries(){
    show_data.innerHTML=""
    if(inp.value===""){
        show_data.innerHTML=""
        show_data.innerHTML="<P>you cant get empty repos</p>"
    }
    else{
        fetch(`https://api.github.com/users/${inp.value}/repos`)
        .then((response) => {
            return response.json()
        })
        .then((data)=>{
            console.log(data)
           
            for(let i=0 ;i<data.length;i++){
               let mainD=document.createElement("div")
               mainD.className="div"
               let repositryName=document.createElement("p")
              let text= document.createTextNode(`${data[i].name}`)
              repositryName.append(text)
            
               mainD.append(repositryName)
               let url=document.createElement("a")
               url.innerHTML="visit"
               url.href=data[i].svn_url
               mainD.append(url)
               let stars=document.createElement("span")
               stars.innerHTML=`stars: ${data[i].stargazers_count}`
               mainD.append(stars)
               show_data.append(mainD)
                
            }
        })
    }
}

