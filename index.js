var data = {
    basic: {
        fullname: "Lê Tiến Thành",
        title: "Unity game developer",
        avatar: "https://scontent.fhan2-5.fna.fbcdn.net/v/t1.0-9/64592311_2385802534818985_4771011249066475520_o.jpg?_nc_cat=109&_nc_sid=174925&_nc_ohc=yuhIbvhTllEAX-WL7en&_nc_ht=scontent.fhan2-5.fna&oh=2700afb833aa54b7a7fea04ead31537e&oe=5F83261E"
    },

    contacts: {
        facebook: "https://www.facebook.com/thanhwilliamle/",
        linkedin: "https://www.linkedin.com/in/thanhwilliamle/",
        instagram: "https://www.instagram.com/b110.william/",
        skype: ""
    },
    contactIcons: {
        facebook: "https://www.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png",
        linkedin: "https://www.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_14-linkedin-512.png",
        instagram: "https://www.iconfinder.com/data/icons/social-icons-33/128/Instagram-512.png",
        skype: "https://www.iconfinder.com/data/icons/social-icons-33/128/Skype-512.png"
    },

    projectGroups: [
        {
            name: "Team",
            projects: [
                {
                    title: "Flip Jump Stack",
                    folder: "flip-jump-stack",
                    stars: 4.3,
                    rates: 35000,
                    downloads: 10000000,
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
                    title: "Idle Success",
                    folder: "idle-success",
                    stars: 4.8,
                    rates: 40000,
                    downloads: 1000000,
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
            var contact_element = $(`<a href="${url}"><img src="${icon}" class="contact" /></a>`);
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