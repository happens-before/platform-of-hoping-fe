var organizerCity = document.getElementById('school');
var organizerName = document.getElementById('organizerName');
var organizerPhone = document.getElementById('organizerPhone');
var organizerPrincipal = document.getElementById('organizerPrincipal');
var organizerDescription = document.getElementById('organizerDescription');
var organizerAddress = document.getElementById('organizerAddress');
var password = document.getElementById('password');

// organizerCity.focus();

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

function organizerRegister() {
    var sendData = {
        "organizerCity": $("#organizerCity").val(),
        "organizerName": $("#organizerName").val(),
        "organizerPhone": $("#organizerPhone").val(),
        "organizerDescription": $("#organizerDescription").val(),
        "organizerPrincipal": $("#organizerPrincipal").val(),
        "organizerAddress": $("#organizerAddress").val(),
        "password": $("#password").val()
    };
    console.log(sendData)
    $.ajax({
        xhrFields: {
            withCredentials: true
        },
        type: "post",
        dataType: "json",
        url: "http://localhost:8080/organizer/register",
        contentType: "application/json;charset=utf-8",
        data: JSON.stringify(sendData),
        success: function (data) {
            console.log(data.message)
            if (data.message.toString() == "操作成功" && data.returnCodes.toString() == "OK") {
                alert(e.message)
                window.location.href = "organizerLogin.html"
            } else if (data.message.toString() == "服务器很忙") {
                alert(e.message)
                window.location.href = "error.html"
            }
        },
        error: function (e) {
            console.log(e);
            console.log("失败");
            alert(e.message)

        },
    });
}