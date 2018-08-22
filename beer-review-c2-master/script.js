let beers=[]


const addBeer=function(name, catagory,rate){
let beer={name:name, catagory:catagory,rate:rate}
beers.push(beer)
}

$('.post-beer').click(function(){
    addBeer($('.beer-input').val(),$('.category-input').val(),$('.rate-input').val())
    renderBeers();
})

const renderBeers=function(){
    $('.container').find('li').remove();
    for(let i in beers){
        $('.beers-list').append('<li>'+'name: ' + beers[i].name + ', catagory: ' + beers[i].catagory +', rating:'+beers[i].rate+'</li>')
    }
}


$('.sort-rate').click(function() {
    let clicks = $(this).data('clicks');
    if (clicks) {
        beers.sort(function(a, b) { 
            return (a.rate) - (b.rate);
        });
        renderBeers();
    } else {
        beers.sort(function(a, b) { 
            return (b.rate) - (a.rate);
        });
        renderBeers();
    }
    $(this).data("clicks", !clicks);
  });