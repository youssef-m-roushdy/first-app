# الدرس الثاني: Component

## Component يعني إيه؟

الـ Component هو جزء مستقل من واجهة المستخدم (UI).

مثلاً لو عندك موقع جامعة:

```text
App
│
├── Navbar
├── Sidebar
├── Students List
├── Footer
```

كل واحد من دول Component مستقل.

وده بيسهل إعادة استخدام الكود وصيانته.

## إنشاء Component

بدل ما تنشئ الملفات بنفسك، Angular CLI بيعملها.

```bash
ng generate component student
```

أو باختصار:

```bash
ng g c student
```

هيعمل فولدر اسمه:

```text
student/
  student.ts
  student.html
  student.css
```

## خلينا نشرح `student.ts`

قد تلاقيه بالشكل ده في الإصدارات الحديثة من Angular:

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class StudentComponent {}
```

## السطر الأول

```ts
import { Component } from '@angular/core';
```

يعني:

> هات الـ Component Decorator من مكتبة Angular.

بدونه Angular مش هيعرف إن الكلاس ده Component.

## الـ Decorator

```ts
@Component({
```

الـ Decorator بيقول لـ Angular:

> الكلاس اللي بعدي ده Component، ودي إعداداته.

## selector

```ts
selector: 'app-student'
```

ده اسم الـ HTML tag اللي هتستخدمه.

مثلاً:

```html
<app-student></app-student>
```

لما Angular يشوف الـ tag ده، هيعرض محتوى `student.html`.

## imports

```ts
imports: []
```

في Angular الحديثة، لو الـ Component محتاج يستخدم Component تاني أو Directive أو Pipe، بتضيفه هنا.

حالياً فاضي لأنه مش محتاج حاجة.

## templateUrl

```ts
templateUrl: './student.html'
```

يعني:

الـ HTML موجود في الملف `student.html`.

## styleUrl

```ts
styleUrl: './student.css'
```

أي CSS تكتبه هنا هيطبق على الـ Student Component فقط.

## الكلاس

```ts
export class StudentComponent {}
```

هنا هنكتب:

- Variables
- Functions
- API calls
- أي منطق خاص بالـ Component

## نجرب مثال

داخل `student.ts`:

```ts
export class StudentComponent {
  name = 'Yossef';
}
```

### شرح السطر

```ts
name = 'Yossef';
```

أنشأنا متغير اسمه `name` وقيمته `'Yossef'`.

## استخدام المتغير في HTML

داخل `student.html`:

```html
{{ name }}
```

هيظهر الاسم في الصفحة.

## العلاقة بينهم

```text
Student Component
│
├── student.ts
│   فيه المنطق
│
├── student.html
│   فيه الشكل
│
└── student.css
    فيه التنسيق
```

## الخلاصة

الـ Component هو لبنة أساسية في Angular.

هو اللي بيجمع بين:

- المنطق في `student.ts`
- الشكل في `student.html`
- التنسيق في `student.css`

وده اللي بيخلي التطبيق منظم وسهل إعادة الاستخدام.