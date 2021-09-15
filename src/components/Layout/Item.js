function LayoutItem({
  tag: Tag,
  children,
  rounded = false,
  mb = false,
  ...rest
}) {
  return (
    <Tag
      className={`w-full flex items-center px-3 lg:px-5 bg-primary-very-dark-desaturated-blue ${
        Tag === "li" &&
        "border-b last:border-b-0 border-primary-very-dark-gray-blue"
      }${rounded ? " rounded-md" : ""}${mb === true ? " mb-6" : ""}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default LayoutItem;
