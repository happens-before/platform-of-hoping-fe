var organizerCity = document.getElementById('organizerCity');
var organizerName = document.getElementById('organizerName');
var password = document.getElementById('password');
organizerCity.focus();

function city() {
    /**
     * 匹配中文汉字
     */
    if (!/^[\u4E00-\u9FA5]{1,20}$/.test(organizerCity.value)) {
        document.getElementById('organizerCity_img').innerHTML = "<img src='img/error.png'>";
        document.getElementById('organizerCity_tip').innerHTML = "请输入正确的城市名称！";
        organizerCity.focus();
        return false;
    } else {
        document.getElementById('organizerCity_img').innerHTML = "<img src='img/right.png'>";
        document.getElementById('organizerCity_tip').innerHTML = "";
        return true;
    }
}

function nam() {
    /**
     * 只含有汉字、数字、字母、下划线，下划线位置不限
     */
    if (!/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(organizerName.value)) {
        document.getElementById('organizerName_img').innerHTML = "<img src='img/error.png'>";
        document.getElementById('organizerName_tip').innerHTML = "请输入正确的组织名称！";
        organizerName.focus();
        return false;
    } else {
        document.getElementById('organizerName_img').innerHTML = "<img src='img/right.png'>";
        document.getElementById('organizerName_tip').innerHTML = "";
        return true;
    }
}

function pwd() {
    if (!/^[0-9a-zA-Z]{5,30}$/.test(password.value)) {
        document.getElementById('pwd_img').innerHTML = "<img src='img/error.png'>";
        document.getElementById('pwd_tip').innerHTML = "*请输入5-30位的字母或数字的密码！";
        password.focus();
        return false;
    } else {
        document.getElementById('pwd_img').innerHTML = "<img src='img/right.png'>";
        document.getElementById('pwd_tip').innerHTML = "";
        return true;
    }

}

function organizerLogin() {
    if (!city() || !pwd() || !nam()) {
        return false;
    } else {
        $.ajax({
            xhrFields: {
                withCredentials: true
            },
            url: "http://localhost:8080/organizer/login", 
            type: "get",
            data: {
                "organizerCity": $("#organizerCity").val(),
                "organizerName": $("#organizerName").val(),
                "password": $("#password").val()
            },
            dataType: "json",
            success: function (data, status, xhr) {
                console.log(data)
                if (data.message.valueOf() == "操作成功" && data.returnCodes.valueOf() == "OK") {
                    window.location.href = "home.html"
                } else if (data.message.toString() == "组织名或密码错误" && data.returnCodes.toString() == "FAILD") {
                    console.log(data.message)
                    window.location.href = "organizerLogin.html"
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