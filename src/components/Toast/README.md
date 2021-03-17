# Toast

```vue
<template>
  <div>
    <m-toast 
      type="error"
      variant="block"
    >
      This is an error toast.
    </m-toast>

    <m-toast
        type="success"
        variant="block"
    >
        This is a success toast.
    </m-toast>

    <m-toast
        type="warning"
        variant="block"
    >
        This is a warning toast.
    </m-toast>

    <m-toast
        type="info"
        variant="block"
    >
        This is an info toast.
    </m-toast>
  </div>
</template>

<script>
import { MToast } from '@square/maker/components/Toast';

export default {
	components: {
		MToast,
	},
};
</script>
```

<!-- api-tables:start -->
## Props

Supports attributes from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).

| Prop    | Type     | Default    | Possible values                       | Description    |
| ------- | -------- | ---------- | ------------------------------------- | -------------- |
| type    | `string` | `'info'`   | `error`, `success`, `warning`, `info` | type of notice |
| variant | `string` | `'inline'` | `inline`, `block`                     | notice variant |


## Slots

| Slot    | Description   |
| ------- | ------------- |
| default | toast content |


## Events

Supports events from [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).
<!-- api-tables:end -->
