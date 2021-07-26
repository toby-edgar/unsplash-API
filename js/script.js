console.log('script');

// XztaEBGEPfXDRYuqJQoeKK4M-HKk1s-HToZMUmBhwnM
// unsplash API access key

// eee2311613bf4b669a244d9abb347b07
// news API access key

// accessing key from config.JSON
var myKey = JSON.parse(myKey);//covert json from js object
var key = myKey[0].key;

$.ajax({
  url : 'https://api.unsplash.com/photos?page=3&client_id='+key,
  type: 'GET',
  data: 'json',
  success: function(data){
    console.log(data);
    var i;
    for (i=0;i<data.length;i++){
       document.getElementById('objects').innerHTML +=
       '<div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3"> ' +
          '<div class="card mt-3 ml-5" style="width: 18rem;">' +
            '<div class="card-body">'+
              '<img style="width: 100%" src=' + data[i].urls.small + '>' + '</img>' + '<br>' +
              '<h6> Image Details </h6>' +
             '<p class="card-text"> Photographer: ' + data[i].user.name + '<br>' + 'Color: '+ data[i].color + '<br>' + 'Likes: ' + data[i].likes +'</p>'+

           '</div>'+
          '</div>'+
       '</div>';
    } //for loop
  },  //success
  error: function(){
    console.log('error');
  } //error
}); //ajax
