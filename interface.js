
function init(){
    var config = {
        apiKey: "AIzaSyCzV7YW8pZAZXB9HlgIUIdBudJ7ON42lS8",
        authDomain: "kronoscoffee-1.firebaseapp.com",
        databaseURL: "https://kronoscoffee-1-default-rtdb.firebaseio.com/",
        projectId: "kronoscoffee-1",
        storageBucket: "kronoscoffee-1.appspot.com",
        messagingSenderId: "874773929114",
        appId: "1:874773929114:web:7c2f499719d0847a4d1323"
    };
    
    firebase.initializeApp(config);
    var database = firebase.database();
    
    var ref = firebase.database().ref();
    var key = []
    var data = []
    ref.on("value", function(snapshot) {
        var list_categories = document.getElementById("menu-flters")
        var test = snapshot.val()
        var keys = Object.keys(test);
        var datas =  Object.values(test) 
        key =  keys
        data =  datas
        // console.log(keys)
        // console.log(Object.values(test))
        list_categories.innerHTML = '<li>Tümü</li>'
        for(var i=0;i<(datas[0].length);i++){
            list_categories.innerHTML += '<li> <a href="#'+datas[0][i]+'"> '+datas[0][i]+'</a></li>'
        }
    
        var list_menu = document.getElementById("menu_tabs")
        list_menu.innerHTML = ""
        // console.log(datas[0]) // 1Configurations kısmı

        for(var i=0; i<datas[0].length; i++ ){
            console.log(datas[0][i])
            var index_key = keys.indexOf(datas[0][i])
            console.log(index_key)
            for(var k=0; k<datas[index_key].length; k++){
                if (k == 0 ){
                    list_menu.innerHTML += ' <div class="col-lg-6 menu-item filter-'+datas[0][i]+'" id="'+datas[0][i]+'"> <hr><div style="padding-top:35px;"> <h2>'+datas[0][i]+'</h2>  <div class="menu-content">'+
                    '<a href="#">'+datas[index_key][k].name+'</a><span>'+datas[index_key][k].price+' TL</span></div> <div class="menu-ingredients">'+datas[index_key][k].details+'</div></div></div>'    
                }
                else{
                    list_menu.innerHTML += ' <div class="col-lg-6 menu-item filter-'+datas[0][i]+'" id="'+datas[0][i]+'"> <div class="menu-content">'+
                    '<a href="#">'+datas[index_key][k].name+'</a><span>'+datas[index_key][k].price+' TL</span></div> <div class="menu-ingredients">'+datas[index_key][k].details+'</div></div>'
                }
            }
        }
        // for(var i=1; i<keys.length;i++){
        //     for(var k=0; k<datas[i].length;k++){
                // if (k == 0 ){
                //     list_menu.innerHTML += ' <div class="col-lg-6 menu-item filter-'+keys[i]+'" id="'+keys[i]+'"> <hr><div style="padding-top:35px;"> <h2>'+keys[i]+'</h2>  <div class="menu-content">'+
                //     '<a href="#">'+datas[i][k].name+'</a><span>'+datas[i][k].price+' TL</span></div> <div class="menu-ingredients">'+datas[i][k].details+'</div></div></div>'    
                // }
                // else{
                //     list_menu.innerHTML += ' <div class="col-lg-6 menu-item filter-'+keys[i]+'" id="'+keys[i]+'"> <div class="menu-content">'+
                //     '<a href="#">'+datas[i][k].name+'</a><span>'+datas[i][k].price+' TL</span></div> <div class="menu-ingredients">'+datas[i][k].details+'</div></div>'
                // }
        //     }
        // }
       
    },function (error) {
        console.log("Error: " + error.code);
    });
    
    }
    setTimeout(() => {     init() }, 1500);
 
    function usoft(){
        Swal.fire({
            toast: true,
            title: 'Kronos Coffee',
            html:"Bizce Bizi Çok Seveceksiniz",
            imageUrl: 'assets/img/logo.jpg',
            imageAlt: 'Custom image',
          });
    }
    