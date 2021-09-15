function LayoutPanel({ tag: Tag, children, ...rest }) {
  return (
    <Tag className="overflow-hidden mb-6 empty:mb-0 rounded-md shadow-lg">
      {children}
    </Tag>
  );
}

export default LayoutPanel;
