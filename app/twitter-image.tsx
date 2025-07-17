import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Scaletone - Theme Generator for shadcn/ui and Radix UI';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'linear-gradient(45deg, #0f172a 0%, #1e293b 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          color: 'white',
          textAlign: 'center',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 30,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              borderLeft: '8px solid #3b82f6',
              paddingLeft: 24,
              marginBottom: 12,
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span
                style={{
                  fontSize: 64,
                  fontWeight: 'bold',
                  background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Scaletone
              </span>
              <div
                style={{
                  fontSize: 18,
                  color: '#94a3b8',
                  display: 'flex',
                  flexDirection: 'column',
                  marginTop: 4,
                }}
              >
                <span>shadcn/radix colors</span>
                <span>theme generator</span>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            fontSize: 36,
            marginBottom: 20,
            maxWidth: 900,
            lineHeight: 1.2,
          }}
        >
          Generate Beautiful Themes for shadcn/ui & Radix UI
        </div>
        <div
          style={{
            fontSize: 24,
            color: '#94a3b8',
            maxWidth: 800,
            lineHeight: 1.3,
          }}
        >
          Create accessible, consistent design systems with Radix Colors
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}