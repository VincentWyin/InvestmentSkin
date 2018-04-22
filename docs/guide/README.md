# Overview

The demo site is composed of 5 parts: 

* [Contact](./screen.md), including Person and Company
* [Investor](./screen.md#investor)
* [Fund](./screen.md#fund)
* [Investment](./screen.md#investment)
* [Investment Life Cycle](./investment-life-cycle.md)

Thanks to [bootstrap](https://getbootstrap.com/) and [Gentelella](https://github.com/puikinsh/gentelella), the demo site support **mobile** device :tada:. All pages are static HTML, no back-end logic included. 

Below is the overview E-R diagram of the site.
![alt text][overview]

[overview]: ../img/overview.png "Overview"

## Related JS Plugins

All js plugins are located in folder Vendor, please refer to chart.

```
.
└─ vendors
   └─ animate.css
   └─ autosize
   └─ ......
   └─ transitionize
   └─ validator
```

Please focus on below 10 plugins. Not all plugins used in the demo site.

- auotsize
- bootstrap
- bootstrap-datetimepicker
- Chart.js
- datatable
- DateJS
- dropzone
- Flot
- jquery
- moment