"format cjs";

var engine = require('./engine');
var conventionalCommitTypes = require('./types');

module.exports = engine({
  types: conventionalCommitTypes.types,
  defaultType: process.env.CZ_TYPE,
  defaultScope: process.env.CZ_SCOPE,
  defaultSubject: process.env.CZ_SUBJECT,
  defaultBody: process.env.CZ_BODY,
  defaultIssues: process.env.CZ_ISSUES
});
