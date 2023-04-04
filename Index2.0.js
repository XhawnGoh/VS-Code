let dbUser =[//一个叫dbUser 的array
    {
        username: "Soo",
        password: "123456",
        name: "You Guan",
        email: "SooYouGuan@gamil.com"
    },
    {
        username: "Goh",
        password: "123456",
        name: "Jia Xuen",
        email: "gohjiaxuen@gamil.com"
    },
    {
        username: "Xhawn",
        password: "666666",
        name: "niupay",
        email: "Xhawngaming@gamil.com"
    },
]

function login(requsername,reqpassword){// req是input的data
                                    //=> 是进去array的element 会存在箭头前面 的意思(类似function？)
    let matchUser = dbUser.find(user => user.username == requsername)//让系统找有没有一样的username //就是在dbUser里面一个一个找
                    //array //find (什么东西)       
    //console.log(matchUser)

    if (!matchUser)return"User not Found!"
    if (matchUser.password == reqpassword){
        return matchUser
    }else{
        return"Invalid Password"
    }
}

function register(requsername,reqpassword,reqname,reqemail){//增加新data
    dbUser.push({
        username:requsername,
        password:reqpassword,
        name:reqname,
        email:reqemail,
    })
}

//try login
console.log(login("Goh","123456"))
console.log(login("Soo You Guan","666666"))
register("utem","hahaha","Universiti","Utem@gmail.com")
console.log(login("utem","hahaha"))