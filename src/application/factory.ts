import { strings } from '@angular-devkit/core';
import { apply, mergeWith, move, Rule, Source, template, url } from '@angular-devkit/schematics';
import { ApplicationOptions } from './schema';
import { join } from 'path';

export function main(options: ApplicationOptions): Rule {
  options = transform(options);
  return mergeWith(generate(options));
}

function transform(options: ApplicationOptions): ApplicationOptions {
  const target: ApplicationOptions = Object.assign({}, options);
  target.author = target.author !== undefined ? target.author : '';
  target.description = target.description !== undefined ? target.description : '';
  target.name = strings.dasherize(target.name);
  target.language = target.language !== undefined ? target.language : 'ts';
  target.version = target.version !== undefined ? target.version : '1.0.0';
  return target;
}

function generate(options: ApplicationOptions): Source {
  return apply(
    url(join('files', options.language)),
    [
      template({
        ...strings,
        ...options
      }),
      move(options.name)
    ]
  );
}
