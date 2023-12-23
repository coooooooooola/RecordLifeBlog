import modeOptions from './modeOptions'

function render(mode) {
  const rootElement = document.querySelector(':root')
  const options = modeOptions[mode]
  const opposite = mode === 'dark' ? 'light' : 'dark'

  for (const k in options) {
    rootElement.style.setProperty(k, options[k])
  }

  rootElement.classList.remove(opposite)
  rootElement.classList.add(mode)
}

/**
 * Sets a color scheme for the website.
 * If browser supports "prefers-color-scheme", 'auto' mode will respect the setting for light or dark mode
 * otherwise it will set a dark theme during night time
 */
export default function applyMode() {
  // export default function applyMode(mode) {
  render('dark')
}
