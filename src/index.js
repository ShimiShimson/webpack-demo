import printMe from "./print.js";
import "./styles.css";

function getComponent() {
  return import(/* webpackChunkName: "lodash" */ "lodash")
    .then(({ default: _ }) => {
      const element = document.createElement("div");

      element.innerHTML = _.join(["Hello", "webpack"], " ");

      const btn = document.createElement("button");
      btn.innerHTML = "Click me and check the console";
      btn.onclick = printMe;
      element.appendChild(btn);

      return element;
    })
    .catch((error) => "An error occurred while loading the component");
}

getComponent().then((component) => {
  document.body.appendChild(component);
});

// let element = component(); // Store the element to re-render on print.js changes

// if (module.hot) {
//   module.hot.accept('./print.js', function() {
//     console.log('Accepting the updated printMe module!');
//     document.body.removeChild(element);
//     element = component(); // Re-render the "component" to update the click handler
//     document.body.appendChild(element);
//   })
// }
