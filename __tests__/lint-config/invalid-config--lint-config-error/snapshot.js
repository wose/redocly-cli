// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`E2E lint-config test with option: { dirName: 'invalid-config--lint-config-error', option: 'error' } 1`] = `

[1] .redocly.yaml:6:5 at #/lint/rules/context

Property \`context\` is not expected here.

4 | lint:
5 |   rules:
6 |     context: null
  |     ^^^^^^^
7 |

Error was generated by the configuration spec rule.


❌ Your config has 1 error.
No configurations were defined in extends -- using built in recommended configuration by default.
Warning! This default behavior is going to be deprecated soon.

validating ../__fixtures__/valid-openapi.yaml...
../__fixtures__/valid-openapi.yaml: validated in <test>ms

Woohoo! Your OpenAPI definition is valid. 🎉

[WARNING] Unused rules found in .redocly.yaml: context.
Check the spelling and verify the added plugin prefix.

`;
