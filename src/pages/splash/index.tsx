import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { NextPageWithLayout } from '../_app'

const Splash: NextPageWithLayout = () => {
  const [countdown, setCountdown] = useState<number>(3)
  const router = useRouter()

  const timer = useRef<any>()
  useEffect(() => {
    timer.current = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1)
      } else {
        router.replace('/marker-index/')
        clearInterval(timer.current)
      }
    }, 1000)
    return () => {
      clearInterval(timer.current)
    }
  }, [countdown, router])
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col items-center">
        <h1>闪屏页面</h1>
        <div>倒计时{countdown}...，跳转到首页</div>
      </div>
    </div>
  )
}

export default Splash
