var school = document.getElementById('school');
var userSno = document.getElementById('userSno');
var password = document.getElementById('password');
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

function userLogin() {
    if (!sch() || !pwd() || !sno()) {
        return false;
    } else {
        $.ajax({
            xhrFields: {
                withCredentials: true
            },
            url: "http://localhost:8080/user/login", 
            type: "get",
            data: {
                "school": $("#school").val(),
                "userSno": $("#userSno").val(),
                "password": $("#password").val()
            },
            dataType: "json",
            success: function (data, status, xhr) {
                console.log(data)
                if (data.message.valueOf() == "操作成功" && data.returnCodes.valueOf() == "OK") {
                    window.location.href = "home.html"
                } else if (data.message.toString() == "用户名或密码错误" && data.returnCodes.toString() == "FAILD") {
                    console.log(data.message)
                    window.location.href = "userLogin.html"
                } else if (data.message.toString() == "服务器很忙") {
                    window.location.href = "error.html"
                }
            },
            error: function (e) {
                console.log(e);
                console.log("失败");
            },
        });

    }
}