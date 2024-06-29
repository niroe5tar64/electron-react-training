import { css } from '@styled-system/css'
import { useState } from 'react'

function Versions(): JSX.Element {
  const electronProcessVersionObj = window.electron?.process.versions || {
    electron: 'ersion is unkown',
    chrome: 'ersion is unkown',
    node: 'ersion is unkown'
  }
  const [versions] = useState(electronProcessVersionObj)

  return (
    <ul className="versions">
      <li className="electron-version">Electron v{versions.electron}</li>
      <li className="chrome-version">Chromium v{versions.chrome}</li>
      <li className="node-version">Node v{versions.node}</li>
      <li className={testClass}>Panda csss test</li>
    </ul>
  )
}

export default Versions

const testClass = css`
  font-size: 36px;
  color: #fff;
`
