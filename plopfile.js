export default function (/** @type {import('plop').NodePlopAPI} */ plop) {
  // create your generators here
  plop.setGenerator("basics", {
    description: "this is a skeleton plopfile",
    prompts: [{ type: "input", name: "name", message: "Name your resource" }], // array of inquirer prompts
    actions: [
      {
        type: "add",
        path: "src/components/{{titleCase name}}/{{titleCase name}}.tsx",
        templateFile: "plop/templates/index.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{titleCase name}}/{{titleCase name}}.module.sass",
        templateFile: "plop/templates/styles.module.sass.hbs",
      },
    ],
  });

  plop.setHelper("titleCase", (str) => {
    return str.charAt(0).toUpperCase() + str.substring(1);
  });
}
