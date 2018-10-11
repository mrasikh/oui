<p align="center">
  <a href="http://optimizely.github.io/oui/storybook/">
    <img width="200" src="https://raw.githubusercontent.com/optimizely/oui/devel/assets/louis.gif" title="Meet Louis, the official mascot of OUI">
  </a>
</p>

<h1 align="center">OUI Component Library</h1>

<div align="center">

A custom CSS and React component framework that powers the Optimizely user interface.

[![Build Status](https://travis-ci.org/optimizely/oui.svg?branch=devel)](https://travis-ci.org/optimizely/oui)
[![codecov](https://codecov.io/gh/optimizely/oui/branch/devel/graph/badge.svg)](https://codecov.io/gh/optimizely/oui)

</div>

## 🔗 Links

- [Storybook](http://optimizely.github.io/oui/storybook/)
- [Archived SASS documentation](http://design.optimizely.com/docs/oui/9.0.0/) (requires VPN access)

## 📦 Install

```bash
git clone https://github.com/optimizely/oui.git
yarn install
yarn storybook
```

## 💪 Contribute

Read [how to contribute to OUI](CONTRIBUTING.md) for instructions on making pull requests.

## ⚡️ React

To use an OUI component inside your React app:

```jsx
import React from 'react';
import { Button } from 'optimizely-oui';
...
return ( <Button size="tiny">Click Me</Button> );
```

## 💅 Sass

To use OUI Sass variables and mixins in your project read [how to use OUI sass](readme-sass.md).
