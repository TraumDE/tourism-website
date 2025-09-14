import type { Config } from 'postcss-load-config'
import postcssPxtorem from 'postcss-pxtorem'

const config: Config = {
  plugins: [
    postcssPxtorem({
      propList: ['*'],
    }),
  ],
}

export default config
