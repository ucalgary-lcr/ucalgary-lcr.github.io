window.initializeComponent = (name, parameters) => {
  console.log({ name: name, parameters: parameters });
};

const lcrEnvironment = "Development"; // Development, Staging, Production
const lcrBootstrapHost = "https://localhost:5443"; // https://localhost:5443

Blazor.start({
  environment: lcrEnvironment,
  loadBootResource: function (type, name, defaultUri, integrity) {
    console.log(
      `Loading: '${type}', '${name}', '${defaultUri}', '${integrity}'`
    );
    switch (type) {
      case "assembly":
      case "pdb":
      case "dotnetjs":
      case "dotnetwasm":
      case "timezonedata":
        return `${lcrBootstrapHost}/_framework/${name}`;
    }
  },
}).then(function () {
  let targetElement = document.getElementById("news-container");
  if (targetElement !== null)
    Blazor.rootComponents.add(targetElement, "news-component", {});
});
