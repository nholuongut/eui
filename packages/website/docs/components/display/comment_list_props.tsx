import React, { ReactNode } from 'react';
import { css } from '@emotion/react';

import {
  EuiPanel,
  EuiButtonIcon,
  EuiCommentList,
  EuiComment,
  useEuiTheme,
  EuiAvatar,
  useEuiFontSize,
  logicalCSS,
  logicalBorderRadiusCSS,
  EuiSpacer,
  EuiAccordion,
  EuiCodeBlock,
} from '@elastic/eui';

export const CommentListProps = ({ snippet }: { snippet: ReactNode }) => {
  const { euiTheme } = useEuiTheme();

  const CircleIndicator = ({ name, ...rest }: any) => (
    <span {...rest}>
      <span
        css={css`
          display: inline-block;
          ${logicalCSS('width', euiTheme.size.base)}
          ${logicalCSS('height', euiTheme.size.base)}
          background: ${euiTheme.colors.primary};
          color: ${euiTheme.colors.emptyShade};
          ${useEuiFontSize('xs')};
          // override due to a custom lineHeightMultiplier set
          line-height: 1.14rem;
          text-align: center;
          border-radius: 50%;
        `}
      >
        {name}
      </span>
    </span>
  );

  const HighlightedArea = ({ children }: { children: ReactNode }) => (
    <span
      css={css`
        padding: ${euiTheme.size.xs};
        border-radius: ${euiTheme.border.radius.small};
      `}
    >
      {children}
    </span>
  );

  return (
    <div style={{ maxWidth: '540px' }}>
      <EuiCommentList>
        <EuiComment username="avatar" timelineAvatarAriaLabel="Avatar">
          <div
            css={css`
              border-radius: ${euiTheme.border.radius.small};
              border: ${euiTheme.border.thin};
              ${useEuiFontSize('s')};
            `}
          >
            <div
              css={css`
                ${logicalBorderRadiusCSS(
                  `${euiTheme.border.radius.small} ${euiTheme.border.radius.small} 0 0`,
                  true
                )}
                padding: ${euiTheme.size.s};
                background: ${euiTheme.colors.lightestShade};
                ${logicalCSS('border-bottom', euiTheme.border.thin)}
                display: flex;
              `}
            >
              <div
                css={css`
                  flex: 1;
                  display: flex;
                  gap: ${euiTheme.size.xs};
                  align-items: center;
                  flex-wrap: wrap;
                `}
              >
                <span
                  css={css`
                    ${logicalCSS('margin-right', euiTheme.size.s)}
                  `}
                >
                  <EuiAvatar
                    name="event icon"
                    size="s"
                    color={euiTheme.colors.textPrimary}
                    initials="2"
                  />
                </span>

                <HighlightedArea>
                  <CircleIndicator name="3" /> username
                </HighlightedArea>

                <HighlightedArea>
                  <CircleIndicator name="4" /> event
                </HighlightedArea>

                <HighlightedArea>
                  <CircleIndicator name="5" /> timestamp
                </HighlightedArea>
              </div>

              <HighlightedArea>
                <CircleIndicator name="6" />
                <EuiButtonIcon
                  aria-hidden="true"
                  iconType="boxesVertical"
                  color="text"
                />
              </HighlightedArea>
            </div>
            <div
              css={css`
                position: relative;
                padding: ${euiTheme.size.s};
                display: flex;
                align-items: center;
              `}
            >
              <HighlightedArea>
                <CircleIndicator name="7" /> children
              </HighlightedArea>
            </div>
          </div>
        </EuiComment>
      </EuiCommentList>

      <EuiSpacer size="xs" />
      <EuiAccordion
        id="propsSnippet"
        buttonContent={<small>Code snippet</small>}
        css={css`
          ${logicalCSS('margin-left', euiTheme.size.xxxl)}
        `}
      >
        <EuiSpacer size="xs" />
        <EuiCodeBlock language="ts" isCopyable paddingSize="s">
          {snippet}
        </EuiCodeBlock>
      </EuiAccordion>

      <EuiSpacer />
    </div>
  );
};

export const CommentListStyle = ({ children }) => (
  <div
    css={css`
      ol {
        list-style-type: upper-alpha;
      }
    `}
  >
    {children}
  </div>
);
