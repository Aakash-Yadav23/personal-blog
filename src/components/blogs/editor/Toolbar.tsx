import React, { useState } from 'react';
import { Code2, Heading1, Image, Link2 } from 'lucide-react';
import { CODE, HEADERS, IMAGE, LINK, PARAGRAPH } from '@/components/constants/Constants';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface ContentI {
    type: string;
    value: string;
    level?: number;
    class?: string;
    href?: string;
}

interface ToolbarProps {
    insertElement: (content: ContentI) => void;
    selectedElement: string | undefined;
    
    handleLinkUrlChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleLinkSubmit: () => void;
    linkUrl: string;
}

const Toolbar = ({
    insertElement,
    selectedElement,
    handleLinkUrlChange,
    handleLinkSubmit,
    linkUrl,
}: ToolbarProps) => {
    return (
        <div className="toolbar flex items-center gap-2">
            <Button
                onClick={() =>
                    insertElement({
                        type: HEADERS,
                        value: '',
                        level: 1,
                        class: '',
                    })
                }
            >
                <Heading1 className="" />
            </Button>
            <Button
                onClick={() =>
                    insertElement({
                        type: PARAGRAPH,
                        value: '',
                        class: '',
                    })
                }
            >
                P
            </Button>
            <div>
                <Button
                    onClick={() =>
                        insertElement({
                            type: LINK,
                            value: '',
                            href: '',
                            class: '',
                        })
                    }
                >
                    <Link2 />
                </Button>
                {selectedElement === LINK && (
                    <div>
                        <input
                            type="text"
                            value={linkUrl}
                            onChange={handleLinkUrlChange}
                            placeholder="Enter link URL"
                        />
                        <Button onClick={handleLinkSubmit}>Add Link</Button>
                    </div>
                )}
            </div>
            <Button
                onClick={() =>
                    insertElement({
                        type: IMAGE,
                        value: '',
                        class: '',
                    })
                }
            >
                <Image />
            </Button>
            <Button
                onClick={() =>
                    insertElement({
                        type: CODE,
                        value: '',
                        class: '',
                    })
                }
            >
                <Code2 />
            </Button>
        </div>
    );
};

export default Toolbar;