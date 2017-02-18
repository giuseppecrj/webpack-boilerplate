import * as expect from 'expect'

class Employee {
  constructor (name, salary) {
    this.name = name
    this.salary = salary
  }
}

class Department {
  constructor (employees) {
    this.employees = employees
  }

  worksHere (employee) {
    return this.employees.indexOf(employee) > -1
  }
}

let and = (predicates) => {
  return (e) => predicates.every((p) => p(e))
}

export let average = (nums) => {
  const total = nums.reduce((a, b) => a + b, 0)
  return (nums.length === 0) ? 0 : total / nums.length
}

export let employeeSalaries = (employees, conditions) => {
  const filtered = employees.filter(and(conditions))
  return filtered.map((e) => e.salary)
}

export let averageSalary = (employees, conditions) => {
  return average(employeeSalaries(employees, conditions))
}

const empls = [
  new Employee('Jim', 100),
  new Employee('John', 200),
  new Employee('Liz', 120),
  new Employee('Penny', 30)
]

const sales = new Department([empls[0], empls[1]])

expect(
  averageSalary(empls, [(e) => e.salary > 50, (e) => sales.worksHere(e)])
).toEqual(150)

console.log('All tests passed!')
