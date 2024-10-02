export default function iterateThroughObject(reportWithIterator) {
  // Convert the iterator to an array and join the names with '|'
  return [...reportWithIterator].join(' | ');
}
