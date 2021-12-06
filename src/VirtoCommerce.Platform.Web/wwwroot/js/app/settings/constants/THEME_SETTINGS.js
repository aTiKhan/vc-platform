angular.module("platformWebApp").constant("THEME_SETTINGS", {
    groupName: "Theme settings",
    name: "Theme settings",
    icon: "fas fa-palette",
    children: {
        "Login Screen": {
            groupName: "Theme settings|Login Screen",
            name: "Login Screen",
            icon: "fas fa-desktop",
            controller: "platformWebApp.settingsDetailThemeLoginScreenController",
            template: "$(Platform)/Scripts/app/settings/blades/settings-detail-theme-login-screen.tpl.html",
            settingValues: {
                defaultUiCustomization: {
                    background: {
                        url: "/images/login.png",
                    },
                    pattern: {
                        value: "None",
                    },
                },
                patterns: [
                    {
                        value: "None",
                    },
                    {
                        value: "Demo",
                        url: "/images/pattern-demo.svg",
                    },
                    {
                        value: "Production",
                        url: "/images/pattern-live.svg",
                    },
                ],
            },
        },
        "Logo Settings": {
            groupName: "Theme settings|Logo Settings",
            name: "Logo Settings",
            icon: "fa fa-diamond",
            children: {
                "Top panel logo": {
                    groupName: "Theme settings|Logo Settings|Top panel logo",
                    name: "Top panel logo",
                    icon: "fa fa-diamond",
                    controller: "platformWebApp.settingsDetailThemeLogoController",
                    template: "$(Platform)/Scripts/app/settings/blades/settings-detail-theme-logo.tpl.html",
                    settingValues: {
                        defaultUiCustomization: {
                            topPanelLogo: {
                                url: "/images/topPanelLogo.svg",
                            },
                            topPanelLogoSquare: {
                                url: "/images/topPanelLogo-square.svg",
                            },
                        },
                    },
                },
                "Login screen logo": {
                    groupName: "Theme settings|Logo Settings|Login screen logo",
                    name: "Login screen logo",
                    icon: "fa fa-diamond",
                    controller: "platformWebApp.settingsDetailThemeLogoController",
                    template: "$(Platform)/Scripts/app/settings/blades/settings-detail-theme-logo.tpl.html",
                },
                "Logo for the login form header": {
                    groupName: "Theme settings|Logo Settings|Logo for the login form header",
                    name: "Logo for the login form header",
                    icon: "fa fa-diamond",
                    controller: "platformWebApp.settingsDetailThemeLogoController",
                    template: "$(Platform)/Scripts/app/settings/blades/settings-detail-theme-logo.tpl.html",
                },
            },
        },
    },
});
