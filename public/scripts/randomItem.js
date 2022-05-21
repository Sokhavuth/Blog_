//public/scripts/randomItem.js
function getItems(type,element,clicked){
    $(clicked+" .home").attr('src','/images/loading.gif')
    const data = {
        type: type,
    }
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }
      
    fetch('/randomItem', requestOptions)
    .then(response => response.json())
    .then(randomItems => {
        let html = ''
        for(let v=0; v<randomItems.length; v++){
            if(type === 'video'){
                html += `<a href="/post/${randomItems[v].id}">`
            }else{
                html += `<a href="/book/${randomItems[v].id}">`
            }
            
            if(type === 'books'){
                html += `<img src="${randomItems[v].bookCover}" />`
            }else{
                html += `<img src="${randomItems[v].thumb}" />`
            }
                if((randomItems[v].video)&&(randomItems[v].video !== "[]")){ 
                    html += `<img class="play-icon" src="/images/play.png" />`
                }
            html += `</a>`
        }

        $(element).html(html)
        $(clicked+" .home").attr('src','/images/home.png')
    })
    .catch((error) => {
        alert('Error:', error)
    })
}