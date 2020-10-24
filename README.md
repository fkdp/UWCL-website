# Website of the festival 'Ukraina w centrum Lublina 2020'

## Getting Started

### Prerequisites

`Ruby 2.4` or higher.
You can install it from [official website](https://rubyinstaller.org/downloads/).
It is recommended to use Ruby+Devkit 2.5.X (x64) version.

Run `bundle install` before starting development.

Run `npm install` before starting development.

### Development

`npm run serve`

Will launch dev server on [localhost:4000](http://localhost:4000)

### Build

`npm run build`

Will populate `/public` folder with production ready assets required for deployment

## CI flow

Generate build artifacts

```
npm run
npm run lint
npm run build
```

If you are building for production, last command must be changes to `npm run build.prod`.

