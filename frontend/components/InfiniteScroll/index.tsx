import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

interface InfiniteScrollProps {
    children: React.ReactNode;
    element?: 'div' | 'span';
    hasMore?: boolean;
    initialLoad?: boolean;
    isReverse?: boolean;
    loader?: React.ReactNode;
    loadMore: (page: number) => void;
    pageStart?: number;
    refCallback?: (node: HTMLElement | null) => void;
    getScrollParent?: () => HTMLElement | null;
    threshold?: number;
    useCapture?: boolean;
    useWindow?: boolean;
    className?: string;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
    children,
    element: Component = 'div',
    hasMore = false,
    initialLoad = true,
    isReverse = false,
    loader = null,
    loadMore,
    pageStart = 0,
    refCallback,
    getScrollParent,
    threshold = 250,
    useCapture = false,
    useWindow = true,
    ...props
}) => {
    const scrollComponentRef = useRef<HTMLElement | null>(null);
    const pageLoadedRef = useRef(pageStart);
    const beforeScrollHeightRef = useRef(0);
    const beforeScrollTopRef = useRef(0);
    const [isLoading, setIsLoading] = useState(false);

    const getParentElement = useCallback(() => {
        return getScrollParent ? getScrollParent() : scrollComponentRef.current?.parentNode as HTMLElement;
    }, [getScrollParent]);

    const calculateOffset = useCallback((el: HTMLElement | null, scrollTop: number) => {
        if (!el) return 0;

        const calculateTopPosition = (node: HTMLElement | null): number =>
            node ? node.offsetTop + calculateTopPosition(node.offsetParent as HTMLElement) : 0;

        return calculateTopPosition(el) + (el.offsetHeight - scrollTop - window.innerHeight);
    }, []);

    const scrollListener = useCallback(() => {
        const el = scrollComponentRef.current;
        const parentNode = getParentElement();
        if (!el || !parentNode) return;

        let offset = 0;
        if (useWindow) {
            const doc = document.documentElement || document.body.parentNode as HTMLElement || document.body;
            const scrollTop = window.pageYOffset || doc.scrollTop;
            offset = isReverse ? scrollTop : calculateOffset(el, scrollTop);
        } else {
            offset = isReverse
                ? parentNode.scrollTop
                : el.scrollHeight - parentNode.scrollTop - parentNode.clientHeight;
        }

        if (offset < threshold && el.offsetParent !== null) {
            beforeScrollHeightRef.current = parentNode.scrollHeight;
            beforeScrollTopRef.current = parentNode.scrollTop;

            if (typeof loadMore === 'function') {
                loadMore((pageLoadedRef.current += 1));
                setIsLoading(true);
            }
        }
    }, [getParentElement, isReverse, loadMore, threshold, useWindow, calculateOffset]);

    const attachScrollListener = useCallback(() => {
        const parentElement = getParentElement();
        if (!hasMore || !parentElement) return;

        const scrollEl = useWindow ? window : parentElement;
        scrollEl?.removeEventListener('scroll', scrollListener);
        scrollEl?.removeEventListener('resize', scrollListener);

        scrollEl.addEventListener('scroll', scrollListener, { capture: useCapture, passive: true });
        scrollEl.addEventListener('resize', scrollListener, { capture: useCapture, passive: true });

        if (initialLoad) {
            scrollListener();
        }
    }, [getParentElement, hasMore, initialLoad, scrollListener, useCapture, useWindow]);



    useEffect(() => {
        attachScrollListener();
    }, [attachScrollListener, scrollListener]);

    useEffect(() => {
        if (isReverse && isLoading) {
            const parentElement = getParentElement();
            if (parentElement) {
                parentElement.scrollTop =
                    parentElement.scrollHeight -
                    beforeScrollHeightRef.current +
                    beforeScrollTopRef.current;
                setIsLoading(false);
            }
        }
        attachScrollListener();
    }, [isReverse, attachScrollListener, getParentElement, isLoading]);

    const childrenArray = useMemo(() => {
        const array = React.Children.toArray(children);
        if (hasMore && loader) {
            if (
                React.isValidElement(loader) ||
                typeof loader === 'string' ||
                typeof loader === 'number' ||
                typeof loader === 'bigint'
            ) {
                if (isReverse) {
                    array.unshift(loader);
                } else {
                    array.push(loader);
                }
            }
        }
        return array;
    }, [children, hasMore, loader, isReverse]);


    return (
        <Component
            ref={(node) => {
                scrollComponentRef.current = node;
                if (refCallback) {
                    refCallback(node);
                }
            }}
            className=''
            {...props}
        >
            {childrenArray}
        </Component>
    );
};

export default InfiniteScroll;
