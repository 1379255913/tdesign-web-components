import 'tdesign-web-components/range-input';

export default function RangeInput() {
  return (
    <t-space direction="vertical">
      <t-range-input status="success" />
      <t-range-input status="warning" />
      <t-range-input status="error" />
    </t-space>
  );
}
