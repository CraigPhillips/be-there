const prefix = 'be-there.js check failed:';

export default (toBeThere) => {
  if (toBeThere === null || toBeThere === undefined) {
    throw new Error(`${prefix} check target is missing'`);
  }

  const trubs = Object.keys(toBeThere).reduce((soFar, key) => {
    if (toBeThere[key] === null) soFar.nulled.push(key);
    if (toBeThere[key] === undefined) soFar.undef.push(key);
    return soFar;
  }, { nulled: [], undef: [] });

  let err = '';
  if (trubs.nulled.length) err = `nulls (${trubs.nulled.join(', ')}) `;
  if (trubs.undef.length) {
    const undefPrefix = err.length ? 'and ' : '';
    err += `${undefPrefix}undefined values (${trubs.undef.join(', ')})`;
  }

  if (err.length) throw new Error(`${prefix} ${err} found`);
};
