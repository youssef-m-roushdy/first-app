# How Angular Starts the App

خلينا نمشي من أول ما تكتب:

```bash
ng serve
```

## الخطوة 1: Angular يشغل Development Server

لما تكتب:

```bash
ng serve
```

Angular، عن طريق Vite في الإصدارات الحديثة، بيشغل Development Server على:

```text
http://localhost:4200
```

لكن لحد دلوقتي ولا سطر JavaScript اتنفذ.

## الخطوة 2: تفتح المتصفح

لما تروح على:

```text
http://localhost:4200
```

المتصفح يقول للسيرفر:

> ابعتلي الصفحة.

السيرفر يرد بأول ملف وهو:

```text
index.html
```

وده موجود داخل:

```text
src/
  index.html
```

لاحظ إن لحد دلوقتي Angular لسه مشتغلش.

## الخطوة 3: المتصفح يقرأ index.html

المتصفح يقرأ `index.html` ويكتشف إن الصفحة نفسها لسه محتاجة JavaScript عشان تشتغل.

يعني HTML لوحده مش كفاية علشان التطبيق يظهر.

## الخطوة 4: تحميل ملفات JavaScript

هنا Angular CLI وVite بيكونوا حوّلوا ملفات TypeScript بتاعتك إلى JavaScript.

يعني الملفات دي:

```text
main.ts
app.ts
app.config.ts
...
```

بتتحول إلى ملفات JavaScript يقدر المتصفح يشغلها.

تقريبًا تبقى بالشكل ده:

```text
main-ABC123.js
chunk-XYZ987.js
polyfills.js
...
```

المتصفح هو اللي يحمل ملفات JavaScript دي.

وده اللي المقصود بعبارة: بعد ما المتصفح يحمل ملفات JavaScript.

## الخطوة 5: أول ملف يشتغل

أول ملف JavaScript يبدأ تنفيذه هو الناتج من `main.ts`.

غالبًا هتلاقي فيه:

```ts
bootstrapApplication(App, appConfig);
```

ودي أول مرة Angular يبدأ يشتغل.

## الخطوة 6: bootstrapApplication()

دلوقتي Angular يقول:

```text
ابدأ التطبيق

↓

اعمل App Component

↓

دور على app-root

↓

لقيته

↓

حط جواه الـ HTML بتاع App Component
```

فتتحول الصفحة من صفحة فاضية إلى تطبيق شغال، مثلًا:

```text
Hello Angular
```

## الرسم الكامل

```text
ng serve
  │
  ▼
Development Server
  │
  ▼
Browser opens localhost:4200
  │
  ▼
index.html
  │
  ▼
Browser downloads JavaScript files
(main.js, chunks, polyfills...)
  │
  ▼
main.ts starts executing
  │
  ▼
bootstrapApplication()
  │
  ▼
Angular creates App Component
  │
  ▼
app-root gets filled
  │
  ▼
Application appears
```

## سؤال مهم

يمكن تقول:

> هو أنا مش شايف حاجة في `index.html`، أمال المتصفح عرف يجيب ملفات JavaScript منين؟

وده سؤال مهم جدًا، وإجابته مرتبطة بطريقة عمل Vite وAngular CLI الحديثة.

هشرحها في الخطوة اللي بعدها لأنها هتخليك تفهم فعلًا إزاي Angular بيشتغل من تحت.