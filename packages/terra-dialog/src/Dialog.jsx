import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import Button from 'terra-button';
import ContentContainer from 'terra-content-container';
import styles from './Dialog.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The children to be placed within the main content area of the dialog.
   */
  children: PropTypes.node,
  /**
   * React node to be placed within the header area of the dialog.
   */
  header: PropTypes.node.isRequired,
  /**
   * React node to be placed within the footer area of the dialog.
   * Content exceeding the available space will be hidden.
   */
  footer: PropTypes.node.isRequired,
  /**
   * Whether or not additional footer styling needs to be applied. Used in conjunction with custom content.
   */
  isFooterStyled: PropTypes.bool,
  /**
   * Callback function for when the close button is clicked. The close button will not display if this is not set.
   * On small viewports a back button will be displayed instead of a close button.
   */
  onClose: PropTypes.func,
  /**
   * Ref callback for the scrollable area of the content container.
   */
  scrollRefCallback: PropTypes.func,
};

const defaultProps = {
  onClose: null,
  children: null,
  isFooterStyled: false,
};

const contextTypes = {
  /* eslint-disable consistent-return */
  intl: (context) => {
    if (context.intl === undefined) {
      return new Error('Please add locale prop to Base component to load translations');
    }
  },
};

const Dialog = ({ children, header, footer, isFooterStyled, onClose, scrollRefCallback, ...customProps }, { intl }) => {
  const dialogClassNames = cx([
    'dialog',
    customProps.className,
  ]);

  const closeText = intl.formatMessage({ id: 'Terra.dialog.close' });
  const closeButton = onClose ? <div className={cx('dialog-header-close')}><Button variant="utility" text={closeText} onClick={onClose} isIconOnly icon={<span className={cx('close-icon')} />} /></div> : null;

  const dialogHeader = <div className={cx('dialog-header')}><div className={cx('dialog-header-title')}>{header}</div>{closeButton}</div>;
  const dialogFooter = isFooterStyled ? <div className={cx('dialog-footer')}>{footer}</div> : footer;

  return (
    <ContentContainer
      {...customProps}
      className={dialogClassNames}
      header={dialogHeader}
      footer={dialogFooter}
      scrollRefCallback={scrollRefCallback}
      fill
    >
      {children}
    </ContentContainer>
  );
};

Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;
Dialog.contextTypes = contextTypes;

export default Dialog;
