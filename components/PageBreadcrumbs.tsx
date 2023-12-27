'use client';
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";

interface LinkProps {
    href: string,
    text: string
}

interface Props {
    links: LinkProps[]
    className?: string
}

export default function PageBreadcrumbs({ links, className }: Props) {
    return (
        <div className={className}>
            <Breadcrumbs>
                {links.map((link: LinkProps) => (
                    <BreadcrumbItem href={link.href} key={link.href}>{link.text}</BreadcrumbItem>
                ))}
            </Breadcrumbs>
        </div>
    );
}