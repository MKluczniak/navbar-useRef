//component not in use

import React from "react"
import { links, social } from "./data"

const Sidebar = () => {
  return (
    <>
      <h4>Sidebar</h4>
      <div className="links-container show-container">
        <ul className="links">
          {links.map((link) => {
            const { id, url, text } = link
            return (
              <li id={id}>
                <a href={url}> {text}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Sidebar

// const Sidebar = () => {
//   return (
//     <div className="links-container show-container">
//       <ul className="links">
//         <li>
//           <a href="#">home</a>
//         </li>
//         <li>
//           <a href="#">about</a>
//         </li>
//         <li>
//           <a href="#">contact</a>
//         </li>
//         <li>
//           <a href="#">products</a>
//         </li>
//       </ul>
//     </div>
//   )
// }

// export default Sidebar
