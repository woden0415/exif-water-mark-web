import { useEffect, useRef, useState } from 'react'
import { baGua, baGuaIndex, baMen, jiuXing, wuXing } from '../service'

type BoxItemData = { index: number }

export default function BoxItem({ index }: BoxItemData) {
  const [height, setHeight] = useState(0)
  const refBox = useRef<HTMLDivElement>(null)
  useEffect(() => {
    setHeight((refBox.current as HTMLDivElement).offsetWidth)
  }, [])
  return (
    <div
      ref={refBox}
      className="relative overflow-hidden"
      style={{ height: height }}>
      <div className="absolute left-2/4 top-2/4 -ml-3 -mt-3 w-6 rounded-half border border-gray-950 text-center leading-relaxed">
        {baGuaIndex[index]}
      </div>
      {baGua[index] ? (
        <div
          className="absolute -bottom-px -right-px 
        w-6 text-center leading-relaxed text-blue-700">
          {baGua[index]}
        </div>
      ) : null}
      {/* <div >{ tianGan[index] }</div>
      <div >{ diZhi[index] }</div> */}
      {wuXing[index] ? (
        <div
          className="absolute -right-px -top-px 
        w-6 border border-gray-950 bg-yellow-500 text-center leading-relaxed">
          {wuXing[index]}
        </div>
      ) : null}

      {baMen[index] ? (
        <div
          className="absolute -bottom-px -left-px 
        w-6 border border-gray-950 text-center leading-relaxed text-red-600">
          {baMen[index]}
        </div>
      ) : null}
      {jiuXing[index].name ? (
        <div
          className="absolute -left-px -top-px 
        w-12 border border-gray-950 text-center leading-relaxed text-green-600">
          {jiuXing[index].name}
        </div>
      ) : null}
    </div>
  )
}
