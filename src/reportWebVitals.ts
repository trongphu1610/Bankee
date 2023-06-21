import { ReportHandler } from 'web-vitals'

/**
 * build reportWebVitals
 */
const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry) {
    // eslint-disable-next-line flowtype/require-parameter-type
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry)
      getFID(onPerfEntry)
      getFCP(onPerfEntry)
      getLCP(onPerfEntry)
      getTTFB(onPerfEntry)
    })
  }
}

export default reportWebVitals
