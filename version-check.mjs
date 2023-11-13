import semver from 'semver'; 
import { exit } from 'node:process'; 
import chalk from 'chalk'; 
import {readFileSync} from "fs"; 
const packageJson = JSON.parse(readFileSync('./package.json', 'utf8')); 
const nodeVersionRequired = packageJson.nodeVersion.lower 
const nodeCurrent = process.versions.node; 
if (semver.gt(nodeCurrent, nodeVersionRequired)) { 
  console.log(`当前node版本为${chalk.green(nodeCurrent)}，符合版本要求${chalk.green(nodeVersionRequired)}`); 
} else { 
  console.error(`当前node版本为${chalk.red(nodeCurrent)}, 不满足最低版本${chalk.red(nodeVersionRequired)}要求，请升级node版本`); 
  exit(1); 
} 