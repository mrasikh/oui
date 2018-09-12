[![Build Status](https://travis-ci.org/optimizely/oui.svg?branch=devel)](https://travis-ci.org/optimizely/oui)
[![codecov](https://codecov.io/gh/optimizely/oui/branch/devel/graph/badge.svg)](https://codecov.io/gh/optimizely/oui)
[![Gitter](https://badges.gitter.im/optimizely/oui.svg)](https://gitter.im/optimizely/oui?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Live Documentation](https://img.shields.io/badge/documentation-live-blue.svg)](http://design.optimizely.com/docs/oui/)

# OUI Component Library

![Louis](https://raw.githubusercontent.com/optimizely/oui/devel/assets/louis.gif)

_Meet Louis, the official mascot of OUI._

## Documentation

- [Storybook](http://optimizely.github.io/oui/storybook/)
- [Internal documentation](http://design.optimizely.com/docs/oui/) (requires VPN access)
- [Archived SASS documentation](http://design.optimizely.com/docs/oui/9.0.0/) (requires VPN access)

***

## Contribute to OUI

Run `git clone https://github.com/optimizely/oui.git && yarn install`.

See [CONTRIBUTING.md](CONTRIBUTING.md) for more information

## Install OUI

OUI is installed via npm; the `optimizely-oui` package contains Sass files and React components saved within your project's `node_modules/` folder.

```bash
npm install optimizely-oui --save
```

#### Use OUI Sass

OUI consists of two parts:

1. **Core OUI Sass**
    - Base styles used as the foundation for any site.
    - This code lives in this OUI repository and is loaded before application specific Sass.
2. **Project specific Sass (mobile website, developer site, etc…)**
    - Project specific Sass built with OUI code such as variables or mixins.
    - This code lives in the project repo, pulling OUI as a dependency.

For example, if you're building a mobile site, your main SCSS file `mobile.scss` would contain:

```scss
// # Mobile Website
// Root file driving the Mobile Website CSS.

// ## OUI and custom functions
@import '../node_modules/optimizely-oui/src/oui/partials/sass/functions';
@import 'mobile-website/functions';

// ## OUI and custom variables
// The mobile website variables file can contain new variables or overwrite existing variables.
@import '../node_modules/optimizely-oui/src/oui/oui-variables';
@import 'mobile-website/mobile-variables';

// ## OUI and custom partials
// Partials are files that import other components
@import '../node_modules/optimizely-oui/src/oui/oui-partials';
@import 'mobile-website/mobile-partials';

// ## Overrides (helper/utility classes)
// Overrides use `!important` classes for overrides and should always be loaded last.
@import '../node_modules/optimizely-oui/src/overrides/admin';
@import '../node_modules/optimizely-oui/src/overrides/background';
@import '../node_modules/optimizely-oui/src/overrides/borders';
@import '../node_modules/optimizely-oui/src/overrides/layout';
@import '../node_modules/optimizely-oui/src/overrides/margin';
@import '../node_modules/optimizely-oui/src/overrides/padding';
@import '../node_modules/optimizely-oui/src/overrides/type';
@import '../node_modules/optimizely-oui/src/overrides/sizing';
```

#### Use OUI React

OUI comes with React components that can be used instead of copying and pasting HTML from the documentation. You can view these components locally by running `npm run docs:watch` after cloning the repository and installing dependencies with `npm install`.

These components can be used in a React codebase by requiring OUI:

```js
import Button from 'optimizely-oui';
```

[We provide React documentation](http://design.optimizely.com/docs/oui/) that includes information on our component props and default values.
