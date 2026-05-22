<!-- Sticky 'Back to top' button: wire as component in your design system. -->  

[&uarr; Back to top](#)  *(anchor `#` to page top, or `document.querySelector` scrollTo)*  

A11y: `aria-label='Back to top'` on the **control**; **visible** after **~400px** **scroll** with **reduced** **motion** **respecting** `prefers-reduced-motion: reduce` **(instant** **jump** or **fade**).  

Mobile: **place** in **lower** **right** to **not** **collide** with **OS** **gesture** **areas**; **z-index** < **modals** but **> ** **fab** of **competing** app.  

Analytics: **low** value **as** a **KPI,** but **if** used **a** lot, **it** may **indicate** **over-long** **pages** (split **the** **doc).  

