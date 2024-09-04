const Callable = require('./Callable');
const createSet = require('./createClass/createSet');
const createChainable = require('./createClass/createChainable');
const createValue = require('./createClass/createValue');

module.exports = createValue(createSet(createChainable(Callable)));
