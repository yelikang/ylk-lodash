import baseCreate from './_baseCreate.js';
import baseLodash from './_baseLodash.js';

/**
 * The base constructor for creating `lodash` wrapper objects.
 *
 * @private
 * @param {*} value The value to wrap.
 * @param {boolean} [chainAll] Enable explicit method chain sequences.
 */
function LodashWrapper(value, chainAll) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__chain__ = !!chainAll;
  this.__index__ = 0;
  this.__values__ = undefined;
}
// lodashWrapper构造函数原型链对象prototype指向lodash，lodashWrapper实例对象就能调用lodash.filter等方法\
//（lodashWrapper类 继承lodash，new LodashWrapper() instanceof lodash为true）
// 也就是LodashWrapper.prototype = lodash
LodashWrapper.prototype = baseCreate(baseLodash.prototype);
LodashWrapper.prototype.constructor = LodashWrapper;

export default LodashWrapper;
