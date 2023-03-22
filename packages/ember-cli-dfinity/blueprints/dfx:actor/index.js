'use strict';

const fs = require('fs-extra');
const path = require('path');

module.exports = {
  description:
    'Define an actor deployed to a canister on the Internet Computer',

  availableOptions: [
    {
      name: 'declaration',
      type: String,
    },
  ],

  locals(options) {
    return {
      declaration: options.declaration || options.entity.name,
      hasDeclaration: options.declaration !== undefined,
    };
  },

  afterInstall(options) {
    if (options.declaration !== undefined) {
      // There is a local declaration. We are going to import the declaration into our project
      // by linking to it. This will help keep the declaration consistent as it changes.

      const declaration = options.declaration || options.entity.name;
      const candidFileName = `${declaration}.did.js`;
      const target = path.resolve(
        options.target,
        '../declarations',
        declaration,
        candidFileName
      );
      const link = path.resolve(
        options.target,
        './app/declarations',
        candidFileName
      );

      fs.ensureSymlinkSync(target, link, 'file');
    }
  },
};
