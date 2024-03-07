#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './app.js';
import handleCommand from './utils/handleCommand.js';

const cli = meow(
	`
		Usage
			$ xplorescan <command> <chain> <input> <flags>

		Commands
			address, a - To scan a wallet address.
			contract, c - To scan a contract address.
			transaction, tx - To scan a transaction hash.

		Chain
			eth, ethereum - Ethereum
			matic, polygon - Polygon
			bnb, bsc - Binance Smart Chain
			etc...

		Flags
			No flags for now...

		Examples
			$ xplorescan address eth 0x1234567890abcdef1234567890abcdef12345678

		Contribute
			https://github.com/warengonzaga/xplorescan
	`,
	{
		importMeta: import.meta,
		flags: {} // no flags for now
	},
);

// capture the command, chain, input and flags
const command = cli.input[0];
const chain = cli.input[1];
const input = cli.input[2];
const flags = cli.flags;

render(<App/>);

// handle the command
if (command) {
	handleCommand(command, chain, input, flags);
}
