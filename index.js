function onTabButtonClicked(tabBtn)
{
    tabBtn = $(tabBtn);

    $("#top, #greetings").toggleClass("small", true);
    tabBtn.siblings().removeClass("current");
    tabBtn.toggleClass("current", true);

    var tab = tabBtn.data().tab;
    console.log(tab);

    loadTab(tab);
}


function readData(name, callback)
{
    YAML.load('data/' + name + '.yaml', function (data)
    {
        console.log(data);
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
    var className = "tab-template-" + name;
    var template = $("#" + className);
    template.removeClass(className);

    var displayer = $("#tab-display");
    displayer.append(template);
    
}

function displayResume(data, template)
{
}