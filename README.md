## Formidable (with Build Step)

This example shows how to use Formidable with a build step.

### Prerequisites

- [Node.js](https://nodejs.org/en/)

### Getting Started

Copy the `.env.example` file to `.env` and fill in the values.

```bash
cp .env.example .env
```

Install the dependencies...

```bash
npm install
```

Set the application key.

```bash
node craftsman key:generate
```

Cache environment variables.

```bash
node craftsman config:cache
```

Run the `build` command to compile the assets.

```bash
npm run build
```

Run the `serve` command to start the server.

```bash
npm run serve
```

### How it works

The `build` command runs the `imba build` command to compile the assets. This command targets the `server/build.imba` file which exports the formidable `application` interface.

Once your application has been built, it is stored under the `.formidable` folder. This folder is ignored by git and should not be committed (unless you want to commit it).

The `serve` command runs the `node server` command which runs the `server/index.js` file. This file imports the `application` interface from the `.formidable` folder and starts the server.

> It is important to note that the `server` folder is not ignored by git. This is because it contains the `index.js` file which is used to start the server.
