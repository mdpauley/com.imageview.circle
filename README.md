com.imageview.circle
====================

Alloy Titanium widget to display an image or username initals in a round view.

## Installation

#### Via Gittio

```
gittio install com.imageview.circle
```

#### Via Github

```
git clone git@github.com:mdpauley/com.imageview.circle.git app/widgets/com.imageview.circle
```

And add in your *config.json*, under `dependencies`:

```
"dependencies": {
    "com.imageview.circle": "*"
}
```

#### Usage

```javascript
<Widget src="com.imageview.circle" id="circleView" diameter="80" ... />

```javascript

$.circleView.attrs({
  /* default is 62*/
	"diameter": 120,
	/*No default */
	"top": 35,
	/*No default */
	"left": 15,
	/*default is a random color */
	"borderColor": "#000000",
	/*default is 2*/
	"borderOffset": 0,
	/*default is 1*/
	"borderWidth": 5,
	/*default is a random color */
	"backgroundColor": "transparent",
	"textColor": "F3F3F3",
	/*default is a random color */
	"initials": "MP",
	/*default is {fontSize: $.imageView.borderRadius, fontWeight: 'bold'}; */
	"font": {fontSize: 20, fontWeight: 'bold'}*/
});
$.circleView.init();
```
