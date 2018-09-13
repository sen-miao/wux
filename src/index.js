import path from 'path'

import chalk from 'chalk'

import Command from './command'

export default class Wux extends Command {
  constructor(rawArgv) {
    super(rawArgv)

    this.usage = `用法: \n  ${chalk.green('$0 <command>')} [options]`
    this.load(path.join(__dirname, 'commands'))
  }

  get description() {
    return '工程化链路'
  }
}
