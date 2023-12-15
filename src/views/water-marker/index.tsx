import {
  Block,
  BlockTitle,
  Button,
  Navbar,
  NavbarBackLink,
  Page,
} from 'konsta/react'
import { ChangeEvent, useRef, useState } from 'react'
import { getImageInfo } from '../../utils/index'

const typeExifInfo = {
  Make: '',
  Model: '',
  LensModel: '',
  FocalLengthDesc: '',
  FNumberDesc: '',
  ExposureTimeDesc: '',
  ISOSpeedRatings: '',
  DateTime: '',
}
type TypeExifInfo = Partial<typeof typeExifInfo>

export default function WaterMarker() {
  const [base64, setBase64] = useState<string>()
  const [exifInfo, setExifInfo] = useState<TypeExifInfo>({})

  const pictureChangeHandle = async (event: ChangeEvent<HTMLInputElement>) => {
    const _selectFile = event.currentTarget.files?.[0]
    if (!_selectFile) return
    const reader1 = new FileReader()
    reader1.onload = (e: ProgressEvent<FileReader>) => {
      const imageArrayBuffer = e!.target!.result
      const _exifInfo = getImageInfo(imageArrayBuffer as ArrayBuffer)
      setExifInfo({
        Make: _exifInfo.Make,
        Model: _exifInfo.Model,
        LensModel: _exifInfo.LensModel,
        FocalLengthDesc: _exifInfo.FocalLength.numerator + 'mm',
        FNumberDesc: `${
          _exifInfo.FNumber.numerator / _exifInfo.FNumber.denominator
        }`,
        ExposureTimeDesc: `${_exifInfo.ExposureTime.numerator}/${_exifInfo.ExposureTime.denominator}秒`,
        ISOSpeedRatings: `${_exifInfo.ISOSpeedRatings}`,
        DateTime: `${_exifInfo.DateTime}`,
      })
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
        </div>
      </Block>
      <Block>{base64 ? <img src={base64} alt="导入的图片" /> : null}</Block>
      <Block>
        {exifInfo ? (
          <>
            <ul>
              <li>
                器材： {exifInfo.Model} {exifInfo.LensModel}
              </li>
              li
              <li>
                曝光： 光圈:{exifInfo.FNumberDesc},快门:
                {exifInfo.ExposureTimeDesc}, ISO: {exifInfo.ISOSpeedRatings}
              </li>
              <li>焦段： {exifInfo.FocalLengthDesc}</li>
              <li>日期： {exifInfo.DateTime}</li>
            </ul>
          </>
        ) : (
          <>没有信息</>
        )}
      </Block>
    </Page>
  )
}
