# app.config.ts and Providers

`app.config.ts` is not only for registering services. It is the place where you register providers in general.

## Basic Example

```ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideAnimations(),
  ],
};
```

All of these are providers, but not all of them are services.

## What happens when you inject something?

When you write:

```ts
constructor(private http: HttpClient) {}
```

Angular thinks like this:

Component needs `HttpClient`

-> go to the DI container

-> is there a provider for `HttpClient`?

-> yes

-> give me an instance

So the provider is what tells Angular:

"If someone asks for `HttpClient`, create an object of this type."

## What if I created the service myself?

For example:

```ts
export class UserService {}
```

If you write it like this:

```ts
@Injectable({
  providedIn: 'root',
})
export class UserService {}
```

Angular registers it automatically in the DI container.

So you do not need to add it to `app.config.ts`.

But if you write:

```ts
@Injectable()
export class UserService {}
```

without `providedIn`, then you must register it manually:

```ts
export const appConfig: ApplicationConfig = {
  providers: [UserService],
};
```

Otherwise, you will get:

```txt
NullInjectorError: No provider for UserService
```

## Full Example

```ts
@Injectable()
export class LoggerService {
  log(message: string) {
    console.log(message);
  }
}
```

Register it:

```ts
export const appConfig: ApplicationConfig = {
  providers: [LoggerService],
};
```

Then use it:

```ts
export class AppComponent {
  constructor(private logger: LoggerService) {
    this.logger.log('Hello');
  }
}
```

Angular does the following:

AppComponent

-> needs `LoggerService`

-> looks in `providers`

-> finds it

-> creates the object

-> sends it to the constructor

## Important Note

`provideHttpClient()` and `provideRouter()` are not services themselves. They are functions that register groups of providers for `HttpClient` and `Router`.

For example, `provideHttpClient()` registers all the internal providers needed by the HTTP system, not just one object.

We will go deeper into this when we start explaining Dependency Injection, because it is one of the most important parts of Angular.