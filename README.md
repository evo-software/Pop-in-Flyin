# Pop-in-Flyin

This repository is intended for [EvolutionX](https://evolutionx.io) stores. Once added to your store, it enables you to hide and reveal layout widgets. The widgets opening and closing is controlled using [Animate.css](https://daneden.github.io/animate.css/) awesome library of css animations. 

## Installation 

Download the CSS file and the JS file. Upload them to your Media manager
To install you only need to add the following to your EvoX header block inside your Appearance >> Theme Options


### Add to header block
``` 

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css">
<link media="all" type="text/css" rel="stylesheet" href="https://staging.evocdn.io/dealer/1005/content/media/flyin-evox.css">




```
**Make sure to change the src path** 

### Add to footer block

```


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
    
// Add your list of trigger words that will activate the flyin pop-in
const evoXListOfTriggerWords = ['maestro', 'furniture', 'chair', 'desk', 'office']


</script>

<script type="text/javascript" src="https://staging.evocdn.io/dealer/1005/content/media/flyin-evox-app.js"></script> 



```
**Make sure to change the src path**

### Add the custom classes to the widget
Go to your layout and find the widget that you want to hide/reveal. Open up the widget's settings and then add the below to the "Custom CSS"
```
myElement hide

```


## FAQ / How it works / limitations

- Trigger words will work a number of use cases, so check the below to get a better idea of how they work. 
- Only one widget is currently supported per layout. Thus, we suggest to use this feature for one shorterm message and then replace it. 
- It currently is tested for single banner widgets. That said it is possilbe to use it with any widget (e.g. HTML5 widgets, ink & toner search, etc)
- Slider widgets (Banner container widgets) are not supported. However, with a little customisation you could easily get them working. 
- Not supported. This is not a supported feature of the evolutionX system. This was a fun project that the author wanted to share. 



## Trigger Words 
- Always use lowercase when specifying your trigger words
- Searches (for two or more letter searches use 'bic+pen' or 'cantilever+arch+files')
- Brand names : These will work on Product pages, Category list pages, and Searches
- Product names : These will work in product pages and search results
- Sku: These will work if they are part of the Title/name of a product. They will then work on product pages and search results

