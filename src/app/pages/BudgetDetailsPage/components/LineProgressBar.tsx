import React, { useCallback, useEffect, useRef } from 'react'
import { Line } from 'progressbar.js'
import { useTheme } from '@chakra-ui/react'

type LineProgressBarProps = {
  style: React.CSSProperties
  value: number
  color: string
}

/**
 * @param {LineProgressBarProps} props Get props value
 * @returns Component line progress bar
 */
export function LineProgressBar(props: LineProgressBarProps) {
  const { value } = props
  const theme = useTheme()
  const container = useRef<HTMLDivElement>(null)
  const progressBarRef = useRef<Line>(null)

  /**
   * Handle color line progress bar when compare value with 0.6
   */
  const getColorFromValue = useCallback(
    (value: number) => {
      if (value < 0.6) {
        return theme.colors.blue['50']
      }
      if (value >= 0.6) {
        return theme.colors.Alphas['75']
      }
    },
    [theme.colors.blue, theme.colors.Alphas],
  )

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
      text: {
        style: {
          color: theme.colors.white,
          position: 'absolute',
          left: theme.space['34'],
          top: theme.space['82'],
          padding: 0,
          margin: 0,
          fontSize: theme.fontSizes['14'],
          fontWeight: theme.fontWeights.bold,
          transform: null,
        },
        autoStyleContainer: false,
      },
      from: { color: theme.colors.blue['50'] },
      to: { color: theme.colors.Alphas['75'] },

      /**
       * Set value text and set color from value by bar
       */
      step: (
        state: string,
        bar: {
          setText: (arg0: string) => void
          value: () => number
          path: { setAttribute: (arg0: string, arg1: string) => void }
        },
      ) => {
        bar.setText('$' + Math.round(Number(+bar.value() * 900)))
        bar.path.setAttribute('stroke', getColorFromValue(bar.value()))
      },
      TotalText: {
        style: {
          color: theme.colors.white,
          position: 'absolute',
          left: theme.space['34'],
          top: theme.space['84'],
          padding: 0,
          margin: 0,
          fontSize: theme.fontSizes['14'],
          fontWeight: theme.fontWeights.bold,
          transform: null,
        },
        autoStyleContainer: false,
      },
    })
    return () => {
      progressBarRef.current.destroy()
    }
  }, [
    getColorFromValue,
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
