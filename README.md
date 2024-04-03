# XploreScan 🛰️ [![author/maintainer](https://img.shields.io/badge/by-Waren%20Gonzaga-016eea.svg?logo=github&labelColor=181717&longCache=true&style=flat-square)](https://warengonzaga.com) [![nominate](https://img.shields.io/badge/nominate-%20@warengonzaga%20as%20GitHub%20Star-yellow.svg?logo=github&labelColor=181717&longCache=true&style=flat-square)](https://stars.github.com/nominate)

[![made in](https://img.shields.io/badge/made%20in-Web3%20Philippines-7b3fe4.svg?logo=github&longCache=true&labelColor=181717&style=flat-square)](https://github.com/web3philippines) [![sponsors](https://img.shields.io/badge/sponsor-%E2%9D%A4-%23db61a2.svg?&logo=github&logoColor=white&labelColor=181717&style=flat-square)](https://github.com/sponsors/warengonzaga) [![release](https://img.shields.io/github/release/warengonzaga/xplorescan.svg?logo=github&labelColor=181717&color=green&style=flat-square)](https://github.com/warengonzaga/xplorescan/releases) [![star](https://img.shields.io/github/stars/warengonzaga/xplorescan.svg?&logo=github&labelColor=181717&color=yellow&style=flat-square)](https://github.com/warengonzaga/xplorescan/stargazers) [![license](https://img.shields.io/github/license/warengonzaga/xplorescan.svg?&logo=github&labelColor=181717&style=flat-square)](https://github.com/warengonzaga/xplorescan/blob/main/license) [![NPM Installs](https://img.shields.io/npm/dt/xplorescan?color=CB3837&logo=npm&label=installs&labelColor=181717&style=flat-square)](https://npmjs.com/package/xplorescan)

[![banner](https://raw.githubusercontent.com/warengonzaga/xplorescan/main/.github/repo_banner.jpg)](https://github.com/warengonzaga/xplorescan)

An all-in-one command-line tool for blockchain explorers, simplifying searches for addresses, transaction hashes, and more without the need to remember multiple explorer URLs for different chains. 🛰️🌐💻

Have suggestions in mind? [Let me know!](https://github.com/warengonzaga/xplorescan/issues)

## 😎 Demo

Here's the demo how quickly you can explore a wallet address on [Base](https://base.org) using `xplorescan`.

[![demo](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmlyenV0dWpyOHJ5bDIxb2E2ZDB3aWI2YjIxNWEwM3RoN2Q4YXc1OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/v73LagsmyafU09TEiV/giphy.gif)](https://github.com/warengonzaga/xplorescan)

## 🚀 Quick Start

Explore wallet address on eth by running the following command:

```bash
npx xplorescan address eth 0x0000000000000000000000000000000000000000
```

If you don't want to use `npx`, you can install it globally using `npm`:

```bash
npm i -g xplorescan
```

## ❣️ Inspiration

I believe in the saying "necessity is the mother of invention". I created this tool because I need a simple and fast way to explore blockchain data without the need to remember multiple explorer URLs for different chains. I work at [@thirdweb](https://thirdweb.com) and we are building a decentralized web platform that supports multiple chains (700+ EVMs). This tool will help me and my team to simplify our workflow and make it easier to explore blockchain data.

## ⚡ Features

- 🚀 **Fast and Easy**: No need to remember multiple explorer URLs for different chains.
- 🌐 **Multi-Chain Support**: Supports multiple chains like Ethereum, Polygon, and [more](https://github.com/warengonzaga/xplorescan/blob/main/source/data/explorers.json).
- 📦 **All-in-One Tool**: Simplifies searches for addresses, transaction hashes, and more.

## 🕹️ Usage

```bash
npx xplorescan <command> <chain> <input>
```

### 🏠 Address Command

To explore a wallet address, use the following command:

```bash
npx xplorescan address <chain> <wallet address>
```

### 📜 Contract Command

To explore a smart contract, use the following command:
  
```bash
npx xplorescan contract <chain> <contract address>
```

### 📄 Transaction Command

To explore a transaction, use the following command:

```bash
npx xplorescan transaction <chain> <transaction hash>
```

_More features coming soon..._

- [x] Transaction Command
- [ ] Block Command
- [ ] ENS Command
- [ ] Web App (GUI) 👀

## 💻 Development

To run the project locally, you need to have [Node.js](https://nodejs.org) installed on your machine. Then, you can clone the repository and install the dependencies:

```bash
git clone
cd xplorescan
yarn install
```

To run the project, you can use the following command:

```bash
yarn dev
```

To build the project, you can use the following command:

```bash
yarn build
```

To setup the CLI on your local machine, you can use the following command:

```bash
npm install -g .
```

If you are in a Linux environment such as WSL on Windows 11, you can use the following command to setup the project:

```bash
yarn setup:ubuntu
```

You can also reset the setup using the following command:

```bash
yarn reset:ubuntu
```

## ⚙️ Project Activity

![project activity](https://repobeats.axiom.co/api/embed/552f3ea12e0f4afe85dac871ae8c57c554608f9a.svg "Repobeats analytics image")

## 🎯 Contributing

Contributions are welcome, create a pull request to this repo and I will review your code. Please consider to submit your pull request to the `dev` branch. Thank you!

Read the project's [contributing guide](./contributing.md) for more info.

## 🐛 Issues

Please report any issues and bugs by [creating a new issue here](https://github.com/warengonzaga/xplorescan/issues/new/choose), also make sure you're reporting an issue that doesn't exist. Any help to improve the project would be appreciated. Thanks! 🙏✨

## 🙏 Sponsor and Support

> Love what I do? Send me some [love](https://github.com/sponsors/warengonzaga) or [coffee](https://buymeacoff.ee/warengonzaga)!? 💖☕
>
> Can't send love or coffees? 😥 Nominate me for a **[GitHub Star](https://stars.github.com/nominate)** instead!
> Your support will help me to continue working on open-source projects like this. 🙏😇

## 📋 Code of Conduct

Read the project's [code of conduct](./code_of_conduct.md).

## 📃 License

This project is licensed under [GNU General Public License v3.0](https://opensource.org/licenses/GPL-3.0).

## 📝 Author

This project is created by **[Waren Gonzaga](https://github.com/warengonzaga)**, with the help of awesome [contributors](https://github.com/warengonzaga/xplorescan/graphs/contributors).

[![contributors](https://contrib.rocks/image?repo=warengonzaga/xplorescan)](https://github.com/warengonzaga/xplorescan/graphs/contributors)

---

💻 with ❤️ by [Waren Gonzaga](https://warengonzaga.com) and [Him](https://www.youtube.com/watch?v=HHrxS4diLew&t=44s) 🙏
