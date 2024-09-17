import { useState } from "react"
export default function App() {
  return (
    <section>
      <h1>Inspiring Sculptures</h1>
      <Image />
      <Image />
      <Image />
    </section>
  )
}

function Image() {
  const [size, setSize] = useState(100)

  const increaseSize = () => {
    setSize(size + 10)
  }

  return (
    <div>
      <img
        onClick={increaseSize}
        src="https://i.imgur.com/ZF6s192.jpg"
        style={{ width: `${size}px` }}
      />
    </div>
  )
}
