# CountUp.js Angular 1.x Module

Animates a numerical value by counting to it.

Despite its name, CountUp can count in either direction, depending on the `start-val` and `end-val` attributes that you pass.

### [Demo (CountUp + angular-scroll-spy)](http://inorganik.github.io/angular-scroll-spy/)

## See Also

- **[CountUp.js repo](https://github.com/inorganik/countUp.js)**
- **[CountUp.js Angular ^2 Module](https://github.com/inorganik/countUp.js-angular2)**
- **[CountUp.js React](https://github.com/glennreyes/react-countup)**
- **[CountUp.js WordPress Plugin]((https://wordpress.org/plugins/countup-js/)**

## Usage

Inject `countUpModule`. Use the `count-up` attribute to quickly create an animation. It also integrates nicely with the [Angular-scroll-spy](http://inorganik.github.io/angular-scroll-spy/) directive. 

Attributes:
- `end-val: Number` (required)
- `start-val: Number`
- `duration: Number`
- `decimals: Number`
- `options: Object` (see [CountUp](https://github.com/inorganik/countUp.js))

Create your animation like the examples below:

```html
<h2 count-up end-val="873.4"></h2>
```
With `angular-scroll-spy`:
```html
<h2 count-up id="numberAnimation" end-val="873.4" scroll-spy-event="elementFirstScrolledIntoView" scroll-spy></h2>
```

## Dependency

[`countup.js`](https://github.com/inorganik/countUp.js) is configured as a dependency in `package.json`. If you are manually including dependencies, make sure to include:
- `countUp.min.js`
- `angular-countUp.min.js`

## Contributing

Before you make a pull request, please be sure to follow these simple instructions:

1. Do your work on `angular-countUp.js` in the root directory.
2. In Terminal, `cd` to the repo directory.
3. Run `npm install`, which installs gulp and its dependencies.
4. Run `gulp`, which copies and minifies the .js files to the `dist` folder.
