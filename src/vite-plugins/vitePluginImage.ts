// 优化图片的vite插件
import sharp from 'sharp'
import { OutputOptions, OutputChunk } from 'rollup'
const opimizeImage = (buffer: Buffer) => {
  return new Promise<Buffer>(resolve => {
    sharp(buffer)
      .png({ quality: 10 })
      .toBuffer((err, buffer) => {
        if (err) return
        resolve(buffer)
      })
  })
}
export default function vitePluginImage() {
  return {
    name: 'vite-plugin-image',
    async generateBundle(_: OutputOptions, bundle: OutputChunk) {
      for (const [_, chunk] of Object.entries(bundle)) {
        if (chunk.type !== 'asset') continue
        const reg = /\.png$|\.jpg$|\.gif$|\.jpeg$|\.webp$|\.svg$|\.ico$/i
        if (!reg.test(chunk.fileName)) continue
        // sharp 图片压缩库 yarn add -D sharp
        const result = await opimizeImage(chunk.source)
        chunk.source = result
      }
    }
  }
}
