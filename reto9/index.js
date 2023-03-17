function groupBy(collection, it) {
  return collection.reduce((result, collect) => {
    const res = typeof it == 'function' ? it(collect) : collect[it]
    result[res] = [...(result[res] || []), collect]
    return result;
  }, {});
}

module.exports = groupBy
