# Interceptor - شرح بسيط

الـ **Interceptor** تقدر تعتبره أخو الـ Guard لكن للـ HTTP Requests.

- **Guard** يحرس الـ Routes.
- **Interceptor** يحرس الـ API Requests.

---

# المشكلة اللي بيحلها

تخيل عندك 50 API Request:

```ts
this.http.get('/students');

this.http.post('/courses');

this.http.put('/profile');
```

وكل Request لازم تبعت معه JWT Token:

```text
Authorization: Bearer xxxxx
```

هل هتضيف الـ Header في كل Request؟

```ts
this.http.get('/students', {
  headers: {
    Authorization: `Bearer ${token}`
  }
});
```

طبعًا لا.

هنا ييجي دور الـ Interceptor.

---

# الفكرة

أي Request يطلع:

```text
Component
    |
    v
HttpClient
    |
    v
Interceptor
    |
    v
Server
```

وأي Response يرجع:

```text
Server
    |
    v
Interceptor
    |
    v
Component
```

يعني الـ Interceptor يقف في النص.

---

# أشهر استخداماته

## 1) إضافة JWT Token

بدل ما تكتبه في كل Request.

## 2) Error Handling

لو السيرفر رجع:

```text
401 Unauthorized
```

ممكن تعمل Logout تلقائي.

## 3) Loading Spinner

قبل إرسال الطلب:

```ts
spinner.show();
```

وبعد ما يخلص:

```ts
spinner.hide();
```

## 4) Logging

تسجل كل Request و Response.

---

# إنشاء Interceptor

من الـ CLI:

```bash
ng g interceptor interceptors/auth
```

هيعمل ملف زي:

```text
auth.interceptor.ts
```

---

# شكله

```ts
import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
```

---

# يعني إيه `req`؟

هو الـ Request الحالي.

مثلاً:

```ts
this.http.get('/students');
```

الـ `req` هيكون:

```text
GET /students
```

---

# يعني إيه `next`؟

ده الطريق للسيرفر.

```ts
return next(req);
```

يعني:

> كمل بقى وابعت الطلب.

---

# إضافة JWT Token

نفترض إن التوكن متخزن:

```ts
localStorage.setItem('token', token);
```

---

نجيب التوكن:

```ts
const token = localStorage.getItem('token');
```

---

ثم نعمل Clone للطلب.

ليه Clone؟

لأن الـ Request Object Immutable.

يعني ممنوع تعدله مباشرة.

---

غلط:

```ts
req.headers.set(...)
```

صح:

```ts
const clonedReq = req.clone({
  setHeaders: {
    Authorization: `Bearer ${token}`
  }
});
```

---

ثم نبعته:

```ts
return next(clonedReq);
```

---

# الكود النهائي

```ts
import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(req);
};
```

---

# تسجيله في Angular

في ملف:

```text
app.config.ts
```

---

```ts
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth.interceptor';
```

---

```ts
providers: [
  provideHttpClient(
    withInterceptors([
      authInterceptor
    ])
  )
]
```

---

# Flow كامل

لو عندك:

```ts
this.http.get('/students');
```

هيحصل:

```text
GET /students
      |
      v
Interceptor
      |
      +---- add token
      |
      v
GET /students
Authorization: Bearer xxxxx
      |
      v
Server
```

---

# التعامل مع Errors

مثلاً لو الـ API رجعت:

```text
401
```

نستخدم RxJS:

```ts
import { catchError, throwError } from 'rxjs';
```

---

```ts
return next(req).pipe(
  catchError(error => {
    if (error.status === 401) {
      console.log('Unauthorized');
    }

    return throwError(() => error);
  })
);
```

---

# مثال Logout تلقائي

```ts
import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError(error => {
      if (error.status === 401) {
        localStorage.removeItem('token');
        router.navigate(['/login']);
      }

      return throwError(() => error);
    })
  );
};
```

---

# الفرق بين Guard و Interceptor

| Guard | Interceptor |
|---|---|
| يشتغل قبل Route | يشتغل قبل Request |
| يحمي الصفحات | يحمي الـ APIs |
| يرجع `true` / `false` | يعدل Request أو Response |
| يستخدم مع `Router` | يستخدم مع `HttpClient` |

---

# الخلاصة

- الـ **Guard** يحمي الصفحات.
- الـ **Interceptor** يحمي الـ HTTP Requests.
- أفضل استخدام له هو إضافة الـ JWT Token مرة واحدة بدل تكراره في كل Request.
- يقدر كمان يتعامل مع الأخطاء، الـ Logging، والـ Loading Spinner.

لو حابب، أقدر أكتب لك كمان نسخة فيها مثال عملي على `HttpInterceptorFn` مع API حقيقي داخل المشروع.
