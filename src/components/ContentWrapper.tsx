interface ContentWrapperProps {
  title: string;
  titleSize?: number;
  actions?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const ContentWrapper = ({ title, titleSize, actions, children, className }: ContentWrapperProps) => {
  return (
    <div className={'bg-white rounded-lg p-8 ' + className}>
      <div className="flex flex-col sm:flex-row justify-between items-start mb-8">
        <h1 style={{ fontSize: titleSize ? `${titleSize}px` : undefined }} className="font-bold text-xl">
          {title}
        </h1>
        <div className="flex gap-4 flex-1 self-end mt-6 sm:mt-0 sm:justify-end">{actions}</div>
      </div>
      <hr className="mt-6 border-cloud-gray" />
      <div className="mt-4">{children}</div>
    </div>
  );
};

export default ContentWrapper;
