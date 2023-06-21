import React, { useEffect, useRef } from 'react'
import { SemiCircle } from 'progressbar.js'
import { useTheme } from '@chakra-ui/react'

type CircleProgressBarProps = { style: React.CSSProperties; value: number }

/**
 * @param {CircleProgressBarProps} props Get props value
 * @returns Component circle progress bar
 */
export function CircleProgressBar(props: CircleProgressBarProps) {
  const theme = useTheme()
  const { value } = props
  const container = useRef<HTMLDivElement>(null)
  const progressBarRef = useRef<SemiCircle>(null)

  useEffect(() => {
    progressBarRef.current = new SemiCircle(container.current, {
      strokeWidth: 6,
      easing: 'easeInOut',
      duration: 1400,
      color: theme.colors.blue['70'],
      trailColor: theme.colors.Alphas['90'],
      trailWidth: 6,
      svgStyle: null,
    })
    return () => {
      progressBarRef.current.destroy()
    }
  }, [theme.colors.Alphas, theme.colors.blue])

  useEffect(() => {
    if (!progressBarRef.current) {
      return
    }
    progressBarRef.current.animate(value)
  }, [value])

  return <div ref={container} style={props.style} />
}
