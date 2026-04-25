interface NoiseTextureProps {
    opacity?: string;
}

export const NoiseTexture = ({ opacity = "opacity-[0.03]" }: NoiseTextureProps) => (
    <div
        className={`absolute inset-0 pointer-events-none ${opacity}`}
        style={{
            backgroundImage: `url("data:image/svg+xml,...")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '128px',
        }}
    />
);