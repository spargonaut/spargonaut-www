Header = {

    create : function () {
        var headerAnchor = document.createElement("a");
        headerAnchor.setAttribute("href", "index.html");

        var container = document.getElementById("container");
        container.insertBefore(headerAnchor, container.firstChild);

        var headerElement = document.getElementById("logo_container");
        headerAnchor.appendChild(headerElement);

        var logoText = document.createElement("span");
        logoText.textContent = "spargonaut";
        logoText.id = "logo_text";

        headerElement.appendChild(logoText);
        headerElement.appendChild(this.createDot("blue", "high"));
        headerElement.appendChild(this.createDot("orange", "low"));
        headerElement.appendChild(this.createDot("green", "high"));
        headerElement.appendChild(this.createDot("yellow", "low"));
    },

    createDot : function (color, position) {
        var dot = document.createElement("span");
        dot.id = "logo_" + color + "_dot";
        dot.className = "logo_dot";
        dot.className += " " + position + "_dot";
        return dot;
    }
};