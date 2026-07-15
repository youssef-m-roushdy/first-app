# الدرس الرابع: Directives

## يعني إيه Directive؟

الـ Directive هو أمر Angular بيديه للـ HTML علشان يغيّر سلوكه.

يعني مثلاً:

- اعرض العنصر.
- اخفي العنصر.
- كرر العنصر 100 مرة.
- غير شكل العنصر.

## أنواع الـ Directives

في Angular فيه 3 أنواع رئيسية:

1. Structural Directives: بتغير شكل الصفحة بإضافة أو حذف عناصر.
2. Attribute Directives: بتغير شكل العنصر نفسه.
3. Custom Directives: أنت بتعملها بنفسك.

إحنا هنبدأ بالـ Structural.

## أولاً: `@if`

نفترض عندنا:

```ts
export class StudentComponent {
  isLoggedIn = true;
}
```

وفي HTML:

```html
@if (isLoggedIn) {
  Welcome Yossef
}
```

### Angular بيعمل إيه؟

لو:

```ts
isLoggedIn = true;
```

هيظهر:

```text
Welcome Yossef
```

ولو:

```ts
isLoggedIn = false;
```

مش هيظهر أي حاجة.

لاحظ إن العنصر بيتشال من الـ DOM، مش بيتخبى بس.

## مثال عملي

```ts
export class StudentComponent {
  isAdmin = false;
}
```

HTML:

```html
@if (isAdmin) {
  Delete Student
}
```

لو المستخدم مش Admin، مش هيشوف زرار الحذف.

## if - else

```html
@if (isLoggedIn) {
  Welcome
}
@else {
  Please Login
}
```

لو:

```ts
isLoggedIn = true;
```

النتيجة:

```text
Welcome
```

ولو:

```ts
isLoggedIn = false;
```

النتيجة:

```text
Please Login
```

## مثال كامل

```ts
export class StudentComponent {
  isLoggedIn = false;

  login() {
    this.isLoggedIn = true;
  }
}
```

HTML:

```html
<button (click)="login()">Login</button>

@if (isLoggedIn) {
  Welcome
}
@else {
  Please Login
}
```

### ماذا يحدث؟

أول ما البرنامج يفتح:

```ts
isLoggedIn = false;
```

هيظهر:

```text
Please Login
```

لما تضغط Login:

```ts
this.isLoggedIn = true;
```

Angular يعيد رسم الصفحة.

فتظهر:

```text
Welcome
```

## الخلاصة

الـ Directive بيدي Angular طريقة يتحكم بيها في سلوك وعرض العناصر داخل الـ HTML.

وأشهر استخدام هنا هو `@if`، لأنه بيخليك تعرض أو تخفي محتوى حسب شرط معين.

## ثانياً: `@for`

وده بيستخدم لتكرار البيانات.

مثلاً عندك Array:

```ts
students = [
  "Ahmed",
  "Ali",
  "Youssef",
  "Omar"
];
```

في HTML:

```html
@for (student of students; track student) {
  {{ student }}
}
```

### ماذا يحدث؟

Angular يكرر العنصر.

النتيجة:

```text
Ahmed

Ali

Youssef

Omar
```

## شرح السطر

```html
@for (student of students; track student)
```

### student

ده متغير مؤقت.

في أول دورة:

```text
student = Ahmed
```

في الثانية:

```text
student = Ali
```

وهكذا.

### of

يعني لف على الـ Array.

### students

هو الـ Array نفسه.

### track student

دي مهمة جدًا.

Angular بيستخدمها عشان يعرف كل عنصر وميعيدش رسم اللي متغيرش.

لو عندك Objects:

```ts
students = [
  { id: 1, name: "Ahmed" },
  { id: 2, name: "Ali" }
];
```

الأفضل:

```html
@for (student of students; track student.id) {
  {{ student.name }}
}
```

وده أفضل في الأداء.

## الوصول للـ Index

```html
@for (student of students; track student; let i = $index) {
  {{ i }}
  -
  {{ student }}
}
```

النتيجة:

```text
0 - Ahmed

1 - Ali

2 - Youssef
```

## مثال حقيقي

```ts
students = [
  {
    id: 1,
    name: "Ahmed",
    age: 20
  },
  {
    id: 2,
    name: "Ali",
    age: 22
  }
];
```

HTML:

```html
@for (student of students; track student.id) {
  {{ student.name }}

  {{ student.age }}
}
```

النتيجة:

```text
Ahmed
20

Ali
22
```

## إضافة عنصر جديد

```ts
students = ["Ahmed"];

addStudent() {
  this.students.push("Youssef");
}
```

HTML:

```html
<button (click)="addStudent()">Add</button>

@for (student of students; track student) {
  {{ student }}
}
```

## الخلاصة النهائية

`@for` بتستخدم لما تحتاج تكرر عناصر من Array داخل الـ HTML.

واستخدام `track` مهم جدًا علشان الأداء، خصوصًا مع الـ objects والقوائم الكبيرة.