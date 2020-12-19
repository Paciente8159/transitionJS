# transitionJS
 A javascript class to perform transitions with custom effect. This works in a similar way to CSS transition, but you can control the rendering logic perform custom effects.

# transitionJS options
 Transition JS has the following option

* Transition options
  * fps - `Type: number (default 60)` This acts as a max fps limit. The real fps will depend also on the logic you are performing to render each frame.
  * transitionDuration - `Type: number (default 1000)` The duration of the transition in milliseconds.
* Function callbacks
  * renderFrame - `Type: function (default null)` This is where you declare the function responsible for the rendering effect. This will be called when ever a new frame has to be rendered.
  * transitionEasing - `Type: null | string | function (default null)` This is where you choose the transition easing function. If not declared by default transitionJS will do a linear transition. In alternative you can include the transition.easings extension and use one of the transitions by calling it by reference or by name (via string). A third alternative is to declare your own transition function.
  * transitionEnded - `Type: function (default null)` If declared this function will be called when the transition as finnished.

# transitionJS exemples

## add a 500ms transition with linear easing
```html
    <script type="application/javascript" src="transition.js"></script>
    <script type="application/javascript">
        var mytransition = new transitionJS({
        transitionDuration: 500,
        renderFrame: function(){
            /* do something */ 
        }
    });
    </script>
``` 

## add a 300ms transition with easeInOutQuad easing and a transitionEnded callback
```html
    <script type="application/javascript" src="transition.js"></script>
    <script type="application/javascript" src="transition.easings.js"></script>
    <script type="application/javascript">
        var mytransition = new transitionJS({
        transitionDuration: 300,
        transitionEasing: "easeInOutQuad",
        renderFrame: function(){
            /* do something */ 
        }
        transitionEnded: function(){
            /* do something in the end */ 
        }
    });
    </script>
``` 


 
