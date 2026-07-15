# FirstApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.12.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## How Angular starts the app

When you run `ng serve`, Angular CLI starts a development server. In modern Angular projects, this happens through Vite.

The server only prepares the app at this stage. No application code runs in the browser yet.

### What happens step by step

1. You run `ng serve`.
2. The development server starts and listens on `http://localhost:4200/`.
3. You open that URL in the browser.
4. The browser requests `index.html` from `src/index.html`.
5. The browser then loads the JavaScript bundles generated from your TypeScript files.
6. The first file that executes is usually the code produced from `src/main.ts`.
7. `bootstrapApplication(...)` starts Angular and creates the root component.
8. Angular renders the app inside the root element, usually `app-root`.

### Main files involved

- `src/index.html` is the HTML shell.
- `src/main.ts` starts the application.
- `src/app/app.config.ts` registers providers.
- `src/app/app.ts` contains the root component.

### Simple flow

```text
ng serve
	-> development server starts
	-> browser opens localhost:4200
	-> index.html is loaded
	-> JavaScript bundles are downloaded
	-> main.ts runs
	-> bootstrapApplication() starts Angular
	-> App component is created
	-> app-root gets the UI
```

### Important idea

The browser does not understand TypeScript directly. The Angular build tooling converts your `.ts` files into JavaScript before the browser runs them.

That is why `index.html` alone is not enough. It becomes useful only after the JavaScript bundles are loaded and Angular starts bootstrapping the app.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
