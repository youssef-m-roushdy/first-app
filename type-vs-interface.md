# Type و Interface؟

الاتنين هدفهم واحد:

> يوصفوا شكل البيانات (Shape).

مثلاً عندك `User`.

بدل:

```ts
let user: any;
```

تكتب:

## Interface

```ts
interface User {
  id: number;
  name: string;
  age: number;
}
```

أو

## Type

```ts
type User = {
  id: number;
  name: string;
  age: number;
};
```

الاتنين يشتغلوا بنفس الطريقة.

---

## الاستخدام

```ts
const user: User = {
  id: 1,
  name: "Youssef",
  age: 22
};
```

---

# طب ليه فيه الاتنين؟

لأن في فروقات بسيطة.

---

# 1. Interface (الأشهر في Angular)

```ts
interface User {
  id: number;
  name: string;
}
```

ممكن تورث منه.

```ts
interface Admin extends User {
  role: string;
}
```

يبقى:

```ts
const admin: Admin = {
  id: 1,
  name: "Youssef",
  role: "Admin"
};
```

---

# 2. Type

```ts
type User = {
  id: number;
  name: string;
};
```

برضه ينفع:

```ts
type Admin = User & {
  role: string;
};
```

لاحظ استخدمنا `&`.

---

# أهم فرق

## Interface

ينفع تكتبه مرتين.

```ts
interface User {
  id: number;
}
```

بعدها:

```ts
interface User {
  name: string;
}
```

TypeScript هيجمعهم.

يبقى:

```ts
interface User {
  id: number;
  name: string;
}
```

وده اسمه `Declaration Merging`.

لكن:

## Type

```ts
type User = {
  id: number;
};
```

وبعدين:

```ts
type User = {
  name: string;
};
```

❌ Error

---

# Type أقوى

مثلاً:

```ts
type Status = "Pending" | "Approved" | "Rejected";
```

هنا `Interface` مينفعش.

أو:

```ts
type Id = number | string;
```

ينفع.

`Interface`؟

❌

أو:

```ts
type Point = [number, number];
```

Tuple.

`Interface`؟

❌

---

# Angular بنستخدم مين؟

## Models

معظم الناس تعمل:

```ts
export interface User {
}
```

مثلاً:

```ts
export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}
```

أو:

```ts
export interface Food {
  id: number;
  name: string;
  calories: number;
}
```

وده اللى هتشوفه في أغلب مشاريع Angular.

---

# إمتى أستخدم Type؟

لو عندك `Union`:

```ts
type Theme = "dark" | "light";
```

أو:

```ts
type Role = "Admin" | "User";
```

أو:

```ts
type ApiState = "loading" | "success" | "error";
```

---

# مثال من Angular

```ts
interface User {
  id: number;
  name: string;
}
```

```ts
@Injectable()
export class UserService {
  getUsers() {
    return this.http.get<User[]>("/users");
  }
}
```

لاحظ `User[]` معناها Array من `User`.

---

# مثال Type

```ts
type Theme = "dark" | "light";
```

```ts
theme = signal<Theme>("light");
```

لو كتبت:

```ts
theme.set("blue");
```

❌ Error

لأن `blue` مش موجودة.

---

# أيهما أفضل؟

لو سألت أي Senior Angular Developer هيقول لك غالبًا:

> استخدم `Interface` لو بتوصف Object.

> استخدم `Type` لو محتاج `Union` أو `Intersection` أو `Tuple` أو Function Types.

---

# القاعدة الذهبية

| الحالة | الأفضل |
| --- | --- |
| `User`, `Product`, `Food`, `LoginResponse` | `Interface` |
| `"dark" | "light"` | `Type` |
| `number | string` | `Type` |
| Tuple `[number, number]` | `Type` |
| Object عادي | غالبًا `Interface` |

---

# Angular CLI command

لو عايز تعمل `interface` جديدة استخدم:

```bash
ng g interface user
```

أو الاختصار:

```bash
ng g i user
```

ولو عندك `models` folder ممكن مثلًا:

```bash
ng g interface models/user
```
