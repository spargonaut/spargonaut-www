Navigation = {

    create : function () {

        var navigationBar = document.getElementById("navigation_bar");

        var navigationList = document.createElement("ul");
        navigationList.className = "nav_list";
        navigationBar.appendChild(navigationList);
        navigationList.appendChild(this.createNavigationElement("reading"));
        navigationList.appendChild(this.createNavigationElement("projects"));
        navigationList.appendChild(this.createNavigationElement("blog", "blog.spargonaut.com"));
        navigationList.appendChild(this.createNavigationElement("resume"));
    },

    createNavigationElement : function (name, destination) {
        var navigationElement = document.createElement("li");
        var anchor = document.createElement("a");
        anchor.textContent = name;
        navigationElement.appendChild(anchor);

        var linkText = name + ".html";
        if (destination) {
            linkText = destination;
        }

        anchor.setAttribute("href", linkText);

        return navigationElement;
    }
};
