var data = {
    basic: {
        fullname: "Lê Tiến Thành",
        title: "Unity game developer",
        avatar: "imgs/avatar.jpg"
    },

    contacts: {
        facebook: "https://www.facebook.com/thanhwilliamle/",
        linkedin: "https://www.linkedin.com/in/thanhwilliamle/",
        instagram: "https://www.instagram.com/b110.william/",
        skype: ""
    },
    contactIcons: {
        facebook: "data:image/png;base64,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",
        linkedin: "data:image/png;base64,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",
        instagram: "data:image/png;base64,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",
        skype: "data:image/png;base64,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"
    },

    projectGroups: [
        {
            name: "Team",
            projects: [
                {
                    title: "Flip Jump Stack",
                    folder: "flip-jump-stack",
                    stars: 4.5,
                    rates: 80000,
                    downloads: 15000000,
                    appstore: "https://apps.apple.com/us/app/flip-jump-stack/id1481329682",
                    googleplay: "https://play.google.com/store/apps/details?id=com.crazylabs.flip.jump.stack&hl=en_US",
                },
                {
                    title: "Art Cleaning",
                    folder: "art-cleaning",
                    stars: 0,
                    rates: 0,
                    downloads: 0,
                    appstore: "https://apps.apple.com/us/app/art-cleaning/id1500025435",
                    googleplay: "",
                }
            ]
        },
        {
            name: "Company",
            projects: [
                {
                    title: "Lumber Empire",
                    folder: "idle-lumber",
                    stars: 4.5,
                    rates: 250000,
                    downloads: 20000000,
                    appstore: "https://apps.apple.com/us/app/lumbermill-wood-craft-tycoon/id1552153525",
                    googleplay: "https://play.google.com/store/apps/details?id=com.lumber.inc",
                },
                {
                    title: "Idle Success",
                    folder: "idle-success",
                    stars: 4.8,
                    rates: 40000,
                    downloads: 5000000,
                    appstore: "https://apps.apple.com/us/app/idle-success/id1512112169",
                    googleplay: "https://play.google.com/store/apps/details?id=com.idle.success&hl=en_US",
                },
                {
                    title: "Doctor Hero",
                    folder: "doctor-hero",
                    stars: 4,
                    rates: 10000,
                    downloads: 1000000,
                    appstore: "",
                    googleplay: "https://play.google.com/store/apps/details?id=com.doctor.hero&hl=en_US",
                },
                {
                    title: "Perfect Peel",
                    folder: "perfect-peel",
                    stars: 4.5,
                    rates: 5000,
                    downloads: 500000,
                    appstore: "https://apps.apple.com/us/app/perfect-peel/id1480626969",
                    googleplay: "",
                },
                {
                    title: "Shootz",
                    folder: "shootz",
                    stars: 4.5,
                    rates: 100,
                    downloads: 10000,
                    appstore: "https://apps.apple.com/us/app/shootz/id1427965808",
                    googleplay: "",
                },
                {
                    title: "Traffic Rush!",
                    folder: "traffic-rush",
                    stars: 4.5,
                    rates: 100,
                    downloads: 10000,
                    appstore: "https://apps.apple.com/us/app/traffic-rush/id1470583908",
                    googleplay: "",
                },
                {
                    title: "Car Race 3D",
                    folder: "car-race-3d",
                    stars: 0,
                    rates: 0,
                    downloads: 0,
                    appstore: "https://apps.apple.com/us/app/car-race-3d/id1460662970",
                    googleplay: "",
                },
                {
                    title: "Flood.io",
                    folder: "floodio",
                    stars: 0,
                    rates: 0,
                    downloads: 0,
                    appstore: "https://apps.apple.com/us/app/flood-io/id1472330762",
                    googleplay: "",
                },
                {
                    title: "Fill The Floor",
                    folder: "fill-the-floor",
                    stars: 0,
                    rates: 0,
                    downloads: 0,
                    appstore: "https://apps.apple.com/us/app/fill-the-floor/id1468458184",
                    googleplay: "",
                }
            ]
        }
    ]
}

