#!/usr/bin/env node
'use strict';
const { Command } = require('commander');
const chalk = require('chalk');
const ora = require('ora');
const pkg = require('./package.json');

const program = new Command();

program
  .name('minha-cli')
  .description('Ferramenta de linha de comando em Node.js')
  .version(pkg.version);

// Comando: saudar
program
  .command('ola <nome>')
  .description('Sauda alguém pelo nome')
  .option('-m, --maiusculo', 'Exibe em maiúsculas')
  .action((nome, opts) => {
    const msg = opts.maiusculo ? nome.toUpperCase() : nome;
    console.log(chalk.green(`Olá, ${msg}! 👋`));
  });

// Comando: listar
program
  .command('listar')
  .description('Lista itens de exemplo')
  .option('-j, --json', 'Saída em JSON')
  .action(async (opts) => {
    const spinner = ora('Carregando...').start();
    await new Promise(r => setTimeout(r, 800));
    spinner.succeed('Feito!');
    const itens = [
      { id: 1, nome: 'Item A', status: 'ativo' },
      { id: 2, nome: 'Item B', status: 'inativo' },
      { id: 3, nome: 'Item C', status: 'ativo' },
    ];
    if (opts.json) {
      console.log(JSON.stringify(itens, null, 2));
    } else {
      itens.forEach(i =>
        console.log(`  ${chalk.cyan(i.id)} ${chalk.bold(i.nome)} — ${i.status === 'ativo' ? chalk.green(i.status) : chalk.red(i.status)}`)
      );
    }
  });

// Comando: info
program
  .command('info')
  .description('Mostra informações do sistema')
  .action(() => {
    console.log(chalk.bold('\n📋 Informações do Sistema'));
    console.log(`  Node.js : ${chalk.cyan(process.version)}`);
    console.log(`  Plataforma: ${chalk.cyan(process.platform)}`);
    console.log(`  Diretório : ${chalk.cyan(process.cwd())}\n`);
  });

program.parse(process.argv);
