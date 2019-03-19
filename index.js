var shortMonths = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
String.prototype.format = function ()
{
    a = this;
    for (k in arguments)
    {
        a = a.replace("{" + k + "}", arguments[k])
    }
    return a
}

function onTabButtonClicked(tabBtn)
{
    tabBtn = $(tabBtn);

    $("#top, #greetings, #tabs").toggleClass("small", true);
    tabBtn.siblings().removeClass("current");
    tabBtn.toggleClass("current", true);

    var tab = tabBtn.data().tab;
    loadTab(tab);
}


function readData(name, callback)
{
    YAML.load('data/' + name + '.yaml', function (data)
    {
        callback(data);
    });
}

function loadTab(name)
{
    closeCurrentTab();
    readData(name, function (data)
    {
        displayTab(name, data);
    });
}

function closeCurrentTab()
{
    var currentTab = $("#tab-display").children(".tab.current");
    currentTab.fadeTo("fast", 0, function ()
    {
        currentTab.remove();
    });
}

function displayTab(name, data)
{
    var displayer = $("#tab-display");
    displayer.hide();
    displayer.load("tabs/tab-" + name + ".html .tab", function (r, s, jq)
    {
        displayer.show();
        var newTab = $(displayer).children(".tab-" + name).not(".current");
        newTab.addClass("current");

        if (name === "resume") fillResume(newTab, data);
    });
}

function fillResume(resumeTab, data)
{
    var html = "";

    var info = $(".group-info").children("content");
    html = info.html();
    html = html.replace("{fullName}", data.basicInfo.fullName);
    html = html.replace("{dob}", new Date(data.basicInfo.dob).getFullYear());
    html = html.replace("{gender}", data.basicInfo.gender);
    html = html.replace("{phone}", data.contacts.phone);
    html = html.replace("{address}", data.contacts.addressShort);
    html = html.replace("{facebook}", "<a href='" + data.contacts.facebook + "' style='display: contents'>" + "Facebook" + "</a>");
    html = html.replace("{linkedin}", "<a href='" + data.contacts.linkedin + "' style='display: contents'>" + "LinkedIn" + "</a>");
    info.html(html);


    var work = $(".group-work").children("content");
    var workItem = work.find(".work-item");
    var workDatas = data.work.sort(function (a, b)
    {
        return new Date(b.from) - new Date(a.from);
    });
    workDatas.forEach(function (e, i)
    {
        var wic = workItem.clone();
        console.log(e);
        wic.find(".position").html(e.position);
        wic.find(".company").html(e.company);

        var workFrom = new Date(e.from);
        var workTo = new Date(e.to);
        var timeStr = "{0} {1} - ".format(shortMonths[workFrom.getMonth()], workFrom.getFullYear());
        if (e.to === "now") timeStr += "NOW";
        else timeStr += "{0} {1}".format(shortMonths[workTo.getMonth()], workTo.getFullYear());
        wic.find(".time").html(timeStr);
        work.append(wic);
    });
    workItem.remove();
}

