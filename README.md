### View Checking:


**View Checking**: Synchronization of component view with the data model.
If we run `detectChanges()` method for their root-component like app-component then the View Checking will be performed for the whole application view tree.

####  `Typpes of Views`
![](./src/assets/view-checking.png)
![](./src/assets/view-checking-1.png)
![](./src/assets/view-checking-2.png)
#### `detectChanges()` internals
![](./src/assets/view-checking-3.png)
#### Initial View Checking will be happened when bootstrapping of application using `tick()`
![](./src/assets/view-checking-4.png)


### The Role of ZoneJS:
- To notify _Angular_ about _async_ event completion _zone.js_ uses technique called **monkey patching** to patch the browser's native API and bring some additional Behavior, some interceptors and hooks to it.
- Zone.js is a _signaling mechanism_ that Angular uses to detect when an application state might have changed. It captures asynchronous operations like setTimeout, network requests, and event listeners.
- Zone reference: https://javascript.plainenglish.io/angular-zone-js-3b5e2347b7
- How Zone works internally?
  ![](./src/assets/zoneJS-2.png)
#### Monkey Patching example
![](./src/assets/zoneJS.png)
![](./src/assets/zoneJS-1.png)
### References:
- Change Detection in Angular - Pt.1 View Checking: https://youtu.be/hZOauXaO8Z8
- Change Detection in Angular Pt.2 - The Role of ZoneJS: https://youtu.be/Ys7xdebd66Y
- Role of Zone & ZoneJS: https://youtu.be/4MP-bsrW0yo
