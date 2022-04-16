//public/scripts/admin/paginate.js

let page = 0

function paginate(route){
    $('.paginate img').attr('src', '/images/loading.gif')
    page += 1
    
    $.post(`${route}/paginate/`,{page:page},function(data, status){
        appendItem(data.items,route)
    })
}

function appendItem(items, route){
    let html = ''
    
    if(items){
        for(let item of items){
            html += `<li>`
                html += `<div class='thumb'>`
                    html += `<a href="${route}/${item.id}"><img src="${item.thumb}"/></a>`
                    if(item.video){
                        if(item.video !== ''){
                            html += `<img class="play-icon" src="/images/play-icon"/>`
                        }
                    }
                html += `</div>`
                html += `<div class="title">`
                    html += `<a href="${route}/${item.id}">${item.title}</a>`
                    html += `<div>${new Date(item.date).toLocaleDateString()}</div>`
                html += `</div>`
                html += `<div class="edit">`
                    html += `<a href="${route}/edit/${item.id}"><img src="/images/edit.png"/></a>`
                    html += `<a href="${route}/delete/${item.id}"><img src="/images/delete.png"/></a>`
                html += `</div>` 
            html += `</li>`
        }
    }
    $('.list').append(html)
    $('.paginate img').attr('src', '/images/load-more.png')
}