import explorersData from '../data/explorers.json';
import { version, description } from '../../package.json';

export default function scan(chain) {
  const explorers = explorersData.explorers;

  // find the explorer for the specific chain
  const data = explorers.find((explorer) => explorer.name === chain || explorer.alias === chain);

  // if the explorer is not found, throw an error
  if (!data) {
    throw new Error('Explorer data not found for the specified chain.');
  }

  return data;
}

export function dbVersion() {
  return explorersData.version;
}

export function projectVersion() {
  return version;
}

export function projectDescription() {
  return description;
}