import program from 'commander';
import {version} from '../package.json';
program
    .usage('<command> [options]')
    .on('-h', utils.help)
    .on('--help', utils.help)
    .version(version, '-V --version')
    .parse(process.argv)