import 'tdesign-web-components/image';

export default function ImageGalleryCover() {
  const label = (
    <t-tag
      shape="mark"
      theme="warning"
      style={{
        margin: 8,
        borderRadius: 3,
        background: 'rgba(236,242,254,1)',
        color: 'rgba(0,82,217,1)',
      }}
    >
      标签一
    </t-tag>
  );

  return (
    <t-image
      src="https://tdesign.gtimg.com/demo/demo-image-1.png"
      style={{ width: 284, height: 160 }}
      gallery
      overlayContent={label}
    />
  );
}
