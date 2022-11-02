# Ready Ant 🐜

Ready to use antd react cra template

### Create react app

If you want to use this template easily run bellow command.

`yarn create react-app my-app --template ready-ant`
or
`npx create-react-app my-app --template ready-ant`

### What are we using  ?
 - Vite
 - Zustand
 - React-query
 - Ant Design

### Start development

`$ yarn start `

### Some notes

- Please take a look at the structure especially `layout` folder and `usePanelRoutes`
- All styles are in `less` folder
- File-based Router (Remix style)

### RTL

For RTL layout you can really easily customize antd in `app/antd.config.ts`

### Add route

If you want to add new route follow bellow steps

- Go to pages and create a new page.
- Done. 🤗

**Note** : Routing system is file-based (Remix style)
Learn more : https://remix.run/docs/en/v1/guides/routing

### Change Theme

There are two ways of customizing theme - less variables and craco

- Less : go to `less/abstracts/_variables.less` and your antd variables

### Folder Structure

Bellow structure is just the surface of the structure.

```
    src /
        | ./components
        | ./hooks
        | ./layout
        | ./less
        | ./pages // => Router is here (You can change it in vite config)
        | ./types
        | ./store
        | index.ts
```


if you have any suggestion please tell me 🙏.

Telegram : https://t.me/samyar_kd

Email : samyarkd@gmail.com
