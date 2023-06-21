import React, { useEffect, useRef } from 'react'
import { Line } from 'progressbar.js'
import { useTheme } from '@chakra-ui/react'

type LineProgressBarProps = {
  style: React.CSSProperties
  value: number
}

/**
 * @returns Component line progress bar
 * @param {LineProgressBarProps} props Get props value
 */
export function LineProgressBar(props: LineProgressBarProps) {
  const { value } = props
  const theme = useTheme()
  const container = useRef<HTMLDivElement>(null)
  const progressBarRef = useRef<Line>(null)

  useEffect(() => {
    progressBarRef.current = new Line(container.current, {
      strokeWidth: 6,
      easing: 'easeInOut',
      duration: 1400,
      color: theme.colors.blue['50'],
      trailColor: theme.colors.Alphas['80'],
      trailWidth: 6,
      svgStyle: {
        width: theme.sizes.full,
        height: theme.sizes.full,
        borderRadius: theme.radii['30'],
        borderRightRadius: theme.radii['30'],
      },
    })
    return () => {
      progressBarRef.current.destroy()
    }
  }, [
    theme.colors.Alphas,
    theme.colors.blue,
    theme.colors.white,
    theme.fontSizes,
    theme.fontWeights.bold,
    theme.radii,
    theme.sizes.full,
    theme.space,
  ])

  useEffect(() => {
    if (!progressBarRef.current) {
      return
    }
    progressBarRef.current.animate(value)
  }, [value])

  return <div ref={container} style={props.style} />
}
