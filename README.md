# React project template

> Description - Please, fill me in!

---

## I'm starting out. What to do?

- install (nvm)[https://github.com/nvm-sh/nvm] or (fnm)[https://github.com/Schniz/fnm]
- run `nmv use` or `fnm use` in root directory. If you dont have required version of node - you will be prompt to agree
  to install it, so please allow installation
- install yarn with version 1.x - `npm install --global yarn`
- run `yarn`
- you are ready to go 😄

---

## Building, running, formatting and testing

### Local development

- run `yarn start`

### Testing

- run `yarn test`

### Building

- run `yarn build`
- builded artifacts will be inside `./build` directory

### Formatting code

- configure your IDE to work properly with typescript, eslint and prettier, then set it to format code on save
- you could also run command to manually fix autofixable prettier and eslitn errors - `yarn fix:all`

Additional commands:

- `yarn lint` - show liner errors and warnings
- `yarn lint:fix` - fix auto fixable errors and warnings
- `yarn prettier:fix` - fix prettier formatting

> Please, fill me in! configure your IDE to work with prettier, eslint and typescript format code on save

---

## Practices

- **AVOID `any` in TS!!!**
- adding new dependencies should be discussed with the team

---

## Keep in mind

- **PWA!!!** - in order to service worker be refreshed when you deploy next version of an app - bump version inside `package.json` file

---

## Modules

> Please, fill me in!
