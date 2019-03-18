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
    info.html(html);
}