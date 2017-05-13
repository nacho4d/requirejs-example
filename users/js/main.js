// require(['MyMath'], function(MyMath){    
//     console.log(MyMath.add(1, 2));  
// });

require(['Models/User'], function (User) {

    var users = [new User('Barney'), new User('Cartman'), new User('Sheldon')];

    for (var i = 0, len = users.length; i < len; i++) {
        console.log(users[i].name);
    }

    localStorage.users = JSON.stringify(users);
});


require(['Models/User', 'Controllers/ListController'], function(User, ListController){
    
    var users = [new User('Barney'),
                 new User('Cartman'),
                 new User('Sheldon')];
    
    localStorage.users = JSON.stringify(users);
    
    ListController.start(); 
});

require(['Models/User', 'Router'], function(User, Router){
    
    var users = [new User('Barney'),
                 new User('Cartman'),
                 new User('Sheldon')];
    
    localStorage.users = JSON.stringify(users);

    Router.startRouting();  
});