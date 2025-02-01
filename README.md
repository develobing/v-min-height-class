# v-min-height-class

A Vue 3 directive that adds a CSS class to an element when its height is below a specified threshold.

## 📦 Installation

```sh
npm install @develobing/v-min-height-class
```

or using Yarn:

```sh
yarn add @develobing/v-min-height-class
```

---

## 🚀 Usage

### 1️⃣ Register the Plugin in `main.js` or `main.ts`

```ts
import { createApp } from 'vue';
import App from './App.vue';
import VMinHeightClass from '@develobing/v-min-height-class';

const app = createApp(App);
app.use(VMinHeightClass).mount('#root');
```

---

### 2️⃣ Use the `v-min-height-class` Directive in a Component

```vue
<template>
  <div v-min-height-class="{ threshold: 200, className: 'small' }">
    If this box's height is 200px or less, the "small" class will be added.
  </div>
</template>

<style>
.small {
  background-color: red;
  color: white;
}
</style>
```

---

## ⚙️ Directive Props

| Property    | Type     | Description                                                                 |
| ----------- | -------- | --------------------------------------------------------------------------- |
| `threshold` | `number` | The height (in pixels) at which the class is applied.                       |
| `className` | `string` | The CSS class name to add when the element's height is below the threshold. |

---

## 🎯 Example

```vue
<template>
  <div
    class="box"
    v-min-height-class="{ threshold: 150, className: 'small-box' }"
  >
    Resize me! If my height is below 150px, I'll turn red.
  </div>
</template>

<style>
.box {
  width: 300px;
  min-height: 100px;
  background-color: lightblue;
  transition: background-color 0.3s ease;
}

.small-box {
  background-color: red;
}
</style>
```

---

## 🛠️ How It Works

1️⃣ The directive **checks the element’s height** on mount and whenever the element resizes.
2️⃣ If the height is **less than or equal to `threshold`**, it **adds `className`** to the element.
3️⃣ If the height **goes above the threshold**, the class is **removed**.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

🚀 **Enjoy coding with `v-min-height-class`!** 🚀
