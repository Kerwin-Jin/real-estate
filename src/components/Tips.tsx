import React from 'react'



interface ITipsProps {
  text: string
}
export default function Tips(props: ITipsProps) {


  const { text } = props
  return (

    <div className="rounded border bg-red-300 text-white p-4">{text || ''}</div>
  )
}
