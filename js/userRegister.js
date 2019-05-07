var school = document.getElementById('school');
var college = document.getElementById('college');
var profession = document.getElementById('profession');
var userSno = document.getElementById('userSno');
var community = document.getElementById('community');
var minister = document.getElementById('minister');
var userName = document.getElementById('userName');
var password = document.getElementById('password');
var sex = document.getElementById('sex');
var age = document.getElementById('age');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
school.focus();

function sch() {
    if (!/^[\u4E00-\u9FA5]{3,20}$/.test(school.value)) {
        document.getElementById('school_img').innerHTML = "<img src='img/error.png'>";
        document.getElementById('school_tip').innerHTML = "请输入正确的学校名称！";
        school.focus();
        return false;
    } else {
        document.getElementById('school_img').innerHTML = "<img src='img/right.png'>";
        document.getElementById('school_tip').innerHTML = "";
        return true;
    }
}

function sno() {
    if (!/^[0-9]{5,10}$/.test(userSno.value)) {
        document.getElementById('userSno_img').innerHTML = "<img src='img/error.png'>";
        document.getElementById('userSno_tip').innerHTML = "请输入5-10为的数字的学号！";
        userSno.focus();
        return false;
    } else {
        document.getElementById('userSno_img').innerHTML = "<img src='img/right.png'>";
        document.getElementById('userSno_tip').innerHTML = "";
        return true;
    }
}

function pwd() {
    if (!/^[0-9a-zA-Z]{6,20}$/.test(password.value)) {
        document.getElementById('pwd_img').innerHTML = "<img src='img/error.png'>";
        document.getElementById('pwd_tip').innerHTML = "*请输入6-20位的字母或数字的密码！";
        password.focus();
        return false;
    } else {
        document.getElementById('pwd_img').innerHTML = "<img src='img/right.png'>";
        document.getElementById('pwd_tip').innerHTML = "";
        return true;
    }

}

function userRegister() {
    var sendData = {
        "school": $("#school").val(),
        "college": $("#college").val(),
        "profession": $("#profession").val(),
        "userSno": $("#userSno").val(),
        "community": $("#community").val(),
        "minister": $("#minister").val(),
        "userName": $("#userName").val(),
        "password": $("#password").val(),
        "sex": $("#sex").val(),
        "age": $("#age").val(),
        "email": $("#email").val(),
        "phone": $("#phone").val()
    };
    $.ajax({
        xhrFields: {
            withCredentials: true
        },
        url: "http://localhost:8080/user/register",
        type: "post",
        data: JSON.stringify(sendData),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (data) {
            console.log(data)
            // if (msg.returnCodes == "OK" && msg.message == "操作成功") {
            //     window.location.href = "home.html"
            // } else if(msg.message="服务器很忙"){
            //     window.location.href="error.html"
            // }
            if (e.message == "操作成功") {
                alert("注册成功")
                window.location.href = "userLogin.html"
            } else {
                alert(e.message)
            }
        },
        error: function (e) {
            console.log(e);
            console.log("失败");
        },
    });


}