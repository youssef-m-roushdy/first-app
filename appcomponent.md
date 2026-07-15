# App Component

في Angular، الـ App Component هو أول Component بيبدأ به التطبيق بعد `bootstrapApplication()`.

لو بصيت على الملف، هتلاقي حاجة شبه دي:

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {}
```

خلينا نشرحه سطر سطر.

## أول سطر

```ts
import { Component } from '@angular/core';
```

ده معناه:

> هات الـ Component decorator من Angular.

وده اللي بيحوّل الـ class إلى Component Angular يفهمه.

## الـ Decorator

```ts
@Component({
```

ده اسمه Decorator، وبيدّي Angular Metadata عن الـ Component.

يعني بيقول له معلومات مهمة زي:

- اسم الـ selector
- ملف الـ HTML
- ملف الـ CSS

## selector

```ts
selector: 'app-root'
```

ده اسم الـ HTML tag اللي Angular بيدور عليه في الصفحة.

تقدر تستخدمه كده:

```html
<app-root></app-root>
```

ولما Angular يشوفه، يعرض الـ Component جواه.

## templateUrl

```ts
templateUrl: './app.html'
```

ده بيحدد مكان الـ HTML بتاع الـ Component.

يعني الشكل والمحتوى الموجودين في الصفحة بيكونوا في الملف ده.

## styleUrls

```ts
styleUrls: ['./app.css']
```

ده بيحدد ملف الـ CSS الخاص بالـ Component.

أي تنسيق مكتوب فيه هيأثر على الـ Component ده فقط.

## class

```ts
export class App {}
```

هنا بتكتب المنطق الخاص بالـ Component.

ممكن تحط فيه:

- Variables
- Functions
- API calls
- أي logic خاص بالصفحة

## app.html

لو كتبت في `app.html`:

```html
Hello Angular
```

هيظهر في الصفحة.

## app.css

لو كتبت:

```css
h1 {
  color: red;
}
```

هيخلي العنوان أحمر.

## العلاقة بينهم

```text
App Component
│
├── app.ts
│   فيه المنطق
│
├── app.html
│   فيه الشكل
│
└── app.css
    فيه التنسيق
```

## الخلاصة

- `app.ts` = المنطق
- `app.html` = الواجهة
- `app.css` = الشكل والتنسيق
- `selector: 'app-root'` = المكان اللي Angular بيركب فيه الـ Component

يعني الـ App Component هو نقطة البداية الأساسية اللي Angular بيعرض من خلالها التطبيق كله.