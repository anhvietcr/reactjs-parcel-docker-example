# ReactJS + Parcel + Docker
`Include Hot-reloading`

A template ReactJS app with [Parcel Bundler](https://parceljs.org)
Running on Docker.

**What's inside?**

* `parcel-bundler`
* `react`
* `react-dom`
* `babel-core`
* `babel-preset-react`
* `babel-preset-env`
* `node-scss`

## Getting started

Clone and install deps

```
git clone git@github.com:anhvietcr/reactjs-parcel-docker-example.git
cd reactjs-parcel-docker-example
docker-compose up -d --build
```

Then open `http://localhost:1234` and edit `index.js` and press save. Parcel will automagically hot reload you files whenever you make changes.