interface ContentWrapperProps {
  title: string;
  actions?: React.ReactNode;
  children?: React.ReactNode;
}

const ContentWrapper = ({ title, actions, children }: ContentWrapperProps) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-start mb-8">
        <h1 className="text-xl font-bold ">{title}</h1>
        <div className="flex gap-4 flex-1 self-end mt-6 sm:mt-0 sm:justify-end">{actions}</div>
      </div>
      <hr className="mt-6 border-cloud-gray" />
      <div className="mt-4">{children}</div>
    </>
  );
};

export default ContentWrapper;
