import {
  Block,
  BlockTitle,
  Button,
  Navbar,
  NavbarBackLink,
  Page,
} from 'konsta/react'
import { ChangeEvent, useRef, useState } from 'react'
import { getImageInfo } from '../../utils'

export default function WaterMarker() {
  const [base64, setBase64] = useState<string>()
  const [exifInfo, setExifInfo] = useState<unknown>()

  const pictureChangeHandle = async (event: ChangeEvent<HTMLInputElement>) => {
    const _selectFile = event.currentTarget.files?.[0]
    if (!_selectFile) return
    const reader1 = new FileReader()
    reader1.onload = (e: ProgressEvent<FileReader>) => {
      const imageArrayBuffer = e!.target!.result
      console.log('imageArrayBuffer :>> ', imageArrayBuffer)
      const _arrayBuffer = getImageInfo(imageArrayBuffer as ArrayBuffer)
      console.log('_arrayBuffer :>> ', _arrayBuffer)
      setExifInfo(_arrayBuffer!)
    }
    reader1.readAsArrayBuffer(_selectFile!)

    const reader2 = new FileReader()
    reader2.onload = (e: ProgressEvent<FileReader>) => {
      setBase64(e!.target!.result as string)
    }
    reader2.readAsDataURL(_selectFile)
  }
  const refInputFile = useRef<HTMLInputElement>(null)

  const selectLocalFileHandle = () => refInputFile.current?.click()

  return (
    <Page>
      <Navbar
        title="添加EXIF水印"
        left={<NavbarBackLink text="Back" onClick={() => history.back()} />}
        right={
          <Button
            onClick={() => {
              alert('查看介绍')
            }}>
            介绍
          </Button>
        }
      />
      <BlockTitle>设置水印</BlockTitle>
      <Block>
        <input
          ref={refInputFile}
          className="hidden"
          type="file"
          onChange={pictureChangeHandle}
          accept="image/jpeg, image/jpg, image/png"
        />
        <div className="flex justify-center">
          <Button onClick={selectLocalFileHandle}> 选择本地图片</Button>
          {/* <Button onClick={addExifInfoHandle}>添加图片EXIF信息</Button> */}
        </div>
      </Block>
      <Block>{base64 ? <img src={base64} alt="导入的图片" /> : null}</Block>
      <Block>{exifInfo ? JSON.stringify(exifInfo) : '没有exif信息'}</Block>
    </Page>
  )
}
