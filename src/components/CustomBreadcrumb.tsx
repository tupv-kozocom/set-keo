import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Link from 'next/link';

type BreadcrumbItemType = {
  label: string;
  href?: string;
  isCurrent?: boolean;
};

type CustomBreadcrumbProps = {
  items: BreadcrumbItemType[];
};

function CustomBreadcrumb({ items }: CustomBreadcrumbProps) {
  return (
    <Breadcrumb className="my-4">
      <BreadcrumbList>
        {items.map((item, index) => (
          <BreadcrumbItem key={index}>
            {item.isCurrent ? (
              <BreadcrumbPage className="text-primary">{item.label}</BreadcrumbPage>
            ) : (
              <>
                <BreadcrumbLink asChild>
                  <Link href={item.href || '#'}>{item.label}</Link>
                </BreadcrumbLink>
                {index < items.length - 1 && <BreadcrumbSeparator />}
              </>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default CustomBreadcrumb;
