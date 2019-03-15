function onTabButtonClicked(tabBtn)
{
    tabBtn = $(tabBtn);
    
    $("#top, #greetings").toggleClass("small", true);
    tabBtn.siblings().removeClass("current");
    tabBtn.toggleClass("current", true);

    var tab = tabBtn.data().tab;
    console.log(tab);

    readData(tab, function(data)
    {

    });
}


function readData(name, callback)
{
    YAML.load('data/' + name + '.yaml', function (data)
    {
        console.log(data);
        callback(data);
    });
}