# الدرس الثالث: Data Binding

## يعني إيه Data Binding؟

ببساطة:

> هو الطريقة اللي Angular بيستخدمها عشان يربط البيانات بين الـ Component (TypeScript) و الـ HTML.

تخيل إن عندك:

```text
student.ts  ←→  student.html
```

Angular هو اللي بيخلي الاتنين يتواصلوا.

## الأنواع الأربعة

1. Interpolation
2. Property Binding
3. Event Binding
4. Two-Way Binding

هنشرح كل واحدة.

## أولاً: Interpolation

دي اللي استخدمناها.

```ts
export class StudentComponent {
  name = "Yossef";
}
```

وفي HTML:

```html
{{ name }}
```

### Angular بيعمل إيه؟

قبل التشغيل:

```html
{{ name }}
```

بعد التشغيل:

```text
Yossef
```

يعني Angular استبدل `{{ name }}` بقيمتها.

### ممكن تعرض أكتر من متغير

```ts
name = "Yossef";
age = 22;
```

```html
{{ name }}

{{ age }}
```

النتيجة:

```text
Yossef

22
```

### تقدر تعمل عمليات

```html
{{ 5 + 10 }}
```

النتيجة:

```text
15
```

أو:

```ts
age = 22;
```

```html
{{ age + 1 }}
```

النتيجة:

```text
23
```

أو:

```html
{{ name.toUpperCase() }}
```

النتيجة:

```text
YOSSEF
```

## ثانياً: Property Binding

وده بيربط خاصية (Property) في HTML بمتغير في TypeScript.

مثال:

```ts
imageUrl = "https://picsum.photos/200";
```

في HTML:

```html
<img [src]="imageUrl" />
```

لاحظ الأقواس المربعة:

```html
[src]
```

دي معناها:

> اربط خاصية `src` بالمتغير `imageUrl`.

Angular هيحوّلها إلى قيمة فعلية من الـ component.

### مثال تاني

```ts
isDisabled = true;
```

```html
<button [disabled]="isDisabled">Save</button>
```

بما إن `isDisabled = true` يبقى الزر هيكون Disabled.

ولو:

```ts
isDisabled = false;
```

الزر هيشتغل.

### سؤال مهم

ليه منكتبش:

```html
disabled="{{ isDisabled }}"
```

لأن `disabled` مش Text. ده Property.

ولذلك لازم:

```html
[disabled]
```

## ثالثاً: Event Binding

ودي معناها: لما يحصل Event نفذ Function.

### مثال

```ts
count = 0;

increase() {
  this.count++;
}
```

في HTML:

```html
<button (click)="increase()">Increase</button>

{{ count }}
```

### قبل وبعد الضغط

قبل الضغط:

```text
0
```

بعد الضغط مرة:

```text
1
```

بعد الضغط مرتين:

```text
2
```

يعني:

```text
(click)

↓

increase()

↓

count++

↓

Angular تحدث الشاشة
```

### Events مش Click بس

في:

```text
(input)
(change)
(mouseenter)
(mouseleave)
(keyup)
(keydown)
(dblclick)
```

كلهم بنفس الفكرة.

## رابعاً: Two-Way Binding

وده أشهر نوع.

هو بيجمع Property Binding و Event Binding في نفس الوقت.

### مثال

نفترض:

```ts
name = "";
```

في HTML:

```html
<input [(ngModel)]="name" />

{{ name }}
```

لو المستخدم كتب:

```text
Ahmed
```

داخل الـ input، هتلاقي الاسم اتكتب تحت مباشرة.

ولو في الكود:

```ts
name = "Yossef";
```

هيظهر داخل الـ input تلقائياً.

يعني البيانات ماشية في الاتجاهين.

```text
TypeScript

↓

HTML

↑

TypeScript
```

### ليه اسمها Two-Way؟

لأن:

```text
Component

↓

HTML

↑

Component
```

الاتجاهين شغالين.

## لكن ngModel يحتاج حاجة

لازم تضيف:

```ts
import { FormsModule } from '@angular/forms';
```

ثم:

```ts
@Component({
  imports: [FormsModule]
})
```

في الـ Standalone Component.

## الخلاصة

Data Binding هو اللي بيسمح لـ Angular يربط الـ TypeScript بالـ HTML.

والأنواع الأساسية هي:

- Interpolation لعرض القيم
- Property Binding لربط الخصائص
- Event Binding للتفاعل مع الأحداث
- Two-Way Binding للربط في الاتجاهين