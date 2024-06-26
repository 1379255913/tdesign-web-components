import 'tdesign-web-components/image';
import 'tdesign-web-components/space';

export default function fillModeImage() {
  return (
    <t-space breakLine size={16}>
      {['fill', 'contain', 'cover', 'none', 'scale-down'].map((item) => (
        <t-space direction="vertical" align="center" key={item}>
          <t-image
            src="https://tdesign.gtimg.com/demo/demo-image-1.png"
            fit={item}
            style={{ width: 120, height: 120 }}
          />
          {item}
        </t-space>
      ))}
    </t-space>
  );
}
