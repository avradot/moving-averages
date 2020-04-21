// Exponential moving average used in RSI

import dma from './dma'

export default (data, size) => dma(data, 1 / size)
