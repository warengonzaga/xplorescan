import open from 'open';
import address from '../commands/address.js';

/**
 * @param {string} command
 * @param {string} chain
 * @param {string} input
 * @param {object} flags
 * @description Handle the command and call the function for the specific command.
 */
const handleCommand = (command, chain, input, flags) => {
  // if the command is address, call the address function and get the URL to open.
  if (command === 'address') {
    const url = address(chain, input, flags);
    // console the URL to the user
    console.log(`Opening ${url}...`);
    // open the URL in the default browser if success then console log or throw an error if failed
    open(url).then(() => {
      console.log(`Opened ${url} in your default browser.`);
    }).catch((err) => {
      console.error(`Failed to open ${url} in your default browser. Error: ${err}`);
    });
  } else {
    console.error('[xplorescan] Command not found. Please use "xplorescan --help" to see the available commands.');
  }
}

export default handleCommand;