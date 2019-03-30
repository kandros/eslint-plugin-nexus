/**
 * @fileoverview object-type-name-required
 * @author object-type-name-required
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/object-type-name-required'),
  RuleTester = require('eslint').RuleTester

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6,
  },
})

var validSnippet = `
const User = objectType({
    name: 'User',
    definition(t) {
      t.string('name', {
        resolve: () => {
          return 'gino'
        },
      })
    },
  })
`

ruleTester.run('object-type-name-required', rule, {
  valid: [
    {
      code: validSnippet,
    },
  ],

  invalid: [
    {
      code: `
            const User = objectType({
                definition(t) {
                  t.string('name', {
                    resolve: () => {
                      return 'gino'
                    },
                  })
                },
              })
            `,
      errors: [
        {
          message: 'name property is required for nexus objectType',
        },
      ],
    },
  ],
})
