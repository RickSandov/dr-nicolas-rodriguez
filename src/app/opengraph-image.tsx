import { ImageResponse } from 'next/server'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'Dr. Nicolás Rodríguez Luna'
export const size = {
    width: 800,
    height: 600,
}

export const contentType = 'image/jpg'
export default async function Image() {
    return new ImageResponse(
        (
            <div style={{
                display: 'flex',
                objectFit: 'contain',
                background: 'black',
            }} tw='relative w-full h-full object-contain bg-black text-white' >
                <img
                    src={`${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.drnicolasrodriguez.com'}/_next/image?url=%2Fconsultorio.jpg&w=2048&q=75`}
                    alt="Dr. Nicolás Rodríguez Luna"
                    tw='object-contain w-full h-full'
                    style={{
                        display: 'flex',
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        background: 'black',
                    }}
                />
                <h1>Dr. Nicolas </h1>
            </div>
        ),
        size
    )
}
