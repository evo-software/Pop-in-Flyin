# Pop-in-Flyin

This repository is intended for [EvolutionX](https://evolutionx.io) stores. Once added to your store, it enables you to hide and reveal layout widgets. The widgets opening and closing is controlled using [Animate.css](https://daneden.github.io/animate.css/) awesome library of css animations. 

## Installation 

To install you only need to add the following to your EvoX header block inside your Appearance >> Theme Options

### Add to header block
``` 

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css">
<link media="all" type="text/css" rel="stylesheet" href="https://github.com/evo-software/Pop-in-Flyin/raw/master/flyin-evox.css">



```


### Add to footer block

```

<script type="text/javascript" async="" src="https://github.com/evo-software/Pop-in-Flyin/raw/master/flyin-evox-app.js"></script> 
<script>

// Configure your pop-in animations and delays 
let myEvoXPopinTitle = 'Sale this Week',

	promotionPopinDiscX = 'NewVisitor',

	evoXAnimateParams =
	{
		element: '.myElement',
		openAnimation: 'flipInX',
		openDelay: 'delay-2s',
	},

	evoXAnimateCloseParams =
	{
		element: '.myElement',
		closeAnimation: 'zoomOutDown',
		//	closeDelay : '', 
	};

</script>


```
