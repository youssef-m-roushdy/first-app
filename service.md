# Service يعني إيه؟

الـ Service هو Class مسؤول عن **منطق معين (Business Logic)** أو التعامل مع البيانات.

مثلاً:

- AuthService → تسجيل الدخول.
- StudentService → بيانات الطلاب.
- ProductService → المنتجات.
- UserService → المستخدمين.

لاحظ إنه **لا يحتوي على HTML**، فقط TypeScript.

---

# إنشاء Service

```bash
ng g s services/student
```

هيعمل ملف:

```ts
student.service.ts
```

---

# افتحه

```ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

}
```

خلينا نشرح كل سطر.

---

## أول سطر

```ts
import { Injectable } from '@angular/core';
```

بيجيب الـ Decorator الخاص بالـ Service.

---

## `@Injectable`

```ts
@Injectable({
    providedIn: 'root'
})
```

دي معناها:

> Angular، اعمل نسخة واحدة (Singleton) من الـ Service دي واستخدمها في كل التطبيق.

### يعني إيه Singleton؟

بدل ما كل Component يعمل نسخة جديدة:

❌ غلط

```text
StudentComponent

↓

StudentService
```

```text
TeacherComponent

↓

StudentService
```

كل واحد هيعمل نسخة مختلفة.

لكن Angular يعمل كده:

```text
                StudentService
                 (نسخة واحدة)

              ↗             ↖

StudentComponent       TeacherComponent
```

كلهم يستخدموا نفس النسخة.

وده يوفر Memory ويحافظ على نفس البيانات المشتركة.

---

# نضيف بيانات

```ts
export class StudentService {

    students = [

        "Ahmed",

        "Ali",

        "Youssef"

    ];

}
```

---

# إزاي الـ Component يستخدمها؟

هنا ييجي دور **Dependency Injection**.

---

# Constructor

داخل الـ Component

```ts
constructor(
    private studentService: StudentService
){

}
```

وقف هنا.

ده أهم سطر في Angular.

---

## نشرحه كلمة كلمة

```ts
constructor()
```

الـ Constructor بيتنفذ أول ما Angular ينشئ الـ Component.

---

```ts
private
```

معناها:

المتغير ده خاص بالـ Component.

---

```ts
studentService
```

اسم المتغير.

كان ممكن تسميه أي حاجة.

---

```ts
StudentService
```

ده نوع المتغير.

يعني:

> أنا محتاج Object من StudentService.

---

## السؤال المهم

إحنا عملنا

```ts
new StudentService();
```

؟

**لا.**

طيب الـ Object جه منين؟

Angular هو اللي عمله.

وده اسمه

**Dependency Injection**.

---

# يعنى إيه Dependency Injection؟

بدل ما تكتب

```ts
const service = new StudentService();
```

Angular يقولك:

> سيبها عليا، أنا هعمل الـ Object وهديهولك.

يعني:

```text
Component

↓

عايز StudentService

↓

Angular

↓

ينشئ Service

↓

يبعتها للـ Component
```

---

# استخدام البيانات

```ts
constructor(
  private studentService: StudentService
){

}

getStudents(){

  return this.studentService.students;

}
```

---

أو مباشرة

```ts
students = this.studentService.students;
```

---

في HTML

```html
@for(student of students; track student){

  {{student}}

}
```

النتيجة

```text
Ahmed

Ali

Youssef
```