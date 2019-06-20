export const isInJson = function (target, source) {
  for (const x in source)
    if (target == source[x])
      return true;
  return false;
}
