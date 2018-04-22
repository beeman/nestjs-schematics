import { VirtualTree } from '@angular-devkit/schematics';
import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { expect } from 'chai';
import * as path from 'path';
import { ApplicationOptions } from '../../src/application/schema';

describe('Application Factory', () => {
  const runner: SchematicTestRunner = new SchematicTestRunner('.', path.join(process.cwd(), 'src/collection.json'));
  it('should manage name only', () => {
    const options: ApplicationOptions = {
      name: 'project'
    };
    const tree: UnitTestTree = runner.runSchematic('application', options, new VirtualTree());
    const files: string[] = tree.files;
    expect(files).to.be.deep.equal([
      '/project/.nestcli.json',
      '/project/.prettierrc',
      '/project/README.md',
      '/project/nodemon.json',
      '/project/package.json',
      '/project/src/app.controller.spec.ts',
      '/project/src/app.controller.ts',
      '/project/src/app.module.ts',
      '/project/src/main.ts',
      '/project/test/app.e2e-spec.ts',
      '/project/test/jest-e2e.json',
      '/project/tsconfig.json',
      '/project/tslint.json'
    ]);
  });
  it('should manage name to dasherize', () => {
    const options: ApplicationOptions = {
      name: 'awesomeProject'
    };
    const tree: UnitTestTree = runner.runSchematic('application', options, new VirtualTree());
    const files: string[] = tree.files;
    expect(files).to.be.deep.equal([
      '/awesome-project/.nestcli.json',
      '/awesome-project/.prettierrc',
      '/awesome-project/README.md',
      '/awesome-project/nodemon.json',
      '/awesome-project/package.json',
      '/awesome-project/src/app.controller.spec.ts',
      '/awesome-project/src/app.controller.ts',
      '/awesome-project/src/app.module.ts',
      '/awesome-project/src/main.ts',
      '/awesome-project/test/app.e2e-spec.ts',
      '/awesome-project/test/jest-e2e.json',
      '/awesome-project/tsconfig.json',
      '/awesome-project/tslint.json'
    ]);
  });
  it('should manage js language', () => {
    const options: ApplicationOptions = {
      name: 'project',
      language: 'js'
    };
    const tree: UnitTestTree = runner.runSchematic('application', options, new VirtualTree());
    const files: string[] = tree.files;
    expect(files).to.be.deep.equal([
      '/project/.babelrc',
      '/project/.gitignore',
      '/project/.nestcli.json',
      '/project/.prettierrc',
      '/project/README.md',
      '/project/index.js',
      '/project/jsconfig.json',
      '/project/nodemon.json',
      '/project/package-lock.json',
      '/project/package.json',
      '/project/src/app.controller.js',
      '/project/src/app.controller.spec.js',
      '/project/src/app.module.js',
      '/project/src/main.js',
      '/project/test/app.e2e-spec.js',
      '/project/test/jest-e2e.json',
    ]);
  });
});
