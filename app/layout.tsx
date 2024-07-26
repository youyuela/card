// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: '文字生成卡片工具',
    description: '一款文字生成卡片在线工具',
    keywords: '文字生成卡片,文字生成图片,文字生成大字报,文生图,文字转换图片,文字转换卡片,文字转换海报',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="zh">
        <body>{children}</body>
        </html>
    )
}