var theme_dark = 'dark';

function applyTheme() {
    var themeRoot = $(":root")[0];

    var classes = themeRoot.classList;
    classes.forEach(cl => {
        if (cl && cl.includes("theme")) themeRoot.classList.remove(cl);
    });

    var theme = getTheme();
    if (theme) themeRoot.classList.add('theme-' + theme);
}

function toggleTheme() {

    var theme = getTheme();

    if (theme) setTheme('');
    else setTheme(theme_dark);

    applyTheme();
}

function getTheme() {
    return localStorage['theme'];
}
function setTheme(theme) {
    localStorage['theme'] = theme;
}

function applyData() {
    $('#_avatar').attr("src", data.basic.avatar);
    $('#_fullname').html(data.basic.fullname);
    $('#_title').html(data.basic.title);

    for (var platform in data.contacts) {
        var icon = data.contactIcons[platform];
        var url = data.contacts[platform];

        if (icon && url) {
            var contact_element = $(`<a href="${url}"><div class="contact" style="background:url(${icon}); background-size: cover;"></div></a>`);
            $('#_contacts').append(contact_element);
        }
    }

    var projectsDom = $('#_projects');
    var groupPrefab = $('#_projectGroupPrefab');
    var projectPrefab = $(groupPrefab).find('#_projectPrefab');
    projectPrefab
    for (var groupIndex in data.projectGroups) {

        var group = data.projectGroups[groupIndex];
        var groupDom = groupPrefab.clone();
        groupDom.removeAttr("id");

        $(groupDom).find('.name').html(group.name + " projects");

        var groupProjectsDom = $(groupDom).find('.project-grid');
        groupProjectsDom.html("");

        var folderPath = "projects/";

        for (var projectIndex in group.projects) {

            var project = group.projects[projectIndex];
            var projectDom = projectPrefab.clone();
            projectDom.removeAttr("id");

            var projectFolder = folderPath + project.folder + "/";

            $(projectDom).find('.icon').attr("src", projectFolder + "icon.png");
            $(projectDom).find('.title').html(project.title);

            var ratingsDom = $(projectDom).find('.ratings');
            var ratingsText = ratingsDom.html();
            if (project.stars <= 0 || project.rates <= 0) ratingsText = "";
            else ratingsText = ratingsText.replace("{0}", project.stars).replace("{1}", project.rates.toLocaleString());
            ratingsDom.html(ratingsText);

            var downloadsDom = $(projectDom).find('.downloads');
            var downloadsText = downloadsDom.html();
            if (project.downloads <= 0) downloadsText = "";
            else downloadsText = downloadsText.replace("{0}", project.downloads.toLocaleString());
            downloadsDom.html(downloadsText);

            var screenshotsDom = $(projectDom).find('.screenshots');
            screenshotsDom.html("");
            [1, 2, 3].forEach(ssNumber => {
                var ssPath = projectFolder + "ss" + ssNumber + ".png";
                screenshotsDom.append($(`<div class="screenshot-cell"><img class="screenshot" loading="lazy" src="${ssPath}" /></div>`));
            });

            ["appstore", "googleplay"].forEach(store => {
                var storeLink = project[store];
                var storeDom = $(projectDom).find('.' + store);
                if (!storeLink) storeDom.attr("style", "display:none");
                else storeDom.attr("href", storeLink);
            });

            groupProjectsDom.append(projectDom);
        }

        projectsDom.append(groupDom);

    }
    groupPrefab.attr("style", "display:none");
    projectPrefab.attr("style", "display:none");
}

function applyAnimation() {

    $('.project').waypoint(function () {

        var projDom = $(this.element);

        projDom.css({
            animation: "animate-project 0.5s",
            "animation-fill-mode": "both",
        });

        var ssDoms = projDom.find('.screenshot');
        ssDoms.css({
            animation: "animate-screenshot 0.4s",
            "animation-fill-mode": "both",
        });

    }, { offset: 'bottom-in-view' });

}

applyTheme();

applyData();

$(document).ready(applyAnimation);
