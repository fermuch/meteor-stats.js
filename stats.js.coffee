Constellation = Package['constellation:console'].API

Constellation.addTab
  name: 'Stats.js'
  mainContentTemplate: 'Constellation_statsjs_main'

Template['Constellation_statsjs_main'].onRendered ->
  fps = new Stats()
  ms  = new Stats()
  mem = new Stats()

  fps.setMode(0)
  ms.setMode(1)
  mem.setMode(2)

  fps.domElement.style.float = 'left'
  ms.domElement.style.float = 'left'
  mem.domElement.style.float = 'left'

  $('#Constellation_statsjs_fps').append(fps.domElement)
  $('#Constellation_statsjs_ms').append(ms.domElement)
  $('#Constellation_statsjs_mem').append(mem.domElement)

  update = ->
    fps.begin()
    ms.begin()
    mem.begin()

    fps.end()
    ms.end()
    mem.end()

    requestAnimationFrame(update)

  requestAnimationFrame(update)

