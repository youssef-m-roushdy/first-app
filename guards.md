# Auth Guard - شرح بسيط

## إيه هو Auth Guard؟

الـ **Guard** هو كود Angular بيشتغل **قبل ما يدخل Route معين**.

يعني بدل أي حد يكتب:

```text
localhost:4200/admin
```

ويدخل على صفحة الـ Admin، الـ Guard هيوقفه الأول ويسأله:

> هل المستخدم مسجل دخول؟

- لو آه → ادخله الصفحة.
- لو لا → ابعته للـ Login.

يعني هو حرفياً **حارس على الباب**.

## مثال سريع

تخيل عندك الصفحات دي:

```text
Home
Login
Dashboard
Admin
Profile
```

الـ `Home` والـ `Login` أي حد يقدر يدخلهم.

لكن:

```text
Dashboard
Admin
Profile
```

لازم يكون المستخدم Logged In.

هنا بييجي دور الـ Auth Guard.

## Angular بيعمل ده إمتى؟

أول ما تعمل:

```ts
router.navigate(['/dashboard'])
```

أو المستخدم يكتب الـ URL بنفسه.

Angular قبل ما يحمل الـ Component بيعدي على الـ Guard الأول:

```text
User
   |
   v
Router
   |
   v
Guard
   |
   +---- true ------> افتح الصفحة
   |
   +---- false -----> امنع الدخول
```

## إنشاء Guard

من الـ CLI:

```bash
ng generate guard guards/auth
```

أو:

```bash
ng g guard guards/auth
```

هيسألك:

```text
Which type of guard?
```

اختار:

```text
CanActivate
```

وساعتها هيعمل ملف زي:

```text
auth.guard.ts
```

## شكله في Angular 17+

Angular الحديث بيستخدم الـ Functional Guard:

```ts
import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  return true;
};
```

دلوقتي أي Route عليه الـ Guard هيفتح عادي.

## ربطه بالـ Routes

مثلاً:

```ts
import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
  },
];
```

يعني قبل ما يدخل `Dashboard`، Angular هيشغل:

```ts
authGuard()
```

## لو رجع `true`

```ts
export const authGuard: CanActivateFn = () => {
  return true;
};
```

الصفحة هتفتح عادي.

## لو رجع `false`

```ts
export const authGuard: CanActivateFn = () => {
  return false;
};
```

الدخول هيتمنع، وغالبًا المستخدم يتوجه للـ Login.

## الخلاصة

- الـ Auth Guard بيتنفذ **قبل دخول الـ Route**.
- لو المستخدم مسجل دخول → يسمح له بالدخول.
- لو مش مسجل → يمنعه أو يوجهه للـ Login.
- في Angular الحديث، الأفضل تستخدم **Functional Guard**.

لو حابب، أقدر كمان أضيف نسخة فيها مثال كامل بيرجع المستخدم للـ Login باستخدام `Router.navigate()`.
