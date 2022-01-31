import * as CSS from 'csstype'

declare module 'csstype' {
  interface Properties {
    // Custom typings to allow css variables as style props
    '--color'?: string
    '--opacity'?: number
  }
}
