# Interpolation

## يعني إيه `{{ }}`؟

دي اسمها **Interpolation**.

يعني:

> اعرض قيمة المتغير.

لو:

```ts
name = "Ahmed";
```

هيظهر:

```text
Ahmed
```

ولو:

```ts
name = "Ali";
```

هيظهر:

```text
Ali
```

## مثال آخر

```ts
export class StudentComponent {
  name = "Yossef";

  age = 22;
}
```

وفي HTML:

```html
Name : {{ name }}

Age : {{ age }}
```

النتيجة:

```text
Name : Yossef

Age : 22
```

## الخلاصة

Interpolation بتخلّي Angular يعرض قيمة المتغير داخل الـ HTML.

يعني أي قيمة مكتوبة بين `{{ }}` Angular بيقرأها من الـ component class ويحطها في الصفحة.