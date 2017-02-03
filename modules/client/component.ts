const component = () => {
  const element = document.createElement('h1')
  element.innerHTML = 'Sandbox'
  element.onclick = () => {
    System.import('./lazy').then(({ hello }) => {
      element.textContent = hello
    })
  }
  return element
}

const treeshakingDemo = () => {
  return 'this should be out'
}

export {
  component,
  treeshakingDemo
}
