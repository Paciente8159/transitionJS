# transitionJS

A javascript class to perform transitions with custom effect. This works in a similar way to CSS transition, but you can control the rendering logic perform custom effects.

## transitionJS options

Transition JS has the following option

- Transition options
  - fps - `Type: number (default 60)` This acts as a max fps limit. The real fps will depend also on the logic you are performing to render each frame.
  - transitionDuration - `Type: number (default 1000)` The duration of the transition in milliseconds.
- Function callbacks
  - renderFrame - `Type: function (default null)` This is where you declare the function responsible for the rendering effect. This will be called when ever a new frame has to be rendered. This function has two arguments. The first is a value that goes from 0 (0%) to 1 (100%) that corresponds to the elapsed realtime since the transition started. The second argument is a value that goes from 0 (0%) to 1 (100%) that corresponds to the elapsed transition time since start after processed by the easing function.
  - transitionEasing - `Type: null | string | function (default null)` This is where you choose the transition easing function. If not declared by default transitionJS will do a linear transition. In alternative you can include the transition.easings extension and use one of the transitions by calling it by reference or by name (via string). A third alternative is to declare your own transition function. The custom function recieves a value of the percentage of elapsed time of the transition (0%) to 1 (100%) and should also return an integer that between 0 (0%) and 1 (100%). Check the easings extension to get an ideia.
  - transitionEnded - `Type: function (default null)` If declared this function will be called when the transition as finnished.

## transitionJS exemples

### add a 500ms transition with linear easing

```html
<script type="application/javascript" src="transition.js"></script>
<script type="application/javascript">
  var mytransition = new transitionJS({
    transitionDuration: 500,
    renderFrame: function (realprogress, frameprogress) {
      /* do something */
    },
  });

  mytransition.startTranstition();
</script>
```

### add a 300ms transition with easeInOutQuad easing, a transitionEnded callback and an initial delay of 500ms

```html
<script type="application/javascript" src="transition.js"></script>
<script type="application/javascript" src="transition.easings.js"></script>
<script type="application/javascript">
      var mytransition = new transitionJS({
      transitionDuration: 300,
      transitionEasing: "easeInOutQuad",
      renderFrame: function(realprogress, frameprogress){
          /* do something */
      }
      transitionEnded: function(){
          /* do something in the end */
      }
  });

  mytransition.startTranstition(function(){
      /* do something on start */
  }, 500);
</script>
```
