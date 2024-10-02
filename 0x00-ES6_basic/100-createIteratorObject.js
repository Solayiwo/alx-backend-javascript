export default function createIteratorObject(report) {
  // Gather all employees from all departments into a single array
  const allEmployees = Object.values(report.allEmployees).flat();

  // Return an iterator for this array
  return allEmployees[Symbol.iterator]();
}
