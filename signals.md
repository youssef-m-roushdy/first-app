# Signals vs Variables في Angular

## أولاً: إيه هي Reactivity؟

الـ Reactivity معناها:

> لما البيانات تتغير، الـ UI تتغير تلقائيًا.

مثال:

```ts
name = "Youssef";
```

وفي الـ HTML:

```html
{{ name }}
```

لو غيرت القيمة إلى:

```ts
this.name = "Ahmed";
```

السؤال هو: إزاي Angular تعرف إن `name` اتغيرت؟

هنا فيه طريقتين.

## الطريقة القديمة: Variable + Change Detection

مثال:

```ts
student: any = null;
```

وفي الـ HTML:

```html
{{ student?.name }}
```

وبعدها:

```ts
setTimeout(() => {
  this.student = {
    name: "Ahmed"
  };
}, 2000);
```

في الحالة دي Angular تحتاج Change Detection علشان تلاحظ إن `student` اتغيرت.

يعني Angular لازم تراجع القيم وتفحص هل حصل تغيير أم لا.

لو التحديث ما اتلتقطش، الـ UI ممكن تفضل على القيمة القديمة أو تظهر فاضية.

## يعني إيه Change Detection؟

تخيل Angular كل شوية تسأل نفسها:

- هل student اتغيرت؟
- هل name اتغيرت؟
- هل loading اتغير؟

وده اسمه Change Detection Cycle.

## Signals

مثال:

```ts
student = signal(null);
```

ولما تعمل:

```ts
student.set(data);
```

الـ Signal تقول لـ Angular:

> أنا اتغيرت.

Angular ترد:

> تمام، هحدث أي مكان بيستخدم student.

هنا Angular لا تحتاج تفتش في كل شيء يدويًا.

## الفرق بالرسم

### Variable

```text
student = data
↓
Angular تعمل Change Detection
↓
لو اتفحصت التغيير يتحدث UI
لو لا، UI لا تتحدث
```

### Signal

```text
student.set(data)
↓
Signal تبلغ Angular مباشرة
↓
Angular تحدث الـ UI
```

## ليه اسمها Reactive؟

لأنها تتفاعل مع التغيير مباشرة.

## ليه بنكتب student()؟

لأن:

```ts
student = signal(null);
```

يعني student ليست قيمة عادية، بل Signal.

مثال:

```ts
const count = signal(5);
```

```ts
console.log(count);   // Signal object
console.log(count());  // 5
```

- `count()` = هات القيمة الحالية
- `count.set(...)` = غيّر القيمة وبلّغ Angular

## set()

```ts
student.set(data);
```

هذا لا يغير القيمة فقط، بل ينبه Angular أيضًا أن هناك تحديثًا.

## update()

```ts
count.update(c => c + 1);
```

تستخدمها عندما تريد تعديل القيمة بناءً على القيمة القديمة.

## computed()

مثال:

```ts
firstName = signal("Youssef");
lastName = signal("Roshdy");

fullName = computed(() => `${this.firstName()} ${this.lastName()}`);
```

كلما تغير `firstName` أو `lastName`، يتحدث `fullName` تلقائيًا.

## effect()

```ts
effect(() => {
  console.log(student());
});
```

كل مرة تتغير فيها `student`، يتم تنفيذ الكود مرة أخرى.

## الخلاصة

- الـ Variable العادي يحتاج Change Detection علشان Angular تلاحظ التغيير.
- الـ Signal يبلغ Angular مباشرة عند التغيير.
- لذلك في حالتك، `student.set(data)` ظهر في الصفحة، بينما `this.student = data` لم يكن واضحًا بنفس الطريقة.

## ملخص سريع

- Variable: قيمة عادية
- Signal: قيمة + تتبع للتغيير
- `student` في HTML مع Signal تكون `student()`
- `student.set(data)` يحدث الواجهة تلقائيًا
