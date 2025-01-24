import React from 'react';
import Link from '../Link';

interface Section {
    id: number;
    title: string;
    pathname: string;
    subsections?: Section[];
}
interface CollapsibleProps {
    section: Section;
}
const Collapsible: React.FC<CollapsibleProps> = ({ section }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const hasSubsections = section.subsections && section.subsections.length > 0;

    const toggleOpen = () => {
        if (hasSubsections) {
            setIsOpen(!isOpen);
        }
    };

    return (
        <li className={hasSubsections ? `menu-item-has-children ${isOpen ? 'active-expand' : ''}` : ''}>
            <div onClick={toggleOpen}>
                {hasSubsections && <span className="mobile-menu-expand"></span>}
                <Link pathname={section?.pathname}>{section?.title}</Link>
            </div>
            {hasSubsections && isOpen && (
                <ul className="sub-menu">
                    {section.subsections?.map((subsection) => (
                        <Collapsible
                            key={subsection.id}
                            section={subsection}
                        />
                    ))}
                </ul>
            )}
        </li>
    );
};

export default Collapsible;