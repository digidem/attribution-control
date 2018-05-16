module.exports = Control
function Control () {
  this._container = null
}

Control.prototype.onAdd = function (map) {
  var el = document.createElement('div')
  el.className = 'mapboxgl-ctrl mapboxgl-ctrl-attrib'
  el.innerHTML = 'Map design by <a href="http://digital-democracy.org">Digital Democracy</a>'
  this._container = el
  return el
}

Control.prototype.onRemove = function () {
  this._container.parentNode.removeElement(el)
}
