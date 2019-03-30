/**
 * @fileoverview object-type-name-required
 * @author object-type-name-required
 */
'use strict'

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'object-type-name-required',
      category: 'Fill me in',
      recommended: false,
    },
    fixable: 'code', // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ],
  },

  create: function(context) {
    return {
      CallExpression(node) {
        if (node.callee.name === 'objectType') {
          if (!node.arguments[0]) {
            return
          }

          const nameProperty = node.arguments[0].properties.find(p => p.key.name === 'name')
          if (!nameProperty) {
            const varName = node.parent.id.name

            context.report({
              node,
              message: `name property is required for nexus objectType`,

              fix(fixer) {
                return [
                  fixer.insertTextAfterRange(
                    [node.arguments[0].start, node.arguments[0].start + 1],
                    `\n  name: '${varName}',`,
                  ),
                ]
              },
            })
          }
        }
      },
    }
  },
}
