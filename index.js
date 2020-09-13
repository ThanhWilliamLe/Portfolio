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
                    stars: 4.3,
                    rates: 35000,
                    downloads: 10000000,
                    icon: "https://lh3.googleusercontent.com/pyhwXkjwB_09v3AAFBg2SaNRsXS5FnKzzv34u8-SO2qEEGSbrXeQynve3HrTrzJwl1o-=s180-rw",
                    screenshots: [
                        "https://lh3.googleusercontent.com/N6YSaFn10W1K-Kbv4kNmDbZLLxWLUZMxko7xDoYD3txgT7ZPzkoEBiebWIgCG6vwBaE=w720-h310-rw",
                        "https://lh3.googleusercontent.com/HDH0AOI3KHDh68BM8mCiBdTKOL_rb7ITNzRRbi9VG_gV6LptwprC4xxI7mNayt7ImZs=w720-h310-rw",
                        "https://lh3.googleusercontent.com/iQQ7Sk3js9W-YefDWLZOrrW0nHOH0sd3oS9LefQZtYVmD__q2lRGULyYa0gZ3gA1_Q=w720-h310-rw"
                    ],
                    appstore: "https://apps.apple.com/us/app/flip-jump-stack/id1481329682",
                    googleplay: "https://play.google.com/store/apps/details?id=com.crazylabs.flip.jump.stack&hl=en_US",
                },
                {
                    title: "Art Cleaning",
                    stars: 0,
                    rates: 0,
                    downloads: 0,
                    icon: "https://is4-ssl.mzstatic.com/image/thumb/Purple123/v4/6c/27/f3/6c27f3e3-887f-0ddd-9895-ba33275e03e4/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-85-220.png/230x0w.png",
                    screenshots: [
                        "https://is5-ssl.mzstatic.com/image/thumb/Purple114/v4/a5/1a/43/a51a431d-2c0e-ccfb-cca5-022ac9073fc9/pr_source.png/230x0w.png",
                        "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/b1/2a/f7/b12af71c-5cff-0903-8741-483ed6a84a40/pr_source.png/230x0w.png",
                        "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/4b/a1/0f/4ba10f47-a912-f973-ada4-90e177170340/pr_source.png/230x0w.png"
                    ],
                    appstore: "https://apps.apple.com/us/app/art-cleaning/id1500025435",
                    googleplay: "",
                }
            ]
        }
    ]
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

        for (var projectIndex in group.projects) {

            var project = group.projects[projectIndex];
            var projectDom = projectPrefab.clone();
            projectDom.removeAttr("id");

            $(projectDom).find('.icon').attr("src", project.icon);
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
            for (var ssIndex in project.screenshots) {
                var ssUrl = project.screenshots[ssIndex];
                screenshotsDom.append($(`<div class="screenshot-cell"><img class="screenshot" loading="lazy" src="${ssUrl}" /></div>`));
            }

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

applyData();