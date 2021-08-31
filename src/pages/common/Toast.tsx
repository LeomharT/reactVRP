import { Button } from '@zendeskgarden/react-buttons';
import { Col, Row } from '@zendeskgarden/react-grid';
import {
    Close, Notification,
    Title, ToastProvider,
    useToast
} from '@zendeskgarden/react-notifications';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import React, { HTMLAttributes, useCallback } from 'react';
import styled from 'styled-components';

const StyledRow = styled(Row)`
  & + & {
    margin-top: ${p => p.theme.space.md};
  }
`;

const Toasts = () => {
    const { addToast } = useToast();

    const handleClick = useCallback(
        (placement: 'top-start' | 'top' | 'top-end' | 'bottom-start' | 'bottom' | 'bottom-end') => {
            return () => {
                addToast(
                    ({ close }) => (
                        <Notification type="info" style={{ maxWidth: 450 }}>
                            <Title>Info</Title>
                            Turnip greens yarrow ricebean cauliflower sea lettuce kohlrabi amaranth water
                            <Close aria-label="Close" onClick={close} />
                        </Notification>
                    ),
                    { placement: 'top' }
                );
            };
        },
        [addToast]
    );

    return (
        <>
            <StyledRow>
                <Col size="4">
                    <Button onClick={handleClick('top-start')} isStretched>
                        top-start
                    </Button>
                </Col>
            </StyledRow>
        </>
    );
};

const topProps = {
    style: { top: DEFAULT_THEME.space.base * 3 }
} as HTMLAttributes<HTMLDivElement>;
const bottomProps = {
    style: { bottom: DEFAULT_THEME.space.base * 3 }
} as HTMLAttributes<HTMLDivElement>;
const placementProps = {
    'top-start': topProps,
    top: topProps,
    'top-end': topProps,
    'bottom-start': bottomProps,
    bottom: bottomProps,
    'bottom-end': bottomProps
};

const Example = () => (
    <ToastProvider placementProps={placementProps} zIndex={1}>
        <Toasts />
    </ToastProvider>
);

export default Example;
