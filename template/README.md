# Ready Ant 🐜

Ready to use antd react cra template

### Create react app

If you want to use this template easily run bellow command.

`yarn create react-app my-app --template ready-ant`
or
`npm create-react-app my-app --template ready-ant`

### Start development

`$ yarn start `

### Some notes

- Please take a look at the structure especially `layout` folder and `routeHandler`
- All styles are in `less` folder

### Add route

If you want to add new route follow bellow steps

- Go to pages and create a new page.
- Go to `app/routes.ts` and add your route into the routes(title, icon, element, path).
- Done. 🤗

### Change Theme

There are two ways of customizing theme - less variables and craco

- Less : go to `less/abstracts/_variables.less` and your antd variables
- Craco: go to `craco.config.js` and in less options `modifyVars` change antd variables

### Folder Structure

Bellow structure is just the surface of the structure.

```
    src /
        | ./app
        | ./components
        | ./context
        | ./hooks
        | ./layout
        | ./less
        | ./pages
        | ./services
        | ./utils
        | index.ts
```
