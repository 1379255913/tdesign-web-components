import 'tdesign-web-components/space';
import 'tdesign-web-components/button';
import 'tdesign-web-components/divider';

export default function SpaceSeparator() {
  return (
    <t-space align="center" separator={<t-divider layout="vertical" />}>
      <t-button variant="text">Text</t-button>
      <t-button variant="text">Text</t-button>
      <t-button variant="text">Text</t-button>
    </t-space>
  );
}
