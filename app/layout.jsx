import React from 'react'
import "@/assets/styles/globals.css"
export const metadata = {
  title: 'UniversalEstateFinder',
  description: 'UniversalEstateFinder your property',
  keywords:"rental house"
}
const MainLayout = ({children}) => {
  return (
    <html lang='en'>
      <body>
        <div>{children}</div>
      </body>
    </html>
  )
}

export default MainLayout
