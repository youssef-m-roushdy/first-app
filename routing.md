# Angular Routing - شرح بسيط

Angular Routing هو اللي بيخلّيك تنقّل بين صفحات أو Components مختلفة من غير ما تعمل Refresh للصفحة.

## الفكرة الأساسية

- في HTML العادي، كل صفحة بتكون ملف مستقل، والانتقال بينها يعمل إعادة تحميل كاملة.
- في Angular، التطبيق كله صفحة واحدة (SPA).
- لما تغيّر الرابط، Angular يبدّل الـ Component المعروض فقط.

## مثال على Routes

```ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'students', component: StudentComponent },
  { path: 'about', component: AboutComponent },
];
```

## Router Outlet

في `app.html` نستخدم:

```html
<router-outlet></router-outlet>
```

وده المكان اللي Angular بيعرض فيه الـ Component المناسب للرابط الحالي.

## التنقل بين الصفحات

استخدم `routerLink` بدل `href`:

```html
<a routerLink="/">Home</a>
<a routerLink="/students">Students</a>
<a routerLink="/about">About</a>
```

- `href` يعمل Refresh كامل.
- `routerLink` يغيّر الـ Component فقط.

## Route Parameters

لو عندك رابط زي:

```text
/students/5
```

فالرقم `5` اسمه parameter.

في الـ route:

```ts
{ path: 'students/:id', component: StudentComponent }
```

ولقراءة القيمة داخل الـ component:

```ts
import { ActivatedRoute } from '@angular/router';

const id = this.route.snapshot.paramMap.get('id');
```

## Query Parameters

لو الرابط كان:

```text
/students?page=2
```

فـ `page` اسمه query parameter.

قراءة القيمة:

```ts
const page = this.route.snapshot.queryParamMap.get('page');
```

## الفرق بسرعة

- Route parameter: مثل `/students/5` ويُستخدم غالبًا للـ ID.
- Query parameter: مثل `/students?page=2` ويُستخدم للبحث أو pagination أو الفلترة.

## التنقل بالكود

ممكن تغيّر الصفحة من TypeScript باستخدام `Router`:

```ts
import { Router } from '@angular/router';

this.router.navigate(['/students']);
```

## الخلاصة

Routing في Angular هو طريقة التنقل بين الـ Components داخل نفس الصفحة، بدون إعادة تحميل كاملة، وده من أهم أساسيات Angular.
