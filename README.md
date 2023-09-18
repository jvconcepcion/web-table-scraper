[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description
This scraper is created using Nest JS [Nest](https://github.com/nestjs/nest) and is intended to use to scrape table dom within a website.

## Installation

```bash
$ npm install
```
## Building the app

```bash
# build
$ npm run build

# watch mdoe
$ npm run build:Watch
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## How to use

- This scraper accepts HTTP GET method and required to use query params to render data: /site?url=example.com&tableRow=.tableRow&rowData=td
  - url: site url you want to scrape
  - tableRow: table row class or element (e.g: .tableRowClass or .table > tbody > tr)
  - rowData: table header/data class or element (e.g: .th/.td or th/td)

## Stay in touch

- Author - Jonathan Concecpion
- Facebook - [Link](https://m.me/i.am.ye.xiu)
- Linkedin - [Link](https://linkedin.com/in/jvconcepcion)
- Instagram - [Link](https://instagram.com/darth.nathan)
- Twitter - [Link](https://twitter.com/DBAnathan)
