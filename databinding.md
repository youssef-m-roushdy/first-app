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

## إرسال البيانات من الأب للابن

لو عندنا في `app.html`:

```html
<app-student [name]="studentName"></app-student>
```

فإحنا كده بنبعت قيمة من الـ Parent إلى الـ Child.

### نشرحها

```html
[name]
```

يعني:

> هبعت قيمة للـ Child اسمها `name`.

---

```ts
studentName
```

هو المتغير الموجود في الـ Parent.

---

لو:

```ts
studentName = "Youssef";
```

فالـ Child هيستقبل:

```text
Youssef
```

## استخدام القيمة داخل الـ Child

داخل `student.html`:

```html
{{ name() }}
```

### ليه كتبنا `name()`؟

لأن `input()` في Angular الحديثة بيرجع `Signal`.

فبدل ما نكتب:

```html
name
```

بنكتب:

```html
name()
```

علشان نجيب القيمة الحالية.

## طيب لو الابن عايز يكلم الأب؟

مثلاً عندك زر **Delete** داخل `StudentComponent`.

ولما المستخدم يضغط عليه، الأب هو اللي يحذف الطالب من القائمة.

هنا نستخدم `output()`.

---

## داخل `student.ts`

```ts
import { Component, output } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.html'
})
export class StudentComponent {

  deleteClicked = output<void>();

  delete() {
    this.deleteClicked.emit();
  }

}
```

---

### نشرح أهم سطر

```ts
deleteClicked = output<void>();
```

يعني:

> أنا كـ Child عندي حدث اسمه `deleteClicked`، والأب يقدر يسمعه.

---

```ts
this.deleteClicked.emit();
```

`emit()` معناها:

> ابعت إشعار للأب إن الحدث حصل.

---

## في `student.html`

```html
<button (click)="delete()">Delete</button>
```

---

## في `app.html`

```html
<app-student (deleteClicked)="onDelete()"></app-student>
```

لاحظ الفرق:

- `[ ]` لإرسال بيانات للابن.
- `( )` للاستماع لحدث جاي من الابن.

---

## في `app.ts`

```ts
onDelete() {
    console.log("Student Deleted");
}
```

لما تضغط الزر:

```text
ضغط المستخدم

↓

delete()

↓

emit()

↓

App يستقبل الحدث

↓

onDelete()
```

---

# الفرق بين `input()` و`output()`

```text
input()     output()
Parent → Child   Child → Parent
إرسال بيانات     إرسال أحداث
نقرأها بـ `name()`   نرسلها بـ `emit()`
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