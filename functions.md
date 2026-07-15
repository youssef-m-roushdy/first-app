# إضافة Function

داخل الـ Component class:

```ts
export class StudentComponent {
  name = "Yossef";

  changeName() {
    this.name = "Ahmed";
  }
}
```

خلينا نشرحها.

## changeName()

```ts
changeName()
```

أنشأنا Function اسمها `changeName`.

## this.name

```ts
this.name
```

كلمة `this` معناها:

> المتغير الموجود داخل نفس الـ Component.

يعني:

```ts
this.name = "Ahmed";
```

غير قيمة `name`.

## تشغيلها من HTML

```html
<button (click)="changeName()">Change Name</button>

{{ name }}
```

## السطر ده

```html
(click)
```

اسمه Event Binding.

يعني:

> لما المستخدم يعمل Click نفذ Function.

## قبل الضغط وبعده

قبل الضغط:

```text
Yossef
```

بعد الضغط:

```text
Ahmed
```

لأن:

```text
ضغط المستخدم
↓
changeName()
↓
name = Ahmed
↓
Angular حدّثت الشاشة تلقائيًا
```

## الخلاصة

الـ Function بتسمح لك تغيّر البيانات داخل الـ Component.

ولما تربطها بـ `(click)` في الـ HTML، Angular ينفذها عند الضغط ويحدّث الواجهة مباشرة.