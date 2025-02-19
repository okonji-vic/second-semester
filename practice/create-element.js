let body = document.querySelector('body')
let div = document.createElement('div')
div.textContent = 'Hello'
body.prepend(div)
function mk(type, props, children) {
  // create element of type `type`
  const el = document.createElement(type)
  // set properties of the element if `props` is provided, e.g. className, style, etc.
  if (props) Object.assign(el, props)
  // append children to the element if `children` is provided
  if (children) el.prepend(...children)
  return el
}

mk('div', { className: 'text-lg' }, [
  mk('span', { className: 'text-orange' }, ['Hello']),
])
console.log(mk('div', { className: 'text-lg' }, [
  mk('span', { className: 'text-orange' }, ['Hello']),
]))
body.appendChild(mk('div', { className: 'text-lg' }, [
  mk('span', { className: 'text-orange' }, ['Hello to you']),
]))
console.log(body)
// <div class="text-lg"><span class="text-orange">Hello</span></div>

