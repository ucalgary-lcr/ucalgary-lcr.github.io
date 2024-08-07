window.initializeComponent = (name, parameters) => {
  console.log({ name: name, parameters: parameters });
};

//const lcrEnvironment = localStorage.getItem("lcrEnvironment") ?? "Production"; // Development, Staging, Production
const lcrBootstrapHost = localStorage.getItem("lcrBootstrapHost") ?? "https://library.ucalgary.ca";

Blazor.start({
  //environment: lcrEnvironment,
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
    Blazor.rootComponents.add(targetElement, "news-component", { baseAddress: lcrBootstrapHost });
});
